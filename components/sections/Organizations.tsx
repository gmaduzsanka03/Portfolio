'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Building2, Calendar, MapPin, ExternalLink, Users, Award } from 'lucide-react'
import { organizations } from '../../data/organizations'
import { useAdmin } from '../AdminContext'

export function Organizations() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { isAdmin } = useAdmin()

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Professional':
        return <Building2 className="h-5 w-5" />
      case 'Academic':
        return <Award className="h-5 w-5" />
      case 'Volunteer':
        return <Users className="h-5 w-5" />
      default:
        return <Building2 className="h-5 w-5" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Professional':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
      case 'Academic':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
      case 'Volunteer':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
    }
  }

  if (organizations.length === 0) {
    return null
  }

  return (
    <section id="organizations" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Organizations & Affiliations
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Professional organizations, academic institutions, and affiliations that have shaped my career journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizations.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              {/* Organization Header */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900 rounded-lg">
                      {getTypeIcon(org.type)}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {org.name}
                      </h3>
                      <p className="text-primary-600 dark:text-primary-400 font-medium">
                        {org.role}
                      </p>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(org.type)}`}>
                    {org.type}
                  </span>
                </div>

                {/* Description */}
                {org.description && (
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {org.description}
                  </p>
                )}

                {/* Duration */}
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    {org.startDate} - {org.current ? 'Present' : org.endDate}
                  </span>
                  {org.current && (
                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 text-xs rounded-full">
                      Current
                    </span>
                  )}
                </div>

                {/* Website Link */}
                {org.website && (
                  <motion.a
                    href={org.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="h-4 w-4 mr-1" />
                    Visit Website
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Admin Add Button */}
        {isAdmin && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-200"
            >
              Add Organization
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
