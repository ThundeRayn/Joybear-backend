import express from 'express';
import type { Request, Response } from 'express';
import { sendEmail } from '../config/index.js';

const router = express.Router();

router.post('/send-contact', async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'backend error catched: Missing required fields' });
    }

    // Send contact form to your email (RECEIVE_EMAIL)
    await sendEmail(
      process.env.RECEIVE_EMAIL!,
      `New Contact Form: ${name}`,
      `From: ${email}\n\n${message}`,
      email // replyTo — so you can hit "Reply" and respond to the visitor
    );

    // Send confirmation to the visitor
    await sendEmail(
      email,
      'We received your message',
      'Thank you for contacting us. We will get back to you soon!'
    );

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

export default router;
