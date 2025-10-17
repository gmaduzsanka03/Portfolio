'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github, Calendar, Users, Award, ChevronLeft, ChevronRight, Download, Maximize2 } from 'lucide-react'
import { useState } from 'react'
import { Project, DesignProject } from '../data/projects'

interface ProjectModalProps {
  project: Project | DesignProject | null
  isOpen: boolean
  onClose: () => void
  isDesignProject?: boolean
}

export function ProjectModal({ project, isOpen, onClose, isDesignProject = false }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) return null

  const images = project.gallery || []
  const currentImage = images[currentImageIndex] || project.image

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const isDesign = isDesignProject && 'specifications' in project

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-4 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h2>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
                      {project.category}
                    </span>
                    {isDesign && (
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                        {project.status}
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </button>
              </div>

              {/* Content */}
              <div className="flex flex-col lg:flex-row max-h-[calc(90vh-120px)]">
                {/* Image Gallery */}
                <div className="lg:w-1/2 p-6">
                  <div className="relative">
                    <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                      {currentImage ? (
                        <img
                          src={currentImage}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.src = '/api/placeholder/600/400'
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <Award className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-500 dark:text-gray-400">No image available</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Image Navigation */}
                    {images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        >
                          <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    {images.length > 1 && (
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/50 text-white text-sm rounded-full">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail Gallery */}
                  {images.length > 1 && (
                    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                      {images.map((image, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                            index === currentImageIndex
                              ? 'border-primary-600'
                              : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                        >
                          <img
                            src={image}
                            alt={`${project.title} ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Project Details */}
                <div className="lg:w-1/2 p-6 overflow-y-auto">
                  <div className="space-y-6">
                    {/* Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                        Project Description
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Project Stats */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Calendar className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                          <p className="font-medium text-gray-900 dark:text-white">{project.duration}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <Users className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Team</p>
                          <p className="font-medium text-gray-900 dark:text-white">{project.team}</p>
                        </div>
                      </div>
                    </div>

                    {/* Design Project Specific Details */}
                    {isDesign && (
                      <>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <Award className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                              <p className="font-medium text-gray-900 dark:text-white">{project.year}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <Maximize2 className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                            <div>
                              <p className="text-sm text-gray-500 dark:text-gray-400">Impact</p>
                              <p className="font-medium text-gray-900 dark:text-white">{project.impact}</p>
                            </div>
                          </div>
                        </div>

                        {/* Specifications */}
                        {project.specifications && project.specifications.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                              Specifications
                            </h3>
                            <ul className="space-y-2">
                              {project.specifications.map((spec, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-600 dark:text-gray-300">{spec}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Tools */}
                        {project.tools && project.tools.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                              Tools & Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.tools.map((tool, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm rounded-full"
                                >
                                  {tool}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* Regular Project Details */}
                    {!isDesign && (
                      <>
                        {/* Key Features */}
                        {project.features && project.features.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                              Key Features
                            </h3>
                            <ul className="space-y-2">
                              {project.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Technologies */}
                        {project.technologies && project.technologies.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                              Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, index) => (
                                <span
                                  key={index}
                                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Live
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          Code
                        </motion.a>
                      )}
                      {project.pdfUrl && (
                        <motion.a
                          href={project.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          <Download className="h-4 w-4" />
                          PDF
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
