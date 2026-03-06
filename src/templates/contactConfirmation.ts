// Template: confirmation email sent to the VISITOR after they submit the contact form

export function contactConfirmationTemplate(name: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8f8f8; font-family: Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8f8f8; padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 4px rgba(200,200,200,0.3);">

              <!-- Header with logo -->
              <tr>
                <td style="background-color: #c99058; padding: 24px; text-align: center;">
                  <img src="https://joybeartoys.com/joybear-newicon.png" alt="JoyBear" height="40" style="height: 40px;" />
                </td>
              </tr>

              <!-- Greeting -->
              <tr>
                <td style="padding: 32px 32px 16px;">
                  <h1 style="margin: 0; font-size: 22px; color: #333333;">Thank you, ${name}!</h1>
                </td>
              </tr>

              <!-- Message -->
              <tr>
                <td style="padding: 0 32px 24px;">
                  <p style="font-size: 16px; color: #555555; line-height: 1.6; margin: 0;">
                    We've received your message and our team will get back to you as soon as possible.
                  </p>
                  <p style="font-size: 16px; color: #555555; line-height: 1.6; margin: 16px 0 0;">
                    If your inquiry is urgent, feel free to reach us directly at
                    <a href="mailto:info@joybeartoys.com" style="color: #90d2f4; text-decoration: none;">info@joybeartoys.com</a>.
                  </p>
                </td>
              </tr>

              <!-- Divider -->
              <tr>
                <td style="padding: 0 32px;">
                  <hr style="border: none; border-top: 1px solid #eeeeee; margin: 0;" />
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 24px 32px; text-align: center;">
                  <p style="margin: 0 0 8px; font-size: 14px; color: #c99058; font-weight: bold;">JoyBear Toys</p>
                  <p style="margin: 0; font-size: 13px; color: #999999;">
                    Bringing joy to every moment.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}
