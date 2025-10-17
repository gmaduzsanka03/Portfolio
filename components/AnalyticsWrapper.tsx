'use client'

import { useAnalytics } from './hooks/useAnalytics'

interface AnalyticsWrapperProps {
  children: React.ReactNode
}

export function AnalyticsWrapper({ children }: AnalyticsWrapperProps) {
  useAnalytics()
  
  return <>{children}</>
}
