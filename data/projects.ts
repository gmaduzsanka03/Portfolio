export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  duration: string
  team: string
  impact: string
  category: string
  features: string[]
  gallery?: string[]
  pdfUrl?: string
  liveUrl?: string
  githubUrl?: string
  featured: boolean
  order: number
}

export interface DesignProject {
  id: string
  title: string
  description: string
  image: string
  category: string
  year: string
  status: string
  specifications: string[]
  tools: string[]
  gallery: string[]
  pdfUrl?: string
  featured: boolean
  order: number
}

// Featured Projects Data
export const featuredProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Multi-medium Multi-purpose Drone & Autonomous Solar Panel Cleaning Robot',
    description: 'Final Year Research (Interdisciplinary) Project - A comprehensive mechatronic solution combining mechanical design, control systems, and sensor integration for autonomous solar panel maintenance. The system features multi-medium capabilities and autonomous operation for efficient solar panel cleaning.',
    image: '/photos/placeholder-project.jpg',
    technologies: ['Mechatronics', 'Control Systems', 'Sensor Integration', 'Autonomous Systems', 'CAD Design', 'Prototyping'],
    duration: '2024 - 2025',
    team: 'Research Team',
    impact: 'Autonomous Operation',
    category: 'Research & Development',
    features: [
      'Multi-medium operational capabilities',
      'Autonomous navigation and control',
      'Integrated sensor systems',
      'Solar panel cleaning mechanism'
    ],
    featured: true,
    order: 1
  },
  {
    id: 'proj-2',
    title: 'Semi automated material Handling conveyor',
    description: 'Internship project involving the complete design and implementation of a semi-automated belt assembly system. Included dimensional survey, material selection, structural analysis, and compliance with manufacturing standards for optimal performance.',
    image: '/photos/semi-automated-conveyor-3d-render.jpg',
    technologies: ['SolidWorks', 'Structural Analysis', 'Material Selection', 'Manufacturing Standards', 'Dimensional Survey'],
    duration: '2025',
    team: 'Internship Team',
    impact: 'Improved Efficiency',
    category: 'Industrial Design',
    features: [
      'Semi-automated operation',
      'Structural optimization',
      'Manufacturing compliance',
      'Performance optimization'
    ],
    gallery: [
      '/photos/semi-automated-conveyor-3d-render.jpg',
      '/photos/shearing-machine-technical-drawing.jpg',
      '/photos/conveyor-engineering-drawing.jpg'
    ],
    featured: true,
    order: 2
  },
  {
    id: 'proj-3',
    title: 'Overhead Gantry Crane Design (5 Ton, Dual-Axis)',
    description: 'Led the design and documentation of a dual-axis overhead gantry crane with 5-ton capacity. Focused on safety, load capacity optimization, and strict adherence to engineering regulations and safety standards.',
    image: '/photos/placeholder-project.jpg',
    technologies: ['Structural Design', 'Safety Engineering', 'Load Analysis', 'Engineering Regulations', 'Technical Documentation'],
    duration: '2025',
    team: 'Design Team',
    impact: '5 Ton Capacity',
    category: 'Heavy Machinery',
    features: [
      'Dual-axis movement capability',
      '5-ton load capacity',
      'Safety compliance',
      'Engineering regulation adherence'
    ],
    featured: true,
    order: 3
  },
  {
    id: 'proj-4',
    title: 'Floating Solar PV Panel System',
    description: 'Final Year Research Project (Senior Batch) - Led the design focusing on feasibility analysis, structural calculations, and component selection. Demonstrated ability to handle investment appraisals for plant capability enhancement projects.',
    image: '/photos/floating solar system/1_54247316212_l.jpg',
    technologies: ['Solar Technology', 'Structural Analysis', 'Feasibility Studies', 'Investment Appraisal', 'Component Selection'],
    duration: '2023 - 2024',
    team: 'Research Team',
    impact: 'Renewable Energy',
    category: 'Renewable Energy',
    features: [
      'Floating platform design',
      'Structural calculations',
      'Feasibility analysis',
      'Investment appraisal'
    ],
    featured: true,
    order: 4
  },
  {
    id: 'proj-5',
    title: 'Design and Development of a Coconut Oil Extruder Machine',
    description: 'Designed CAD models in SolidWorks and developed a prototype for a piston-based coconut oil extruder. The project involved complete mechanical design, prototyping, and testing of the extraction mechanism.',
    image: '/photos/coconut oil extruder.jpg',
    technologies: ['SolidWorks', 'Prototyping', 'Mechanical Design', 'CAD Modeling', 'Testing & Validation'],
    duration: '2022',
    team: 'Design Team',
    impact: 'Prototype Development',
    category: 'Agricultural Machinery',
    features: [
      'Piston-based extraction mechanism',
      'Complete CAD modeling',
      'Prototype development',
      'Testing and validation'
    ],
    featured: true,
    order: 5
  },
  {
    id: 'proj-6',
    title: 'Foot Pedal Air Pump Design',
    description: 'Designed a foot pedal pump with dual cylinders for efficient tire inflation and domestic applications. Used SolidWorks for modeling, performed ANSYS analysis, and validated results through hand calculations.',
    image: '/photos/foot pedal air pump/1_53802755657_l.jpg',
    technologies: ['SolidWorks', 'ANSYS', 'FEA Analysis', 'Hand Calculations', 'Dual Cylinder Design'],
    duration: '2024',
    team: 'Individual Project',
    impact: 'Efficient Design',
    category: 'Product Design',
    features: [
      'Dual cylinder configuration',
      'Foot pedal operation',
      'FEA validation',
      'Hand calculation verification'
    ],
    gallery: [
      '/photos/foot pedal air pump/1_53802755657_l.jpg',
      '/photos/foot pedal air pump/2_53803932753_l.jpg',
      '/photos/foot pedal air pump/screenshot-2024-06-05-162241_53802755477_l.jpg'
    ],
    featured: true,
    order: 6
  },
]

