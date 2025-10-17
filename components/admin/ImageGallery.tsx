'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Search, Image as ImageIcon, Check } from 'lucide-react'

interface ImageGalleryProps {
  isOpen: boolean
  onClose: () => void
  onSelect: (url: string) => void
  type: 'projects' | 'designs'
  currentImage?: string
}

interface UploadedFile {
  filename: string
  url: string
  type: string
}

export function ImageGallery({ isOpen, onClose, onSelect, type, currentImage }: ImageGalleryProps) {
  const [images, setImages] = useState<UploadedFile[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    if (isOpen) {
      fetchImages()
    }
  }, [isOpen, type])

  const fetchImages = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch(`/api/upload?type=${type}`)
      const result = await response.json()
      
      if (result.success) {
        setImages(result.files)
      } else {
        setError(result.error || 'Failed to load images')
      }
    } catch (error) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const filteredImages = images.filter(image =>
    image.filename.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSelect = (url: string) => {
    onSelect(url)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Select Image - {type.charAt(0).toUpperCase() + type.slice(1)}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Search */}
            <div className="mt-4 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[60vh]">
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                <span className="ml-2 text-gray-600 dark:text-gray-300">Loading images...</span>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="text-red-600 dark:text-red-400 mb-2">{error}</div>
                <button
                  onClick={fetchImages}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : filteredImages.length === 0 ? (
              <div className="text-center py-12">
                <ImageIcon className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <div className="text-gray-600 dark:text-gray-300">
                  {searchTerm ? 'No images found matching your search.' : 'No images uploaded yet.'}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.filename}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className={`
                      relative group cursor-pointer rounded-lg overflow-hidden border-2 transition-all
                      ${currentImage === image.url 
                        ? 'border-primary-500 ring-2 ring-primary-200' 
                        : 'border-gray-200 dark:border-gray-600 hover:border-primary-400'
                      }
                    `}
                    onClick={() => handleSelect(image.url)}
                  >
                    <img
                      src={image.url}
                      alt={image.filename}
                      className="w-full h-24 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = '/api/placeholder/150/100'
                      }}
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                      {currentImage === image.url ? (
                        <div className="bg-primary-600 text-white p-1 rounded-full">
                          <Check className="h-4 w-4" />
                        </div>
                      ) : (
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-2 py-1 rounded text-xs">
                            Select
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Filename */}
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white text-xs p-1 truncate">
                      {image.filename}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {filteredImages.length} image{filteredImages.length !== 1 ? 's' : ''} found
              </div>
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
