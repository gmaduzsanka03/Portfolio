// Email configuration and service integration
// This file contains the email service setup for notifications

export interface EmailNotification {
  type: 'download' | 'visit'
  ip: string
  userAgent: string
  referer?: string
  timestamp: string
  date: string
}

export async function sendEmailNotification(data: EmailNotification) {
  // Email configuration
  const emailConfig = {
    to: 'gmaduzsanka03@gmail.com', // Your email
    subject: `Portfolio ${data.type === 'download' ? 'Resume Download' : 'Site Visit'} - ${data.date}`,
    html: generateEmailHTML(data)
  }
  
  // For production, integrate with one of these services:
  
  // Option 1: Nodemailer with Gmail SMTP
  /*
  const nodemailer = require('nodemailer')
  
  const transporter = nodemailer.createTransporter({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // your-email@gmail.com
      pass: process.env.EMAIL_PASS  // your-app-password
    }
  })
  
  return await transporter.sendMail(emailConfig)
  */
  
  // Option 2: SendGrid
  /*
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  
  return await sgMail.send(emailConfig)
  */
  
  // Option 3: AWS SES
  /*
  const AWS = require('aws-sdk')
  const ses = new AWS.SES({ region: 'us-east-1' })
  
  return await ses.sendEmail({
    Source: process.env.FROM_EMAIL,
    Destination: { ToAddresses: [emailConfig.to] },
    Message: {
      Subject: { Data: emailConfig.subject },
      Body: { Html: { Data: emailConfig.html } }
    }
  }).promise()
  */
  
  // Option 4: Resend (Modern email API)
  /*
  const { Resend } = require('resend')
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  return await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: emailConfig.to,
    subject: emailConfig.subject,
    html: emailConfig.html
  })
  */
  
  // For now, we'll log the email (replace with actual service)
  console.log('📧 Email Notification:', emailConfig)
  return Promise.resolve()
}

function generateEmailHTML(data: EmailNotification): string {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
        Portfolio Activity Notification
      </h2>
      
      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #007bff; margin-top: 0;">
          ${data.type === 'download' ? '📄 Resume Downloaded' : '👁️ Site Visited'}
        </h3>
        
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 30%;">Activity:</td>
            <td style="padding: 8px; border-bottom: 1px solid #dee2e6;">${data.type === 'download' ? 'Resume Download' : 'Site Visit'}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #dee2e6; font-weight: bold;">Date & Time:</td>
            <td style="padding: 8px; border-bottom: 1px solid #dee2e6;">${data.date}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #dee2e6; font-weight: bold;">IP Address:</td>
            <td style="padding: 8px; border-bottom: 1px solid #dee2e6;">${data.ip}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #dee2e6; font-weight: bold;">User Agent:</td>
            <td style="padding: 8px; border-bottom: 1px solid #dee2e6; word-break: break-all;">${data.userAgent}</td>
          </tr>
          ${data.referer ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #dee2e6; font-weight: bold;">Referer:</td>
            <td style="padding: 8px; border-bottom: 1px solid #dee2e6; word-break: break-all;">${data.referer}</td>
          </tr>
          ` : ''}
        </table>
      </div>
      
      <div style="background: #e3f2fd; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <p style="margin: 0; color: #1976d2;">
          <strong>Note:</strong> This is an automated notification from your portfolio website.
          ${data.type === 'download' ? 'Someone has downloaded your resume!' : 'Someone has visited your portfolio!'}
        </p>
      </div>
      
      <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
        <p>Portfolio Website Notification System</p>
        <p>W.G.M. Welikumbura - Mechanical & Process Engineer</p>
      </div>
    </div>
  `
}

// Environment variables needed for email services:
export const EMAIL_ENV_VARS = {
  // For Gmail SMTP (Nodemailer)
  EMAIL_USER: 'your-email@gmail.com',
  EMAIL_PASS: 'your-app-password',
  
  // For SendGrid
  SENDGRID_API_KEY: 'your-sendgrid-api-key',
  
  // For AWS SES
  AWS_ACCESS_KEY_ID: 'your-aws-access-key',
  AWS_SECRET_ACCESS_KEY: 'your-aws-secret-key',
  FROM_EMAIL: 'noreply@yourdomain.com',
  
  // For Resend
  RESEND_API_KEY: 'your-resend-api-key'
}
