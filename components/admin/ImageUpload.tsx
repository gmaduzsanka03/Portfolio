'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Upload, X, Image as ImageIcon, Check, AlertCircle, FolderOpen } from 'lucide-react'
import { ImageGallery } from './ImageGallery'

interface ImageUploadProps {
  onUpload: (url: string) => void
  onRemove?: () => void
  currentImage?: string
  type: 'projects' | 'designs'
  label?: string
  className?: string
}

export function ImageUpload({ 
  onUpload, 
  onRemove, 
  currentImage, 
  type, 
  label = 'Upload Image',
  className = ''
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [showGallery, setShowGallery] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/gif']
    if (!allowedTypes.includes(file.type)) {
      setUploadError('Invalid file type. Only JPEG, PNG, WebP, and GIF files are allowed.')
      return
    }

    // Validate file size (max 10MB)
    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      setUploadError('File too large. Maximum size is 10MB.')
      return
    }

    setIsUploading(true)
    setUploadError(null)
    setUploadSuccess(false)

    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', type)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        onUpload(result.url)
        setUploadSuccess(true)
        setTimeout(() => setUploadSuccess(false), 2000)
      } else {
        setUploadError(result.error || 'Upload failed')
      }
    } catch (error) {
      setUploadError('Network error. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault()
    const file = event.dataTransfer.files[0]
    if (file) {
      // Create a proper file input event
      const input = document.createElement('input')
      input.type = 'file'
      input.files = event.dataTransfer.files
      const fakeEvent = {
        target: input
      } as React.ChangeEvent<HTMLInputElement>
      handleFileSelect(fakeEvent)
    }
  }

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault()
  }

  const handleRemove = () => {
    if (onRemove) {
      onRemove()
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>

      {/* Current Image Display */}
      {currentImage && (
        <div className="relative group">
          <img
            src={currentImage}
            alt="Current"
            className="w-full h-32 object-cover rounded-lg border border-gray-200 dark:border-gray-600"
            onError={(e) => {
              e.currentTarget.src = '/api/placeholder/300/200'
            }}
          />
          {onRemove && (
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              title="Remove image"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      )}

      {/* Upload Area */}
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className={`
          relative border-2 border-dashed rounded-lg p-6 text-center transition-colors
          ${isUploading 
            ? 'border-primary-400 bg-primary-50 dark:bg-primary-900/20' 
            : 'border-gray-300 dark:border-gray-600 hover:border-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700'
          }
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          disabled={isUploading}
        />

        <div className="space-y-2">
          {isUploading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center"
            >
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">
                Uploading...
              </span>
            </motion.div>
          ) : uploadSuccess ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center justify-center text-green-600"
            >
              <Check className="h-8 w-8" />
              <span className="ml-2 text-sm">Upload successful!</span>
            </motion.div>
          ) : (
            <>
              <Upload className="h-8 w-8 mx-auto text-gray-400" />
              <div className="text-sm text-gray-600 dark:text-gray-300">
                <span className="font-medium text-primary-600 hover:text-primary-500">
                  Click to upload
                </span>
                {' '}or drag and drop
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                PNG, JPG, WebP, GIF up to 10MB
              </div>
            </>
          )}
        </div>
      </div>

      {/* Error Message */}
      {uploadError && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-700 dark:text-red-300 text-sm"
        >
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span>{uploadError}</span>
          <button
            type="button"
            onClick={() => setUploadError(null)}
            className="ml-auto text-red-500 hover:text-red-700"
          >
            <X className="h-4 w-4" />
          </button>
        </motion.div>
      )}

      {/* Image Gallery Browser */}
      <div className="mt-4 flex gap-2">
        <button
          type="button"
          onClick={() => setShowGallery(true)}
          className="flex items-center gap-2 px-3 py-2 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
        >
          <FolderOpen className="h-4 w-4" />
          Browse Gallery
        </button>
      </div>

      {/* Image Gallery Modal */}
      <ImageGallery
        isOpen={showGallery}
        onClose={() => setShowGallery(false)}
        onSelect={onUpload}
        type={type}
        currentImage={currentImage}
      />
    </div>
  )
}
