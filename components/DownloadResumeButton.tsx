'use client'

import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { useAnalytics } from './hooks/useAnalytics'

interface DownloadResumeButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showIcon?: boolean
  children?: React.ReactNode
}

export function DownloadResumeButton({ 
  variant = 'primary', 
  size = 'md', 
  className = '',
  showIcon = true,
  children
}: DownloadResumeButtonProps) {
  const { trackDownload } = useAnalytics()

  const handleDownload = () => {
    // Track the download
    trackDownload()
    
    // Create download link
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'W.G.M. Welikumbura - Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary-600 hover:bg-primary-700 text-white'
      case 'secondary':
        return 'bg-gray-600 hover:bg-gray-700 text-white'
      case 'outline':
        return 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white'
      default:
        return 'bg-primary-600 hover:bg-primary-700 text-white'
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-4 py-2 text-sm'
      case 'md':
        return 'px-6 py-3 text-base'
      case 'lg':
        return 'px-8 py-4 text-lg'
      default:
        return 'px-6 py-3 text-base'
    }
  }

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200
        ${getVariantStyles()}
        ${getSizeStyles()}
        ${className}
      `}
      title="Download Resume (PDF)"
    >
      {showIcon && <Download className="h-5 w-5" />}
      {children || 'Download Resume'}
    </motion.button>
  )
}

// Floating Download Button for easy access
export function FloatingDownloadButton() {
  const { trackDownload } = useAnalytics()

  const handleDownload = () => {
    trackDownload()
    
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'W.G.M. Welikumbura - Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.button
      onClick={handleDownload}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transition-all duration-200 group"
      title="Download Resume"
    >
      <FileText className="h-6 w-6" />
      <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Download Resume
      </span>
    </motion.button>
  )
}
