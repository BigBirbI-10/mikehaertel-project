# Contact Form Setup Guide

Your secure contact form is ready! It uses **Resend** to send emails to your **SimpleLogin alias** which forwards to your **Proton Mail**.

## Security Features

✅ **Rate limiting**: 3 submissions per hour per IP address
✅ **Spam detection**: Basic keyword filtering
✅ **Input validation**: Email format, length limits, required fields
✅ **Privacy**: Your real email stays hidden behind SimpleLogin
✅ **No tracking**: No Google reCAPTCHA or analytics

## Setup Steps

### 1. Create a Resend Account

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account (3,000 emails/month)
3. Verify your email address

### 2. Get Your API Key

1. Log into Resend dashboard
2. Go to **API Keys** section
3. Click **Create API Key**
4. Give it a name (e.g., "Portfolio Contact Form")
5. Copy the API key (starts with `re_`)

### 3. Add API Key to Your Project

Create a file called `.env.local` in the `website` directory:

```bash
cd /Users/MikeATX/Code/mikehaertel-project/website
cp .env.example .env.local
```

Then edit `.env.local` and add your key:

```bash
RESEND_API_KEY=re_your_actual_api_key_here
```

### 4. Test the Form Locally

```bash
npm run dev
```

Navigate to `http://localhost:3000` and scroll to the contact form. Submit a test message.

You should receive an email at: `personalsite.identity920@slmails.com` → Forwarded to your Proton Mail

### 5. Verify Email Flow

1. Fill out the contact form with test data
2. Click "Send Message"
3. Check your Proton Mail inbox
4. You should see an email from Resend with:
   - Sender's name and email (set as Reply-To)
   - Subject line
   - Message content
   - IP address and timestamp

## Email Flow

```
Visitor fills form
    ↓
Next.js API route (/api/contact)
    ↓
Resend API sends email
    ↓
personalsite.identity920@slmails.com (SimpleLogin alias)
    ↓
Your Proton Mail inbox
    ↓
You reply directly from Proton (encrypted)
```

## Production Considerations

When you deploy to AWS/Vercel:

1. **Add environment variable** to your hosting platform (Vercel, AWS Amplify, etc.)
2. **Rate limiting**: Current implementation uses in-memory storage (resets on server restart). For production, consider:
   - Redis (Upstash free tier works great)
   - Vercel KV
   - Database-backed rate limiting
3. **Domain verification**: Once you have a custom domain, verify it in Resend to send from your own domain instead of `onboarding@resend.dev`

## Upgrading Rate Limiting (Optional)

For production with multiple server instances, replace the in-memory rate limiting with Redis:

```bash
npm install @upstash/redis
```

Sign up for free Upstash Redis at [upstash.com](https://upstash.com)

## Troubleshooting

**Form doesn't submit:**
- Check browser console for errors
- Verify `.env.local` exists and has valid API key
- Restart dev server after adding environment variables

**Email not received:**
- Check Resend dashboard for delivery status
- Verify SimpleLogin alias is active
- Check Proton Mail spam folder
- Test with a different email address in the form

**Rate limiting too strict:**
- Edit `/app/api/contact/route.ts`
- Adjust `MAX_REQUESTS` or `WINDOW_MS` constants

## SimpleLogin Management

Your alias: `personalsite.identity920@slmails.com`

To manage this alias:
1. Log into [SimpleLogin](https://app.simplelogin.io)
2. View email statistics
3. Disable/enable the alias
4. Add custom replies

## Next Steps

- [ ] Get Resend API key
- [ ] Create `.env.local` file
- [ ] Test the contact form
- [ ] Consider custom domain for Resend (after deploying)
- [ ] Optional: Add Upstash Redis for production rate limiting
