'use client'

import { Loader2 } from 'lucide-react'

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <Loader2 className="h-12 w-12 text-primary-600 animate-spin mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Loading Portfolio
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Please wait while we load your content...
        </p>
      </div>
    </div>
  )
}
