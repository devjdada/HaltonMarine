import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Halton Marine <onboarding@resend.dev>',
      to: ['info@haltonmarinedredging.com'],
      subject: 'New Contact Form Submission',
      react: EmailTemplate({ name, email, phone, message }),
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};