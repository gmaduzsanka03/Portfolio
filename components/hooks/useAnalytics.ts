'use client'

import { useEffect } from 'react'

export function useAnalytics() {
  useEffect(() => {
    // Track site visit
    trackActivity('visit')
  }, [])

  const trackActivity = async (type: 'download' | 'visit') => {
    try {
      await fetch('/api/track-download', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          userAgent: navigator.userAgent,
          referer: document.referrer,
          timestamp: new Date().toISOString()
        })
      })
    } catch (error) {
      console.error('Error tracking activity:', error)
    }
  }

  const trackDownload = () => {
    trackActivity('download')
  }

  return { trackDownload }
}
