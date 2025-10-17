'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen, Users, Calendar, MapPin, Download, ExternalLink, ChevronRight, ChevronDown } from 'lucide-react'
import { certifications } from '../../data/certifications'
import { useAdmin } from '../AdminContext'
import { useState } from 'react'

export function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { isAdmin } = useAdmin()
  const [showAllCertifications, setShowAllCertifications] = useState(false)

  const education = [
    {
      degree: 'Bachelor of Science (Honors) in Mechanical and Process Engineering',
      institution: 'University of Jaffna',
      location: 'Jaffna, Sri Lanka',
      duration: 'Apr 2021 - Nov 2025',
      grade: 'In Progress',
      description: 'Full-time Mechanical and Process Engineering student at the University of Jaffna, pursuing a comprehensive degree program. Passionate about applying engineering principles to solve real-world challenges. Eager to leverage academic knowledge and skills in a professional setting.',
      relevantCourses: [
        'Mechanical Design & Modeling',
        'Process Engineering',
        'Industrial Automation',
        'Control Systems',
        'Materials Science',
        'Thermodynamics & Fluid Mechanics',
        'Manufacturing Processes',
        'Project Management'
      ],
      achievements: [
        'Active in research projects and practical applications',
        'Seeking opportunities for growth and collaboration',
        'Applying engineering principles to real-world challenges',
        'Comprehensive understanding of mechanical and process engineering'
      ],
      type: 'Degree'
    }
  ]



  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Strong academic foundation in mechanical engineering complemented by specialized certifications 
            and continuous professional development in emerging technologies.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Academic Qualifications
          </h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      <GraduationCap className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
                        <BookOpen className="h-4 w-4 mr-1" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.duration}
                      </div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-sm font-medium rounded-full">
                    {edu.grade}
                  </span>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {edu.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Relevant Courses */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Relevant Courses:</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {edu.relevantCourses.map((course, courseIndex) => (
                        <li key={courseIndex} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></div>
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h5>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-center">
                          <Award className="h-3 w-3 text-primary-600 mr-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {(showAllCertifications ? certifications : certifications.slice(0, 4)).map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full">
                    {cert.date}
                  </span>
                </div>
                <p className="text-primary-600 dark:text-primary-400 font-medium text-sm mb-2">
                  {cert.issuer}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Credential ID: {cert.credentialId}
                  </p>
                  <div className="flex gap-2">
                    {cert.pdfUrl && (
                      <motion.a
                        href={cert.pdfUrl}
                        download
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1 text-primary-600 hover:text-primary-700 transition-colors"
                        title="Download PDF"
                      >
                        <Download className="h-4 w-4" />
                      </motion.a>
                    )}
                    {cert.credentialUrl && (
                      <motion.a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-1 text-primary-600 hover:text-primary-700 transition-colors"
                        title="View Credential"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Show More/Less Button */}
          {certifications.length > 4 && (
            <div className="text-center mt-8">
              <motion.button
                onClick={() => setShowAllCertifications(!showAllCertifications)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                {showAllCertifications ? (
                  <>
                    <ChevronDown className="h-5 w-5 mr-2" />
                    Show Less Certifications
                  </>
                ) : (
                  <>
                    <ChevronRight className="h-5 w-5 mr-2" />
                    Show More Certifications ({certifications.length - 4} more)
                  </>
                )}
              </motion.button>
            </div>
          )}
        </div>


        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Committed to continuous learning and staying current with industry advancements.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Discuss Opportunities
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
