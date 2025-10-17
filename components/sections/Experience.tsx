'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, Building2, Award, Users, TrendingUp } from 'lucide-react'

export function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'Michelin Lanka (Pvt) Ltd',
      position: 'Mechanical Engineering Intern',
      location: 'Ekala, Ja-Ela, Sri Lanka',
      duration: 'Feb 2025 - Aug 2025',
      type: 'Internship',
      description: 'Designed, developed, and optimized mechanical systems and components for wheel manufacturing. Collaborated with cross-functional teams on product development and process improvements.',
      achievements: [
        'Designed and optimized mechanical systems for wheel manufacturing',
        'Created and maintained detailed 2D/3D CAD models using SolidWorks and AutoCAD',
        'Collaborated with cross-functional teams on product development',
        'Troubleshot and resolved mechanical and robotic system issues during production',
        'Ensured compliance with industry safety standards and mechanical regulations'
      ],
      technologies: ['SolidWorks', 'AutoCAD', 'Mechanical Design', 'Robotic Systems', 'Safety Standards'],
      companySize: 'Multinational Corporation',
      industry: 'Automotive Manufacturing'
    },
    {
      company: 'Upwork & Freelancer',
      position: 'Freelance Designer',
      location: 'Sri Lanka',
      duration: 'Sep 2022 - Present',
      type: 'Freelance',
      description: 'Provide end-to-end solutions in polymer additive manufacturing, including design, model optimization, and prototype development. Directly relevant to design and preparation of models of mechanisms and production machinery.',
      achievements: [
        'Delivered end-to-end solutions in polymer additive manufacturing',
        'Specialized in design and model optimization for 3D printing',
        'Developed prototypes for various mechanical systems',
        'Created models for mechanisms and production machinery',
        'Maintained high client satisfaction through quality deliverables'
      ],
      technologies: ['3D Printing', 'Additive Manufacturing', 'Prototype Development', 'Model Optimization', 'Client Management'],
      companySize: 'Freelance Platform',
      industry: 'Additive Manufacturing'
    },
    {
      company: 'University Research Project',
      position: 'Final Year Research Student',
      location: 'University of Jaffna',
      duration: '2024 - 2025',
      type: 'Research',
      description: 'Leading interdisciplinary research project on multi-medium multi-purpose drone and autonomous solar panel cleaning robot, emphasizing mechatronic solutions.',
      achievements: [
        'Developed comprehensive mechatronic solution for autonomous systems',
        'Integrated mechanical, control, and sensor systems',
        'Designed multi-medium operational capabilities',
        'Created autonomous navigation and control systems'
      ],
      technologies: ['Mechatronics', 'Control Systems', 'Sensor Integration', 'Autonomous Systems', 'CAD Design'],
      companySize: 'Research Team',
      industry: 'Research & Development'
    },
    {
      company: 'University Research Project',
      position: 'Senior Research Student',
      location: 'University of Jaffna',
      duration: '2023 - 2024',
      type: 'Research',
      description: 'Led design and development of floating solar PV panel system, focusing on feasibility analysis, structural calculations, and investment appraisal.',
      achievements: [
        'Led floating solar PV panel system design project',
        'Conducted comprehensive feasibility analysis',
        'Performed structural calculations and component selection',
        'Demonstrated investment appraisal capabilities for plant enhancement'
      ],
      technologies: ['Solar Technology', 'Structural Analysis', 'Feasibility Studies', 'Investment Appraisal', 'Component Selection'],
      companySize: 'Research Team',
      industry: 'Renewable Energy'
    }
  ]

  const totalExperience = 4
  const projectsCompleted = 30
  const teamMembersLed = 3
  const costSavings = 'Research & Development'

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic and internship experience in mechanical engineering with focus on research projects, 
            industrial design, and practical applications in manufacturing and automation.
          </p>
        </motion.div>

        {/* Experience Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <Calendar className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{totalExperience}+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <Award className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{projectsCompleted}+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <Users className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{teamMembersLed}+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Team Members Led</div>
          </div>
          <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
            <TrendingUp className="h-8 w-8 text-primary-600 dark:text-primary-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900 dark:text-white">{costSavings}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Cost Savings</div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 transform md:-translate-x-0.5"></div>

          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-600 rounded-full transform -translate-x-2 md:-translate-x-2 z-10"></div>

              {/* Experience Card */}
              <div className={`ml-12 md:ml-0 md:w-5/12 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
              }`}>
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 dark:border-gray-700">
                  {/* Company Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                        {experience.position}
                      </h3>
                      <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium mb-2">
                        <Building2 className="h-4 w-4 mr-1" />
                        {experience.company}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {experience.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {experience.duration}
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium rounded-full">
                      {experience.type}
                    </span>
                  </div>

                  {/* Company Info */}
                  <div className="flex gap-4 mb-4 text-sm text-gray-600 dark:text-gray-300">
                    <span>Industry: {experience.industry}</span>
                    <span>Size: {experience.companySize}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start">
                          <div className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies & Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Interested in discussing how my experience can benefit your organization?
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
