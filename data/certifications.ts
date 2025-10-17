export interface Certification {
  id: string
  name: string
  issuer: string
  date: string
  credentialId?: string
  credentialUrl?: string
  description: string
  pdfUrl?: string
  imageUrl?: string
}

export const certifications: Certification[] = [
  {
    id: 'sw-cad-2024',
    name: 'SOLIDWORKS CAD Design Associate',
    issuer: 'Dassault Systèmes',
    date: 'August 18, 2024',
    credentialId: 'C-C2H69L4P8R',
    description: 'Professional certification in SOLIDWORKS CAD design fundamentals and advanced modeling techniques.',
    pdfUrl: '/pdfs/solidworks-cad-design-associate.pdf'
  },
  {
    id: 'sw-am-2024',
    name: 'SOLIDWORKS Additive Manufacturing Associate',
    issuer: 'Dassault Systèmes',
    date: 'September 26, 2024',
    credentialId: 'C-MAC82DNZGX',
    description: 'Specialized certification in additive manufacturing processes and 3D printing technologies using SOLIDWORKS.',
    pdfUrl: '/pdfs/solidworks-additive-manufacturing-associate.pdf'
  },
  {
    id: 'am-spec-2024',
    name: 'Additive Manufacturing Specialization',
    issuer: 'Arizona State University (Coursera)',
    date: 'June 3, 2024',
    credentialId: '7REKN67W78AC',
    credentialUrl: 'https://coursera.org/verify/specialization/7REKN67W78AC',
    description: 'Comprehensive specialization covering build preparation, machine setup, and post-processing for six different AM processes including material extrusion, material jetting, stereolithography, selective laser sintering, and metal laser powder bed fusion.',
    pdfUrl: '/pdfs/additive-manufacturing-specialization.pdf'
  },
  {
    id: 'ssyb-2024',
    name: 'Six Sigma Yellow Belt Specialization',
    issuer: 'Kennesaw State University (Coursera)',
    date: 'March 28, 2024',
    credentialId: '9N4URAYWT8CU',
    credentialUrl: 'https://coursera.org/verify/specialization/9N4URAYWT8CU',
    description: 'Specialization in Six Sigma and Lean methodologies covering principles, tools for define and measure, analyze, and improve and control phases.',
    pdfUrl: '/pdfs/six-sigma-yellow-belt.pdf'
  },
  {
    id: 'pd-pt-2023',
    name: 'Product Design, Prototyping, and Testing',
    issuer: 'University System of Maryland (edX)',
    date: 'December 27, 2023',
    credentialId: '4fb80500259b40afb5171ed35ab970fc',
    description: 'Verified certificate in product design principles, prototyping techniques, and testing methodologies for engineering applications.',
    pdfUrl: '/pdfs/product-design-prototyping-testing.pdf'
  },
  {
    id: 'hp-3d-2025',
    name: '3D Printing',
    issuer: 'HP Foundation (HP LIFE)',
    date: 'September 5, 2025',
    credentialId: 'da3f3f6c-ae36-493a-93ef-fe01e12fb3e1',
    description: 'Certificate of completion covering 3D printing skills, requirements, and available resources for additive manufacturing.',
    pdfUrl: '/pdfs/hp-3d-printing.pdf'
  },
  {
    id: 'matlab-2024',
    name: 'Essentials of MATLAB Programming',
    issuer: 'The Technological Academy',
    date: 'July 20, 2024',
    credentialId: 'MATLAB-2024-16hrs',
    description: '16-hour online course covering MATLAB fundamentals, data analysis, visualization, Simulink, Stateflow, control systems, and Simscape.',
    pdfUrl: '/pdfs/matlab-programming.pdf'
  },
  {
    id: 'ev-tech-2024',
    name: 'Diploma in Electric Vehicle Technology',
    issuer: 'Alison',
    date: '2024',
    credentialId: '3182-36445659',
    description: 'Comprehensive diploma program covering electric vehicle technology, systems, and applications.',
    pdfUrl: '/pdfs/electric-vehicle-technology.pdf'
  },
  {
    id: 'scada-2025',
    name: 'Learning SCADA: Collect, Analyze, and Visualize Data for Industrial Automation',
    issuer: 'LinkedIn Learning',
    date: 'March 21, 2025',
    credentialId: '0696731ba8ed080775d55f6923eef479fa41553a3cd21c5c9789b4c03a696826',
    description: '2 hours 19 minutes course covering SCADA systems for industrial automation, data collection, analysis, and visualization.',
    pdfUrl: '/pdfs/scada-industrial-automation.pdf'
  },
  {
    id: 'ia-2025',
    name: 'Learning Industrial Automation',
    issuer: 'LinkedIn Learning',
    date: 'April 17, 2025',
    credentialId: '0225d3488b3ae2d8165adb89bc21e1b032d7ac934bf00e48ab3eb75020d681ca',
    description: '41-minute course covering industrial automation fundamentals and applications.',
    pdfUrl: '/pdfs/industrial-automation.pdf'
  },
  {
    id: 'rapid-prototyping-2025',
    name: 'Rapid Prototyping for Product Design',
    issuer: 'LinkedIn Learning',
    date: 'April 21, 2025',
    credentialId: 'b59e1c07a501a73828abdefc51ca60a19342d1e648d8d973ce71b38775fb854a',
    description: '1 hour 38 minutes course covering rapid prototyping techniques and applications in product design.',
    pdfUrl: '/pdfs/rapid-prototyping-product-design.pdf'
  }
]

// Function to add new certification (for admin use)
export const addCertification = (certification: Omit<Certification, 'id'>): Certification => {
  const newCert: Certification = {
    ...certification,
    id: `cert-${Date.now()}`
  }
  certifications.push(newCert)
  return newCert
}

// Function to update certification (for admin use)
export const updateCertification = (id: string, updates: Partial<Certification>): boolean => {
  const index = certifications.findIndex(cert => cert.id === id)
  if (index !== -1) {
    certifications[index] = { ...certifications[index], ...updates }
    return true
  }
  return false
}

// Function to delete certification (for admin use)
export const deleteCertification = (id: string): boolean => {
  const index = certifications.findIndex(cert => cert.id === id)
  if (index !== -1) {
    certifications.splice(index, 1)
    return true
  }
  return false
}
