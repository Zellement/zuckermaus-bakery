exports.handler = async function (event, context) {
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed',
        };
    }

    try {
        // Log the raw body of the incoming request for inspection
        console.log("Incoming payload:", event.body);
        
        const payload = JSON.parse(event.body);
        const { items, shippingAddress, total, weight } = payload.content;

        // Log the parsed content to inspect the structure
        console.log("Parsed payload:", payload);

        const postcode = shippingAddress?.postalCode || '';
        const orderTotal = total / 100; // Snipcart total is in cents
        const totalWeight = weight;

        // Find restricted products
        const restrictedProducts = items.filter(item => item.customFields?.excludeFromDelivery === 'true');

        const shippingRates = [];

        // Rule 1: No Delivery Available (if restricted products exist)
        if (restrictedProducts.length > 0) {
            // Generate a message indicating restricted products prevent delivery
            const restrictedProductNames = restrictedProducts.map(item => item.name).join(', ');
            return {
                statusCode: 200,
                body: JSON.stringify({
                    rates: [],
                    message: `Shipping is unavailable for the following products: ${restrictedProductNames}`,
                }),
            };
        }

        // Rule 2: Free Local Delivery
        if (orderTotal > 10 && /^[aA][lL](1|3|4|5)\b/.test(postcode)) {
            shippingRates.push({
                id: 'free-local-delivery',
                name: 'Free Local Delivery',
                cost: 0,
            });
        }

        // Rule 3: Royal Mail Delivery
        if (orderTotal > 10 && !/^[aA][lL](1|3|4|5)\b/.test(postcode)) {
            if (totalWeight <= 30) {
                shippingRates.push({
                    id: 'royal-mail-standard',
                    name: 'Royal Mail Delivery (0-30kg)',
                    cost: 595,
                });
            } else {
                shippingRates.push({
                    id: 'royal-mail-heavy',
                    name: 'Royal Mail Delivery (>30kg)',
                    cost: 999,
                });
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ rates: shippingRates }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: `Internal Server Error: ${error.message}`,
        };
    }
};
