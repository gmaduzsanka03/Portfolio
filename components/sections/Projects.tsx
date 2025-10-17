'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Calendar, Users, Award, ChevronRight, ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { featuredProjects, Project } from '../../data/projects'
import { ProjectModal } from '../ProjectModal'

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [showAllProjects, setShowAllProjects] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleViewDetails = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing innovative engineering solutions that demonstrate expertise in mechanical design, 
            process optimization, industrial automation, and maintenance systems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {(showAllProjects ? featuredProjects : featuredProjects.slice(0, 5)).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 relative group"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/api/placeholder/600/400'
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Award className="h-8 w-8 text-white" />
                      </div>
                      <p className="text-sm text-primary-700 dark:text-primary-300 font-medium">
                        {project.category}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <Calendar className="h-4 w-4 text-primary-600 dark:text-primary-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">Duration</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{project.duration}</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-4 w-4 text-primary-600 dark:text-primary-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">Team</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{project.team}</p>
                  </div>
                  <div className="text-center">
                    <Award className="h-4 w-4 text-primary-600 dark:text-primary-400 mx-auto mb-1" />
                    <p className="text-xs text-gray-500 dark:text-gray-400">Impact</p>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{project.impact}</p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => handleViewDetails(project)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View Details
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* Expand/Collapse Button */}
        {featuredProjects.length > 5 && (
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

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://www.linkedin.com/in/g-madusanka/details/projects/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-all duration-200"
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        isDesignProject={false}
      />
    </section>
  )
}
