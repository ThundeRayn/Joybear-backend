// Template: email sent to YOU (the business owner) when someone submits the contact form

export function contactNotificationTemplate(name: string, email: string, message: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8" />
    </head>
    <body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: Arial, sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f5f5f5; padding: 40px 0;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">

              <!-- Header with logo -->
              <tr>
                <td style="background-color: #8B6F47; padding: 24px; text-align: center;">
                  <img src="https://res.cloudinary.com/dqj2gwlpf/image/upload/v1768928737/joybear-logo_white_rnqxzl.png" alt="JoyBear" height="40" style="height: 40px;" />
                </td>
              </tr>

              <!-- Title -->
              <tr>
                <td style="padding: 32px 32px 16px;">
                  <h1 style="margin: 0; font-size: 22px; color: #333333;">New Contact Form Submission</h1>
                </td>
              </tr>

              <!-- Form data -->
              <tr>
                <td style="padding: 0 32px;">
                  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9f9f9; border-radius: 6px; padding: 20px;">
                    <tr>
                      <td style="padding: 12px 20px; border-bottom: 1px solid #eeeeee;">
                        <strong style="color: #666666; font-size: 13px; text-transform: uppercase;">Name</strong>
                        <p style="margin: 4px 0 0; font-size: 16px; color: #333333;">${name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 20px; border-bottom: 1px solid #eeeeee;">
                        <strong style="color: #666666; font-size: 13px; text-transform: uppercase;">Email</strong>
                        <p style="margin: 4px 0 0; font-size: 16px; color: #333333;">
                          <a href="mailto:${email}" style="color: #8B6F47; text-decoration: none;">${email}</a>
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 12px 20px;">
                        <strong style="color: #666666; font-size: 13px; text-transform: uppercase;">Message</strong>
                        <p style="margin: 4px 0 0; font-size: 16px; color: #333333; white-space: pre-wrap;">${message}</p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 24px 32px; text-align: center;">
                  <p style="margin: 0; font-size: 13px; color: #999999;">
                    This email was sent from the JoyBear contact form.
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