// Design Projects Data
export const designProjects: DesignProject[] = [
  {
    id: 'design-1',
    title: 'Multi-purpose Drone Mechanical Design',
    description: 'Complete mechanical design of the drone system for autonomous solar panel cleaning, including frame structure, landing gear, and cleaning mechanism integration.',
    image: '/photos/multi-purpose-drone-3d-render.jpg',
    category: 'Mechatronics',
    year: '2024-2025',
    status: 'In Development',
    specifications: [
      'Multi-medium Capabilities',
      'Autonomous Navigation',
      'Integrated Cleaning System',
      'Modular Design'
    ],
    tools: ['SolidWorks', 'Structural Analysis', 'Aerospace Design', 'Integration Design'],
    gallery: ['/photos/multi-purpose-drone-3d-render.jpg'],
    featured: true,
    order: 1
  },
  {
    id: 'design-2',
    title: 'Stirling Engine',
    description: 'Complete mechanical design and assembly of a Stirling engine with two cylindrical components connected by curved pipe and flywheel mechanism.',
    image: '/photos/stirling engine.jpg',
    category: 'Mechanical Systems',
    year: '2023',
    status: 'Completed',
    specifications: [
      'Two Cylinder Design',
      'Flywheel Mechanism',
      'Curved Pipe Connection',
      'Metallic Assembly'
    ],
    tools: ['SolidWorks', 'Mechanical Design', 'Assembly Design', 'CAD Modeling'],
    gallery: ['/photos/stirling engine.jpg'],
    featured: true,
    order: 2
  },
  {
    id: 'design-3',
    title: 'Gear Speed Reducer',
    description: 'Design of a gear speed reducer mechanism with three large spur gears meshing inside a blue open-top casing with horizontal shafts.',
    image: '/photos/gear speed reducer.jpg',
    category: 'Mechanical Systems',
    year: '2023',
    status: 'Completed',
    specifications: [
      'Three Spur Gear System',
      'Speed Reduction Mechanism',
      'Horizontal Shaft Design',
      'Bearing Integration'
    ],
    tools: ['SolidWorks', 'Gear Design', 'Mechanical Analysis', 'CAD Modeling'],
    gallery: ['/photos/gear speed reducer.jpg'],
    featured: true,
    order: 3
  },
  {
    id: 'design-4',
    title: 'Belt Assembly System',
    description: 'Complete belt assembly system with horizontal and inclined sections, metallic frame support, and collection bin for material handling.',
    image: '/photos/belt-assembly-system-3d-render.jpg',
    category: 'Industrial Systems',
    year: '2023',
    status: 'Completed',
    specifications: [
      'Horizontal & Inclined Sections',
      'Metallic Frame Support',
      'Collection System',
      'Material Handling'
    ],
    tools: ['SolidWorks', 'Belt Assembly Design', 'Structural Analysis', 'CAD Modeling'],
    gallery: ['/photos/belt-assembly-system-3d-render.jpg'],
    featured: true,
    order: 4
  },
  {
    id: 'design-5',
    title: 'Car Modelling - Nissan GT-R',
    description: '3D modeling of Nissan GT-R sports car with aggressive front grille, headlights, sleek body lines, and blue wireframe overlay.',
    image: '/photos/Nissan GTR/final_53803694661_l.jpg',
    category: 'Automotive Design',
    year: '2023',
    status: 'Completed',
    specifications: [
      'Sports Car Modeling',
      'Detailed Body Design',
      'Wireframe Visualization',
      'Automotive Aesthetics'
    ],
    tools: ['SolidWorks', 'Automotive Design', 'Surface Modeling', 'CAD Modeling'],
    gallery: ['/photos/Nissan GTR/final_53803694661_l.jpg', '/photos/Nissan GTR/final1_53804022679_l.jpg', '/photos/Nissan GTR/screenshot-2024-06-13-023318_53804130955_l.jpg', '/photos/Nissan GTR/screenshot-2024-06-13-025245_53803938468_l.jpg'],
    featured: true,
    order: 5
  },
  {
    id: 'design-6',
    title: 'Mini Projects Collection',
    description: 'A comprehensive collection of mini mechanical projects including oil pump, scotch yoke mechanism, V-block assembly, spark plug, and various small mechanical components demonstrating diverse design capabilities.',
    image: '/photos/mini projects/123434_53804017889_l.jpg',
    category: 'Mechanical Systems',
    year: '2023-2024',
    status: 'Completed',
    specifications: [
      'Oil Pump Design',
      'Scotch Yoke Mechanism',
      'V-Block Assembly',
      'Spark Plug Modeling',
      'Jack Mechanism',
      'Oil Bottle Design',
      'Pen Drive Modeling'
    ],
    tools: ['SolidWorks', 'Mechanical Design', 'Assembly Design', 'CAD Modeling', 'Component Design'],
    gallery: [
      '/photos/mini projects/123434_53804017889_l.jpg',
      '/photos/mini projects/assem2_53804014504_l.jpg',
      '/photos/mini projects/jack_53803931398_l.jpg',
      '/photos/mini projects/oil-bottle_53803939363_l.jpg',
      '/photos/mini projects/oil-pump_53803931208_l.jpg',
      '/photos/mini projects/pendrive_53803685721_l.jpg',
      '/photos/mini projects/scotch-yoke-mechanism_53804123215_l.jpg',
      '/photos/mini projects/screenshot-2024-01-10-161810_53803685531_l.jpg',
      '/photos/mini projects/screenshot-2024-01-10-161841_53803931178_l.jpg',
      '/photos/mini projects/screenshot-2024-01-10-161920_53804013664_l.jpg',
      '/photos/mini projects/screenshot-2024-01-10-162035_53804013639_l.jpg',
      '/photos/mini projects/screenshot-2024-01-10-162103_53804122830_l.jpg',
      '/photos/mini projects/screenshot-2024-01-10-162527_53802753337_l.jpg',
      '/photos/mini projects/screenshot-2024-01-30-214352_53804013329_l.jpg',
      '/photos/mini projects/screenshot-2024-01-30-214514_53804013209_l.jpg',
      '/photos/mini projects/screenshot-2024-01-30-214927_53802753232_l.jpg',
      '/photos/mini projects/screenshot-2024-01-30-215132_53804122545_l.jpg',
      '/photos/mini projects/spark-plug_53803684876_l.jpg',
      '/photos/mini projects/v-block-assembly_53803684761_l.jpg'
    ],
    featured: true,
    order: 6
  },
  {
    id: 'design-7',
    title: 'Technical Drawings & Assemblies',
    description: 'Professional technical drawings and assembly documentation including belt and pulley systems, assembly drawings, and detailed mechanical component documentation.',
    image: '/photos/Drawings/assembly_53802756962_l.jpg',
    category: 'Technical Documentation',
    year: '2023-2024',
    status: 'Completed',
    specifications: [
      'Assembly Drawings',
      'Belt and Pulley Systems',
      'Technical Documentation',
      'Engineering Drawings',
      'Component Specifications'
    ],
    tools: ['SolidWorks', 'Technical Drawing', 'Engineering Documentation', 'CAD Drafting', 'Assembly Design'],
    gallery: [
      '/photos/Drawings/assembly_53802756962_l.jpg',
      '/photos/Drawings/belt-and-pully_53804126360_l.jpg',
      '/photos/Drawings/monte_53803688821_l.jpg'
    ],
    featured: true,
    order: 7
  },
  {
    id: 'design-8',
    title: 'Shredder Machine Design',
    description: 'Complete design and engineering of a shredder machine for material processing, featuring robust mechanical components and efficient cutting mechanisms.',
    image: '/photos/shredder machine.jpg',
    category: 'Industrial Systems',
    year: '2023',
    status: 'Completed',
    specifications: [
      'Material Processing',
      'Cutting Mechanism Design',
      'Robust Construction',
      'Industrial Application',
      'Safety Features'
    ],
    tools: ['SolidWorks', 'Industrial Design', 'Mechanical Analysis', 'Safety Engineering', 'CAD Modeling'],
    gallery: ['/photos/shredder machine.jpg'],
    featured: true,
    order: 8
  },
  {
    id: 'design-9',
    title: 'Pad Lock Mechanical Design',
    description: 'Detailed mechanical design of a pad lock with precision components, security mechanisms, and robust construction for reliable locking functionality.',
    image: '/photos/pad lock.jpg',
    category: 'Product Design',
    year: '2023',
    status: 'Completed',
    specifications: [
      'Security Mechanism',
      'Precision Components',
      'Robust Construction',
      'Locking Functionality',
      'Durability Design'
    ],
    tools: ['SolidWorks', 'Product Design', 'Security Engineering', 'Precision Design', 'CAD Modeling'],
    gallery: ['/photos/pad lock.jpg'],
    featured: true,
    order: 9
  }
]

