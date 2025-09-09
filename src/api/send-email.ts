import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const response = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>', // You'll need to verify a domain with Resend
      to: 'dimanrandisa@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <div style="background: linear-gradient(90deg, #06b6d4 0%, #8b5cf6 100%); padding: 20px; border-radius: 8px 8px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">New Portfolio Contact</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <div style="margin-bottom: 20px;">
              <h2 style="color: #374151; margin-bottom: 5px;">From:</h2>
              <p style="margin: 0; color: #6b7280;">${name} (${email})</p>
            </div>
            
            <div style="margin-bottom: 20px;">
              <h2 style="color: #374151; margin-bottom: 5px;">Subject:</h2>
              <p style="margin: 0; color: #6b7280;">${subject}</p>
            </div>
            
            <div>
              <h2 style="color: #374151; margin-bottom: 10px;">Message:</h2>
              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; border-left: 4px solid #06b6d4;">
                <p style="margin: 0; color: #374151; line-height: 1.6;">${message}</p>
              </div>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 20px;">
            <p style="color: #6b7280; font-size: 14px;">This message was sent from your portfolio website.</p>
          </div>
        </div>
      `,
    });

    // ✅ Fix: access `response.data?.id` instead of `response.id`
    return res.status(200).json({ 
      message: 'Email sent successfully', 
      id: response.data?.id ?? null 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Failed to send email' });
  }
}
