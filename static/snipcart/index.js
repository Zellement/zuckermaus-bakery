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
                  <div style="padding: 10px;">
                    <ul style="position: relative; font-weight: bold; padding: 10px;  padding-left: 32px;">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" style="position: absolute; top: 10px; left: 0;" width="24" height="24" viewBox="0 0 24 24"><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11v5m0 5a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"/></svg>
                      <li style="margin-bottom: 10px; line-height: 21px;">Minimum order value is £10. Please note you will not be able to complete an order less than £10.</li>
                      <li style="line-height: 21px;">If you would like to make a large order out of our delivery area, please contact us directly.</li>
                    </ul>
                    </div>
                    <div style="background-color: #eeeeee; padding: 10px; border: 2px; border-color: red;">
                    <p style="position: relative; display: block; gap: 10px; margin-bottom: 2px; line-height: 20px; padding-left: 32px;">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" style="position: absolute; top: 5px; left: 0;" width="20" height="20" style="margin-top: 3px;"><path fill="#000" fill-rule="evenodd" d="M17.971 8H1.997V4.971A.97.97 0 0 1 2.967 4h1.027v2H5.99V4h7.988v2h1.996V4h.999a1 1 0 0 1 .998 1v3Zm0 9c0 .55-.449 1-.998 1H2.995a1 1 0 0 1-.998-1v-7H17.97v7Zm-17.907.761c0 1.104.957 2.239 2.06 2.239h15.974C19.201 20 20 18.979 20 17.761c0-.389-.032-12.401-.032-13.053 0-2.082-.28-2.708-3.994-2.708V0h-1.996v2H5.99V0H3.994v2H1.997C.899 2 0 2.9 0 4l.064 13.761Z"/></svg>
                      
                      <span style="line-height: 24px; display: block;">Please enter the date you would like the delivery, allowing at least <span style="font-weight: bold; display: inline-block;">48 hours</span> for preparation. Please note we may need to contact you if there are any issues.</span>
                      </p>
                  <snipcart-label
                    class="snipcart-form__label"
                    for="Requested Delivery Date"
                    style="margin-top: 20px; font-weight: bold;"
                  >
                    Requested Delivery Date
                  </snipcart-label>
                  <snipcart-textarea name="Requested Delivery Date" placeholder="Please allow at least 48 hours for preparation and delivery"> </snipcart-textarea>
                  </div>
                    <div style="margin-top: 20px; padding: 10px; border: 2px; border-color: red;">
                    <p style="position: relative; display: block; gap: 10px; margin-bottom: 2px; line-height: 20px; padding-left: 32px;">

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1920" style="position: absolute; top: 5px; left: 0;" width="20" height="20"><path fill-rule="evenodd" d="M392.26 1042.5c137.747-57.67 292.85-15.269 425.873 116.217l4.394 4.833c116.656 146.425 149.5 279.119 97.873 394.237-128.85 287.138-740.692 328.77-810.005 332.504L0 1896.442l61.953-91.83c.989-1.539 105.013-158.728 105.013-427.192 0-141.811 92.6-279.558 225.294-334.92ZM1728.701 23.052c54.923-1.099 99.96 15.268 135.111 49.43 40.643 40.644 58.109 87.877 56.021 140.603C1908.85 474.52 1423.33 953.447 1053.15 1280.79c-24.276-64.81-63.711-136.21-125.335-213.102l-8.787-9.886c-80.078-80.187-169.163-135.11-262.423-161.473C955.276 558.002 1460.677 33.927 1728.701 23.052Z"/></svg>
                      
                      <span style="line-height: 24px; display: block;">Place any personal message here, and we will write it onto your cake if we can. If we have any questions we will be in touch with you.</span>
                      </p>
                  <snipcart-label
                    class="snipcart-form__label"
                    for="Personal Message"
                    style="margin-top: 20px; font-weight: bold;"
                  >
                    Personal Message
                  </snipcart-label>
                  <snipcart-textarea name="Personal Message" placeholder="Write your small personal message here"> </snipcart-textarea>
                  </div>
                </div>
              </div>
            </div>
          </address-fields>
        </div>
      </body>
    </html>
</>
  ) }
