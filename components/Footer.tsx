'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, ArrowUp } from 'lucide-react'

export function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Designs', href: '#designs' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/g-madusanka/',
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: 'GitHub',
      url: 'https://github.com/g-madusanka',
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: 'Twitter',
      url: 'https://x.com/maduzsanka',
    }
  ]

  const contactInfo = [
    {
      icon: <Mail className="h-4 w-4" />,
      text: 'gmaduzsanka03@gmail.com',
      link: 'mailto:gmaduzsanka03@gmail.com'
    },
    {
      icon: <Phone className="h-4 w-4" />,
      text: '+94 71 168 6420',
      link: 'tel:+94711686420'
    },
    {
      icon: <MapPin className="h-4 w-4" />,
      text: 'Kegalle, Sri Lanka',
      link: '#'
    }
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  W.G.M. Welikumbura
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Mechanical & Process Engineer specializing in innovative solutions, 
                  industrial automation, and process optimization.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.3 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition-colors duration-200"
                      title={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                        onClick={(e) => {
                          e.preventDefault()
                          const element = document.querySelector(link.href)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' })
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>Mechanical Design</li>
                  <li>Process Engineering</li>
                  <li>Industrial Automation</li>
                  <li>Maintenance Systems</li>
                  <li>Project Management</li>
                  <li>Technical Consulting</li>
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                <ul className="space-y-3">
                  {contactInfo.map((info, index) => (
                    <motion.li
                      key={info.text}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      className="flex items-center"
                    >
                      <div className="text-primary-400 mr-3">
                        {info.icon}
                      </div>
                      <a
                        href={info.link}
                        className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                      >
                        {info.text}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="border-t border-gray-800 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © {currentYear} W.G.M. Welikumbura. All rights reserved.
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-primary-400 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 z-50"
        title="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </footer>
  )
}
