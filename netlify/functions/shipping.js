exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        console.log('Received request with unsupported HTTP method:', event.httpMethod);
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
            headers: {
                'Content-Type': 'application/json', // Ensure response has correct header
            },
        };
    }

    try {
        // Parse the incoming request body (JSON)
        const payload = JSON.parse(event.body);  // Correctly parse the incoming JSON
        const { items, shippingAddressPostalCode, finalGrandTotal, totalWeight } = payload.content;

        const postcode = shippingAddressPostalCode || '';
        const orderTotal = finalGrandTotal; // Snipcart total is in cents
        const orderWeight = totalWeight;

        // Find restricted products (those with weight 0)
        const restrictedProducts = items.filter(item => item.weight === 0); // Check for weight 0
        const restrictedProductNames = restrictedProducts.map(item => item.name).join('\n');
        // console.log(restrictedProductNames);

        const shippingRates = [];

        // Regex for UK postal codes
        // const ukPostcodeRegex = /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? ?[0-9][A-Za-z]{2}$/;

        // If the address is outside the UK
        // if (!ukPostcodeRegex.test(postcode)) {
        //     shippingRates.push({
        //         key: "country_unavailable_for_delivery",
        //         message: `Sorry, we currently only deliver to addresses within the UK.`
        //     });
        //     return {
        //         statusCode: 200,
        //         body: JSON.stringify({
        //             errors: shippingRates,
        //             message: 'Sorry, we currently only deliver to addresses within the UK.',
        //         }),
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //     };
        // }


        // Rule 1: Free Local Delivery
        if (orderTotal > 10 && /^[aA][lL](1|3|4|5)\b/.test(postcode)) {
            shippingRates.push({
                userDefinedId: 'free-local-delivery',
                description: 'Free Local Delivery',
                cost: 0,
            });
        }

        // Rule 2: Royal Mail Delivery
        if (orderTotal > 10 && !/^[aA][lL](1|3|4|5)\b/.test(postcode)) {
             // If restricted products are in the basket, show a message and return no shipping rates
            if (restrictedProducts.length > 0) {
                shippingRates.push({
                    key: "items_unavailable_for_delivery",
                    message: `Sorry! Unfortunately, we can’t deliver the following products to your area to ensure their freshness: \n\n ${restrictedProductNames}`
                });
                return {
                    statusCode: 200,
                    body: JSON.stringify({
                        errors: shippingRates, // Empty rates due to restricted items
                        message: `Sorry, delivery to your area is unavailable for the following products: ${restrictedProductNames}`,
                    }),
                    headers: {
                        'Content-Type': 'application/json', // Ensure response has correct header
                    },
                };
            }

            // For no restricted items
            if (orderWeight <= 30) {
                shippingRates.push({
                    userDefinedId: 'royal-mail-standard',
                    description: 'Royal Mail Delivery',
                    cost: 5.95,
                });
            } else {
                shippingRates.push({
                    userDefinedId: 'royal-mail-heavy',
                    description: 'Royal Mail Delivery',
                    cost: 9.99,
                });
            }
        }

        // Return the shipping rates if no restricted items
        return {
            statusCode: 200,
            body: JSON.stringify({ rates: shippingRates }),
            headers: {
                'Content-Type': 'application/json', // Ensure response has correct header
            },
        };
    } catch (error) {
        console.error("Error processing request:", error);
        return {
            statusCode: 500,
            body: `Internal Server Error: ${error.message}`,
            headers: {
                'Content-Type': 'application/json', // Ensure response has correct header
            },
        };
    }
};
