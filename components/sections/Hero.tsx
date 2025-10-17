'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Download, Mail } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

export function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Profile Image Placeholder */}
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
              WGM
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">W.G.M. Welikumbura</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
          >
            Mechanical & Process Engineer
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Specializing in mechanical design, process engineering, industrial automation, 
            and maintenance with a passion for innovative solutions and continuous improvement.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold transition-colors duration-200 flex items-center gap-2 shadow-lg hover:shadow-xl"
            >
              <Download className="h-5 w-5" />
              Download Resume
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white rounded-lg font-semibold transition-all duration-200 flex items-center gap-2"
            >
              <Mail className="h-5 w-5" />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToAbout}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronDown className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 left-10 w-20 h-20 bg-primary-200 dark:bg-primary-800 rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 dark:bg-indigo-800 rounded-full opacity-20"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-40 left-20 w-12 h-12 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
      />
    </section>
  )
}
