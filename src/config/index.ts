import 'dotenv/config'; // load .env before reading process.env
import axios from 'axios';

// ZeptoMail API endpoint (US region — matches info@joybeartoys.com on zoho.com)
const ZEPTOMAIL_API = 'https://api.zeptomail.com/v1.1/email';

// Send an email using ZeptoMail's HTTP API (uses HTTPS, works everywhere)
export async function sendEmail(
  to: string,
  subject: string,
  htmlBody: string,
  replyTo?: string
) {
  const response = await axios.post(
    ZEPTOMAIL_API,
    {
      from: {
        address: process.env.EMAIL_USER, // <-- info@joybeartoys.com in .env
      },
      to: [
        {
          email_address: {
            address: to,
          },
        },
      ],
      subject,
      htmlbody: htmlBody, // Send HTML email instead of plain text
      ...(replyTo && { reply_to: { address: replyTo } }),
    },
    {
      headers: {
        Authorization: `Zoho-enczapikey ${process.env.ZEPTOMAIL_TOKEN}`, // <-- Your ZeptoMail token in .env
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
}
