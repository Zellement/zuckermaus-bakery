export default function SnipCartTemplate() {
  return(
    <>
    <!DOCTYPE html>
    <html>
      <head>
        <title>Snipcart Templates</title>
      </head>

      <body>
        <div id="snipcart-templates">
          <cart section="header"> 
            <div class="root">
              <cart-header title="Minimum order value is £10" style="font-size: 1.3em">
             </cart-header>
            </div>
          </cart>
          <address-fields section="top">
            <div class="root">
              <div class="snipcart-form__set">
                <div class="snipcart-form__field">
                  <snipcart-label
                    class="snipcart-form__label snipcart__font--tiny"
                    style="white-space: normal;"
                    for="phone"
                  >
                    Phone number
                  </snipcart-label>
                  <snipcart-input name="phone"> </snipcart-input>
                </div>
                <div class="snipcart-form__field !border-red !border">
                    <ul style="margin: 20px 0;">
                      <li style="margin: 5px 0; font-weight: bold; border: 1px blue solid; padding: 10px; line-height: 22px;">Minimum order value is £10. Please note you will not be able to complete an order less than £10.</li>
                      <li style="margin: 5px 0; line-height: 20px;">If you would like to make a large order out of our delivery area, please contact us directly.</li>
                    </ul>
                    <span class="" style="display: block; margin-top: 4px; margin-bottom: 2px; line-height: 20px;">Please enter the date you would like the delivery, allowing at least <span style="font-weight: bold; display: inline-block;">48 hours</span> for preparation. Please note we may need to contact you if there are any issues.</span>
                  <snipcart-label
                    class="snipcart-form__label"
                    for="Requested Delivery Date"
                    style="margin-top: 20px;"
                  >
                    Requested Delivery Date
                  </snipcart-label>
                  <snipcart-textarea name="Requested Delivery Date" placeholder="Please allow at least 48 hours for preparation and delivery"> </snipcart-textarea>
                </div>
              </div>
            </div>
          </address-fields>
        </div>
      </body>
    </html>
</>
  ) }
