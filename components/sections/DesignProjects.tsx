'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Eye, Download, Maximize2, Settings, Wrench, Cpu, ChevronRight, ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { designProjects, DesignProject } from '../../data/projects'
import { ProjectModal } from '../ProjectModal'

export function DesignProjects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('All')
  const [showAllProjects, setShowAllProjects] = useState(false)
  const [selectedProject, setSelectedProject] = useState<DesignProject | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const categories = ['All', 'Mechatronics', 'Industrial Systems', 'Heavy Machinery', 'Renewable Energy', 'Agricultural Machinery', 'Product Design', 'Mechanical Systems', 'Environmental Engineering', 'Technical Documentation', 'Automotive Design']

  // Use the centralized designProjects data from data/projects.ts

  const filteredProjects = selectedCategory === 'All' 
    ? designProjects 
    : designProjects.filter(project => project.category === selectedCategory)

  const displayedProjects = showAllProjects ? filteredProjects : filteredProjects.slice(0, 5)

  // Reset showAllProjects when category changes
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    setShowAllProjects(false)
  }

  const handleViewDetails = (project: DesignProject) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Mechatronics':
        return <Cpu className="h-5 w-5" />
      case 'Industrial Systems':
        return <Settings className="h-5 w-5" />
      case 'Heavy Machinery':
        return <Wrench className="h-5 w-5" />
      case 'Renewable Energy':
        return <Settings className="h-5 w-5" />
      case 'Agricultural Machinery':
        return <Wrench className="h-5 w-5" />
      case 'Product Design':
        return <Settings className="h-5 w-5" />
      case 'Mechanical Systems':
        return <Settings className="h-5 w-5" />
      case 'Environmental Engineering':
        return <Settings className="h-5 w-5" />
      case 'Technical Documentation':
        return <Settings className="h-5 w-5" />
      case 'Automotive Design':
        return <Settings className="h-5 w-5" />
      default:
        return <Settings className="h-5 w-5" />
    }
  }

  return (
    <section id="designs" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Design Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of mechanical designs, automation components, and process equipment 
            showcasing innovative engineering solutions and technical expertise.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => handleCategoryChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Design Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group relative"
            >

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/api/placeholder/400/300'
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                        {getCategoryIcon(project.category)}
                      </div>
                      <p className="text-sm text-primary-700 dark:text-primary-300 font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      <Eye className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-100 transition-colors"
                    >
                      <Maximize2 className="h-5 w-5" />
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                      : project.status === 'In Production'
                      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Year */}
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  Year: {project.year}
                </div>

                {/* Key Specifications */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Specifications:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.specifications.slice(0, 2).map((spec, specIndex) => (
                      <li key={specIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools Used */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Tools Used:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    onClick={() => handleViewDetails(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Eye className="h-4 w-4" />
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Files
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Expand/Collapse Button */}
        {filteredProjects.length > 5 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-8"
          >
            <motion.button
              onClick={() => setShowAllProjects(!showAllProjects)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-200 mx-auto"
            >
              {showAllProjects ? (
                <>
                  <ChevronLeft className="h-5 w-5" />
                  Show Less
                </>
              ) : (
                <>
                  Show More Projects
                  <ChevronRight className="h-5 w-5" />
                </>
              )}
            </motion.button>
          </motion.div>
        )}

        {/* View All Designs Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.flickr.com/photos/196574379@N06/albums"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-all duration-200"
          >
            Design Gallery
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isDesignProject={true}
      />
    </section>
  )
}
