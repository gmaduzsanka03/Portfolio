# Email Notification Setup Guide

This guide explains how to set up email notifications for your portfolio website to receive alerts when someone downloads your resume or visits your site.

## 📧 Email Service Options

### Option 1: Gmail SMTP (Recommended for beginners)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. **Add environment variables** to your `.env.local` file:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-16-character-app-password
   ```
4. **Update the email service** in `lib/email.ts`:
   ```typescript
   // Uncomment the Nodemailer section and comment out the console.log
   ```

### Option 2: SendGrid (Recommended for production)

1. **Sign up** for a free SendGrid account
2. **Get your API key** from SendGrid dashboard
3. **Add environment variable**:
   ```env
   SENDGRID_API_KEY=your-sendgrid-api-key
   ```
4. **Install SendGrid**:
   ```bash
   npm install @sendgrid/mail
   ```
5. **Update the email service** in `lib/email.ts`

### Option 3: AWS SES (For high volume)

1. **Set up AWS SES** in your AWS account
2. **Verify your email** in SES console
3. **Add environment variables**:
   ```env
   AWS_ACCESS_KEY_ID=your-access-key
   AWS_SECRET_ACCESS_KEY=your-secret-key
   FROM_EMAIL=noreply@yourdomain.com
   ```
4. **Install AWS SDK**:
   ```bash
   npm install aws-sdk
   ```

### Option 4: Resend (Modern & Simple)

1. **Sign up** for Resend account
2. **Get your API key**
3. **Add environment variable**:
   ```env
   RESEND_API_KEY=your-resend-api-key
   ```
4. **Install Resend**:
   ```bash
   npm install resend
   ```

## 🔧 Implementation Steps

### Step 1: Choose Your Email Service
Select one of the options above based on your needs:
- **Gmail SMTP**: Easiest to set up, good for personal use
- **SendGrid**: Professional, reliable, good free tier
- **AWS SES**: Scalable, cost-effective for high volume
- **Resend**: Modern, developer-friendly

### Step 2: Install Required Packages
```bash
# For Gmail SMTP
npm install nodemailer

# For SendGrid
npm install @sendgrid/mail

# For AWS SES
npm install aws-sdk

# For Resend
npm install resend
```

### Step 3: Configure Environment Variables
Create a `.env.local` file in your project root:
```env
# Choose the variables for your selected service
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
SENDGRID_API_KEY=your-sendgrid-api-key
RESEND_API_KEY=your-resend-api-key
```

### Step 4: Update Email Service
In `lib/email.ts`, uncomment the section for your chosen service and comment out the `console.log` line.

### Step 5: Test the Setup
1. Start your development server: `npm run dev`
2. Visit your portfolio: `http://localhost:3002`
3. Download your resume using the download button
4. Check your email for notifications

## 📱 Features Included

### ✅ Resume Download Tracking
- Tracks when someone downloads your resume
- Sends email notification with download details
- Includes IP address, user agent, and timestamp

### ✅ Site Visit Tracking
- Tracks when someone visits your portfolio
- Sends email notification with visit details
- Includes referrer information if available

### ✅ Download Buttons
- **About Section**: Large primary download button
- **Contact Section**: Outline download button with description
- **Floating Button**: Always-visible download button on all pages

### ✅ Email Notifications Include
- Activity type (download/visit)
- Date and time
- IP address
- User agent (browser/device info)
- Referrer (if available)
- Professional HTML formatting

## 🎯 Current Status

- ✅ PDF resume copied to `/public/resume.pdf`
- ✅ Download buttons added to About and Contact sections
- ✅ Floating download button added to all pages
- ✅ Analytics tracking implemented
- ✅ Email notification system ready
- ⚠️ **Email service needs to be configured** (choose one option above)

## 🚀 Next Steps

1. **Choose an email service** from the options above
2. **Set up the service** following the instructions
3. **Test the notifications** by visiting and downloading
4. **Deploy to production** when ready

## 📞 Support

If you need help setting up email notifications, refer to the documentation for your chosen email service or contact the service provider's support team.

---

**Note**: The email notification system is currently set to console logging. Follow the steps above to enable actual email sending.
