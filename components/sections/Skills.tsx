'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Cpu, 
  Settings, 
  Wrench, 
  Zap, 
  BarChart3, 
  Shield, 
  Layers,
  Cog,
  Monitor,
  Database,
  GitBranch,
  FileText
} from 'lucide-react'

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      title: 'Industrial Automation',
      icon: <Cpu className="h-6 w-6" />,
      skills: [
        { name: 'CNC Programming', level: 90 },
        { name: 'FANUC Robotics', level: 85 },
        { name: 'PLC (Siemens S7-1200)', level: 88 },
        { name: 'Industrial Control Systems', level: 82 },
        { name: 'Automation Integration', level: 85 }
      ]
    },
    {
      title: 'Design & Modeling',
      icon: <Settings className="h-6 w-6" />,
      skills: [
        { name: 'AutoCAD', level: 95 },
        { name: 'SolidWorks', level: 92 },
        { name: 'Siemens NX', level: 88 },
        { name: '3D Modeling & Simulation', level: 90 },
        { name: 'Technical Documentation', level: 92 }
      ]
    },
    {
      title: 'Project Management',
      icon: <BarChart3 className="h-6 w-6" />,
      skills: [
        { name: 'Project Management', level: 88 },
        { name: 'Engineering Documentation', level: 90 },
        { name: 'Lean Six Sigma Principles', level: 85 },
        { name: 'Process Optimization', level: 87 },
        { name: 'Quality Control', level: 89 }
      ]
    },
    {
      title: 'Hydraulics & Pneumatics',
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: 'Hydraulic Circuit Design', level: 85 },
        { name: 'Pneumatic Systems', level: 82 },
        { name: 'Fluid Power Systems', level: 80 },
        { name: 'System Integration', level: 83 },
        { name: 'Troubleshooting', level: 87 }
      ]
    },
    {
      title: 'Additive Manufacturing',
      icon: <Layers className="h-6 w-6" />,
      skills: [
        { name: '3D Printing', level: 90 },
        { name: 'Rapid Prototyping', level: 88 },
        { name: 'Additive Manufacturing Design', level: 85 },
        { name: 'Model Optimization', level: 87 },
        { name: 'Prototype Development', level: 89 }
      ]
    },
    {
      title: 'Communication & IT',
      icon: <Monitor className="h-6 w-6" />,
      skills: [
        { name: 'Written Communication', level: 88 },
        { name: 'IT Literacy', level: 90 },
        { name: 'Client Expectations Management', level: 85 },
        { name: 'MS Office Suite', level: 92 },
        { name: 'Excel & PowerPoint', level: 90 }
      ]
    }
  ]

  const coreCompetencies = [
    {
      icon: <Layers className="h-8 w-8" />,
      title: 'System Integration',
      description: 'Expertise in integrating complex mechanical systems with automation and control systems.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safety & Compliance',
      description: 'Deep understanding of industrial safety standards and regulatory compliance requirements.'
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance Optimization',
      description: 'Proven ability to optimize system performance and improve operational efficiency.'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Data-Driven Decisions',
      description: 'Utilizing data analysis and modeling to make informed engineering decisions.'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Core Competencies & Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive skill set spanning mechanical design, process engineering, 
            industrial automation, and maintenance with a focus on innovation and efficiency.
          </p>
        </motion.div>

        {/* Core Competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {coreCompetencies.map((competency, index) => (
            <motion.div
              key={competency.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-4 flex justify-center">
                {competency.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {competency.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {competency.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + categoryIndex * 0.1, duration: 0.6 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center mb-6">
                <div className="text-primary-600 dark:text-primary-400 mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 0.4 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.8 + categoryIndex * 0.1 + skillIndex * 0.05, duration: 1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Additional Expertise
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'ISO Standards', 'Six Sigma', 'Root Cause Analysis', 'Cost Optimization',
              'Vendor Management', 'Technical Writing', 'Training & Development',
              'Cross-functional Collaboration', 'Continuous Improvement', 'Innovation Management'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.9 + index * 0.05, duration: 0.3 }}
                className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
