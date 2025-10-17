'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter, MessageCircle, Camera } from 'lucide-react'
import { useState } from 'react'
import { DownloadResumeButton } from '../DownloadResumeButton'

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'gmaduzsanka03@gmail.com',
      link: 'mailto:gmaduzsanka03@gmail.com'
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      value: '+94 71 168 6420',
      link: 'tel:+94711686420'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Kegalle, Sri Lanka',
      link: '#'
    }
  ]

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/g-madusanka/',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Camera className="h-5 w-5" />,
      name: 'Flickr',
      url: 'https://www.flickr.com/photos/196574379@N06/albums/',
      color: 'hover:text-pink-600'
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: 'GitHub',
      url: 'https://github.com/g-madusanka',
      color: 'hover:text-gray-600'
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: 'Twitter',
      url: 'https://x.com/maduzsanka',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to discuss your next engineering project? I'm always interested in new opportunities 
            and collaborations. Let's connect and explore how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Let's Start a Conversation
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Whether you have a project in mind, need consultation on mechanical design, 
              or want to discuss opportunities, I'd love to hear from you. I'm always 
              excited to work on challenging engineering problems and innovative solutions.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 group"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
                    <div className="text-primary-600 dark:text-primary-400">
                      {info.icon}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with me
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-gray-600 dark:text-gray-300 transition-colors duration-200 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Download Resume */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Download Resume
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Get a copy of my detailed resume with complete work experience and qualifications.
              </p>
              <DownloadResumeButton variant="outline" size="md" />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send me a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-colors resize-none"
                  placeholder="Tell me about your project or how I can help..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-100 dark:bg-green-900 border border-green-300 dark:border-green-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
                    <p className="text-green-800 dark:text-green-200 font-medium">
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-100 dark:bg-red-900 border border-red-300 dark:border-red-700 rounded-lg"
                >
                  <div className="flex items-center">
                    <MessageCircle className="h-5 w-5 text-red-600 dark:text-red-400 mr-2" />
                    <p className="text-red-800 dark:text-red-200 font-medium">
                      Sorry, there was an error sending your message. Please try again.
                    </p>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900 dark:to-primary-800 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Available for New Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              I'm currently available for freelance projects, consulting opportunities, 
              and full-time positions. Whether you need mechanical design expertise, 
              process optimization, or industrial automation solutions, I'm here to help.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
