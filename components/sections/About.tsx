'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Award, Target, Users, Lightbulb } from 'lucide-react'
import { DownloadResumeButton } from '../DownloadResumeButton'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: 'Precision',
      description: 'Delivering accurate and reliable engineering solutions with meticulous attention to detail.'
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and creative problem-solving approaches.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'Working effectively with cross-functional teams to achieve project objectives.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Committed to maintaining the highest standards in all engineering endeavors.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Passionate Mechanical & Process Engineer
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                With extensive experience in mechanical design, process engineering, and industrial automation, 
                I bring a comprehensive understanding of complex engineering challenges. My expertise spans 
                from conceptual design to implementation and maintenance of mechanical systems.
              </p>
              
              <p>
                I specialize in creating innovative solutions that optimize processes, improve efficiency, 
                and ensure reliability. My work focuses on delivering high-quality engineering solutions 
                that meet both technical requirements and business objectives.
              </p>
              
              <p>
                Throughout my career, I have successfully managed projects involving product design, 
                modeling, industrial automation, and maintenance. I am passionate about leveraging 
                technology to solve real-world problems and drive continuous improvement.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="mt-8 text-center">
              <DownloadResumeButton variant="primary" size="lg" />
            </div>
          </motion.div>

          {/* Right Column - Profile Image and Values Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center"
            >
              <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-2xl ring-4 ring-white dark:ring-gray-800">
                <img
                  src="/images/profile-image.jpg"
                  alt="W.G.M. Welikumbura - Professional Portrait"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to initials if image fails to load
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div 
                  className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-3xl font-bold"
                  style={{ display: 'none' }}
                >
                  WGM
                </div>
              </div>
            </motion.div>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="text-primary-600 dark:text-primary-400 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to discuss your next engineering project?
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
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
