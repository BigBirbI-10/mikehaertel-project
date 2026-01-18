import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (for production, use Redis or Upstash)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function getRateLimitKey(ip: string): string {
  return `ratelimit:${ip}`;
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const key = getRateLimitKey(ip);
  const limit = rateLimitMap.get(key);

  // Allow 3 submissions per hour per IP
  const MAX_REQUESTS = 3;
  const WINDOW_MS = 60 * 60 * 1000; // 1 hour

  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(key, { count: 1, resetTime: now + WINDOW_MS });
    return true;
  }

  if (limit.count >= MAX_REQUESTS) {
    return false;
  }

  limit.count++;
  return true;
}

export async function POST(req: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Length validation
    if (name.length > 100 || email.length > 100 || subject.length > 200 || message.length > 5000) {
      return NextResponse.json(
        { error: 'Input too long.' },
        { status: 400 }
      );
    }

    // Spam detection - simple keyword check
    const spamKeywords = ['crypto', 'bitcoin', 'viagra', 'casino', 'lottery', 'winner'];
    const combinedText = `${subject} ${message}`.toLowerCase();
    const hasSpam = spamKeywords.some(keyword => combinedText.includes(keyword));

    if (hasSpam) {
      // Silently accept but don't send (honeypot approach)
      console.log('Spam detected from:', email);
      return NextResponse.json({ success: true });
    }

    // Send email via Resend
    const data = await resend.emails.send({
      from: 'Mike Haertel Contact Form <noreply@mikehaertel.com>',
      to: 'blue.rain6100@fastmail.com',
      replyTo: email,
      subject: `[Portfolio Contact] ${subject}`,
      headers: {
        'X-Entity-Ref-ID': `contact-${Date.now()}`,
      },
      text: `
You have received a new message from your portfolio contact form.

FROM: ${name}
EMAIL: ${email}
SUBJECT: ${subject}

MESSAGE:
${message}

---
Metadata:
Timestamp: ${new Date().toISOString()}
IP Address: ${ip}
      `.trim(),
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
  <div style="background-color: #f8f9fa; border-left: 4px solid #0066cc; padding: 20px; margin-bottom: 20px;">
    <h2 style="margin-top: 0; color: #0066cc;">New Contact Form Submission</h2>
    <p style="margin-bottom: 0; color: #666;">You have received a new message from your portfolio website.</p>
  </div>

  <div style="background-color: #fff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 4px;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;"><strong>From:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${name}</td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;"><strong>Email:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${email}" style="color: #0066cc; text-decoration: none;">${email}</a></td>
      </tr>
      <tr>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;"><strong>Subject:</strong></td>
        <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${subject}</td>
      </tr>
    </table>

    <div style="margin-top: 20px;">
      <h3 style="color: #333; margin-bottom: 10px;">Message:</h3>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</div>
    </div>
  </div>

  <div style="margin-top: 20px; padding: 15px; background-color: #f8f9fa; border-radius: 4px; font-size: 12px; color: #666;">
    <strong>Metadata:</strong><br>
    Timestamp: ${new Date().toISOString()}<br>
    IP Address: ${ip}
  </div>

  <div style="margin-top: 20px; text-align: center; font-size: 11px; color: #999;">
    <p>This email was sent from your portfolio contact form at mikehaertel.com</p>
  </div>
</body>
</html>
      `.trim(),
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
