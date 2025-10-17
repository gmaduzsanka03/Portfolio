import { NextRequest, NextResponse } from 'next/server'
import { sendEmailNotification } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { type, userAgent, referer, timestamp } = await request.json()
    
    // Get client IP address
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'
    
    // Prepare notification data
    const notificationData = {
      type, // 'download' or 'visit'
      ip,
      userAgent,
      referer,
      timestamp: timestamp || new Date().toISOString(),
      date: new Date().toLocaleString()
    }
    
    // Send email notification
    await sendEmailNotification(notificationData)
    
    // Log the activity (optional - for analytics)
    console.log('Portfolio Activity:', notificationData)
    
    return NextResponse.json({ 
      success: true, 
      message: 'Activity tracked successfully' 
    })
    
  } catch (error) {
    console.error('Error tracking activity:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Failed to track activity' 
    }, { status: 500 })
  }
}

