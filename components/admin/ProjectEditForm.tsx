'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Save, Trash2, Plus, Upload, Image as ImageIcon } from 'lucide-react'
import { Project, DesignProject } from '../../data/projects'
import { ImageUpload } from './ImageUpload'

interface ProjectEditFormProps {
  project?: Project | DesignProject
  isDesignProject?: boolean
  onSave: (project: Project | DesignProject) => void
  onDelete?: (id: string) => void
  onClose: () => void
}

export function ProjectEditForm({ 
  project, 
  isDesignProject = false, 
  onSave, 
  onDelete, 
  onClose 
}: ProjectEditFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    category: '',
    technologies: [] as string[],
    tools: [] as string[],
    duration: '',
    year: '',
    team: '',
    impact: '',
    status: '',
    specifications: [] as string[],
    features: [] as string[],
    gallery: [] as string[],
    pdfUrl: '',
    liveUrl: '',
    githubUrl: '',
    featured: true,
    order: 1
  })

  const [newTech, setNewTech] = useState('')
  const [newTool, setNewTool] = useState('')
  const [newSpec, setNewSpec] = useState('')
  const [newFeature, setNewFeature] = useState('')
  const [newGalleryItem, setNewGalleryItem] = useState('')

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        description: project.description || '',
        image: project.image || '',
        category: project.category || '',
        technologies: 'technologies' in project ? project.technologies : [],
        tools: 'tools' in project ? project.tools : [],
        duration: 'duration' in project ? project.duration : '',
        year: 'year' in project ? project.year : '',
        team: 'team' in project ? project.team : '',
        impact: 'impact' in project ? project.impact : '',
        status: 'status' in project ? project.status : '',
        specifications: 'specifications' in project ? project.specifications : [],
        features: 'features' in project ? project.features : [],
        gallery: project.gallery || [],
        pdfUrl: (project as any).pdfUrl || '',
        liveUrl: (project as any).liveUrl || '',
        githubUrl: (project as any).githubUrl || '',
        featured: (project as any).featured,
        order: (project as any).order
      })
    }
  }, [project])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    const projectData = isDesignProject 
      ? {
          ...formData,
          id: project?.id || '',
          title: formData.title,
          description: formData.description,
          image: formData.image,
          category: formData.category,
          year: formData.year,
          status: formData.status,
          specifications: formData.specifications,
          tools: formData.tools,
          gallery: formData.gallery,
          pdfUrl: formData.pdfUrl,
          featured: formData.featured,
          order: formData.order
        } as DesignProject
      : {
          ...formData,
          id: project?.id || '',
          title: formData.title,
          description: formData.description,
          image: formData.image,
          technologies: formData.technologies,
          duration: formData.duration,
          team: formData.team,
          impact: formData.impact,
          category: formData.category,
          features: formData.features,
          gallery: formData.gallery,
          pdfUrl: formData.pdfUrl,
          liveUrl: formData.liveUrl,
          githubUrl: formData.githubUrl,
          featured: formData.featured,
          order: formData.order
        } as Project

    onSave(projectData)
  }

  const addArrayItem = (field: string, value: string) => {
    if (!value.trim()) return
    
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field as keyof typeof prev] as string[], value.trim()]
    }))
    
    // Clear the input
    if (field === 'technologies') setNewTech('')
    if (field === 'tools') setNewTool('')
    if (field === 'specifications') setNewSpec('')
    if (field === 'features') setNewFeature('')
    if (field === 'gallery') setNewGalleryItem('')
  }

  const removeArrayItem = (field: string, index: number) => {
    setFormData(prev => ({
      ...prev,
      [field]: (prev[field as keyof typeof prev] as string[]).filter((_, i) => i !== index)
    }))
  }

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
          className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {project ? 'Edit' : 'Add'} {isDesignProject ? 'Design' : 'Featured'} Project
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Basic Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Title *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Category *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.category}
                    onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Description *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* Project-specific fields */}
              {!isDesignProject ? (
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Duration
                    </label>
                    <input
                      type="text"
                      value={formData.duration}
                      onChange={(e) => setFormData(prev => ({ ...prev, duration: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Team
                    </label>
                    <input
                      type="text"
                      value={formData.team}
                      onChange={(e) => setFormData(prev => ({ ...prev, team: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Impact
                    </label>
                    <input
                      type="text"
                      value={formData.impact}
                      onChange={(e) => setFormData(prev => ({ ...prev, impact: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Year
                    </label>
                    <input
                      type="text"
                      value={formData.year}
                      onChange={(e) => setFormData(prev => ({ ...prev, year: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Status
                    </label>
                    <select
                      value={formData.status}
                      onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value }))}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    >
                      <option value="Completed">Completed</option>
                      <option value="In Development">In Development</option>
                      <option value="Planning">Planning</option>
                      <option value="On Hold">On Hold</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Technologies/Tools */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {isDesignProject ? 'Tools' : 'Technologies'}
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={isDesignProject ? newTool : newTech}
                    onChange={(e) => isDesignProject ? setNewTool(e.target.value) : setNewTech(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        addArrayItem(isDesignProject ? 'tools' : 'technologies', isDesignProject ? newTool : newTech)
                      }
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder={`Add ${isDesignProject ? 'tool' : 'technology'}`}
                  />
                  <button
                    type="button"
                    onClick={() => addArrayItem(isDesignProject ? 'tools' : 'technologies', isDesignProject ? newTool : newTech)}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {(isDesignProject ? formData.tools : formData.technologies).map((item, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm"
                    >
                      {item}
                      <button
                        type="button"
                        onClick={() => removeArrayItem(isDesignProject ? 'tools' : 'technologies', index)}
                        className="hover:text-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Features/Specifications */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  {isDesignProject ? 'Specifications' : 'Features'}
                </label>
                <div className="flex gap-2 mb-2">
                  <input
                    type="text"
                    value={isDesignProject ? newSpec : newFeature}
                    onChange={(e) => isDesignProject ? setNewSpec(e.target.value) : setNewFeature(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault()
                        addArrayItem(isDesignProject ? 'specifications' : 'features', isDesignProject ? newSpec : newFeature)
                      }
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    placeholder={`Add ${isDesignProject ? 'specification' : 'feature'}`}
                  />
                  <button
                    type="button"
                    onClick={() => addArrayItem(isDesignProject ? 'specifications' : 'features', isDesignProject ? newSpec : newFeature)}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-1">
                  {(isDesignProject ? formData.specifications : formData.features).map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg"
                    >
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                      <button
                        type="button"
                        onClick={() => removeArrayItem(isDesignProject ? 'specifications' : 'features', index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Upload */}
              <ImageUpload
                onUpload={(url) => setFormData(prev => ({ ...prev, image: url }))}
                onRemove={() => setFormData(prev => ({ ...prev, image: '' }))}
                currentImage={formData.image}
                type={isDesignProject ? 'designs' : 'projects'}
                label="Main Project Image"
              />

              {/* Gallery */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Gallery Images
                </label>
                
                {/* Add Gallery Image */}
                <div className="mb-4">
                  <ImageUpload
                    onUpload={(url) => addArrayItem('gallery', url)}
                    type={isDesignProject ? 'designs' : 'projects'}
                    label="Add Gallery Image"
                    className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4"
                  />
                </div>

                {/* Gallery Preview */}
                {formData.gallery.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {formData.gallery.map((item, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={item}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-20 object-cover rounded-lg"
                          onError={(e) => {
                            e.currentTarget.src = '/api/placeholder/150/100'
                          }}
                        />
                        <button
                          type="button"
                          onClick={() => removeArrayItem('gallery', index)}
                          className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* URLs */}
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    PDF URL
                  </label>
                  <input
                    type="url"
                    value={formData.pdfUrl}
                    onChange={(e) => setFormData(prev => ({ ...prev, pdfUrl: e.target.value }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                {!isDesignProject && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Live URL
                      </label>
                      <input
                        type="url"
                        value={formData.liveUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, liveUrl: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        GitHub URL
                      </label>
                      <input
                        type="url"
                        value={formData.githubUrl}
                        onChange={(e) => setFormData(prev => ({ ...prev, githubUrl: e.target.value }))}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Order and Featured */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Display Order
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={formData.order}
                    onChange={(e) => setFormData(prev => ({ ...prev, order: parseInt(e.target.value) || 1 }))}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData(prev => ({ ...prev, featured: e.target.checked }))}
                    className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="featured" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                    Featured Project
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                <div>
                  {project && onDelete && (
                    <button
                      type="button"
                      onClick={() => onDelete(project.id)}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </button>
                  )}
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
                  >
                    <Save className="h-4 w-4" />
                    Save Project
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