// Helper functions for managing projects
export const addProject = (project: Omit<Project, 'id'>): Project => {
  const newProject: Project = {
    ...project,
    id: `proj-${Date.now()}`
  }
  featuredProjects.push(newProject)
  return newProject
}

export const updateProject = (id: string, updates: Partial<Project>): boolean => {
  const index = featuredProjects.findIndex(proj => proj.id === id)
  if (index !== -1) {
    featuredProjects[index] = { ...featuredProjects[index], ...updates }
    return true
  }
  return false
}

export const deleteProject = (id: string): boolean => {
  const index = featuredProjects.findIndex(proj => proj.id === id)
  if (index !== -1) {
    featuredProjects.splice(index, 1)
    return true
  }
  return false
}

export const addDesignProject = (project: Omit<DesignProject, 'id'>): DesignProject => {
  const newProject: DesignProject = {
    ...project,
    id: `design-${Date.now()}`
  }
  designProjects.push(newProject)
  return newProject
}

export const updateDesignProject = (id: string, updates: Partial<DesignProject>): boolean => {
  const index = designProjects.findIndex(proj => proj.id === id)
  if (index !== -1) {
    designProjects[index] = { ...designProjects[index], ...updates }
    return true
  }
  return false
}

export const deleteDesignProject = (id: string): boolean => {
  const index = designProjects.findIndex(proj => proj.id === id)
  if (index !== -1) {
    designProjects.splice(index, 1)
    return true
  }
  return false
}
