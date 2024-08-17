import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { to, subject, htmlContent, textContent } = await req.json();

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': process.env.NEXT_PUBLIC_BREVO_API_KEY || '',
    },
    body: JSON.stringify({
      sender: { name: 'Support', email: 'davidnienge@gmail.com' },
      to: [{ email: to }],
      htmlContent: htmlContent,
      textContent: textContent,
      subject: subject,
    }),
  };

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', options);
    const result = await response.json();

    if (response.ok) {
      return NextResponse.json({ message: 'Email sent successfully', result });
    } else {
      return NextResponse.json({ error: 'Failed to send email', details: result }, { status: 500 });
    }
  } catch (error) {
    return NextResponse.json({ error: 'An error occurred', details: error }, { status: 500 });
  }
}
