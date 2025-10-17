export interface Organization {
  id: string
  name: string
  role: string
  type: 'Professional' | 'Academic' | 'Volunteer' | 'Other'
  startDate: string
  endDate?: string
  description?: string
  website?: string
  logoUrl?: string
  current: boolean
}

export const organizations: Organization[] = [
  // Add your organizations here manually
  // Example structure:
  // {
  //   id: 'org-1',
  //   name: 'University of Jaffna',
  //   role: 'Student',
  //   type: 'Academic',
  //   startDate: '2021-04',
  //   endDate: '2025-11',
  //   description: 'Bachelor of Science (Honors) in Mechanical and Process Engineering',
  //   current: true
  // },
  // {
  //   id: 'org-2',
  //   name: 'Michelin Lanka (Pvt) Ltd',
  //   role: 'Mechanical Engineering Intern',
  //   type: 'Professional',
  //   startDate: '2025-02',
  //   endDate: '2025-08',
  //   description: 'Internship in mechanical systems design and optimization',
  //   current: false
  // }
]

// Function to add new organization (for admin use)
export const addOrganization = (organization: Omit<Organization, 'id'>): Organization => {
  const newOrg: Organization = {
    ...organization,
    id: `org-${Date.now()}`
  }
  organizations.push(newOrg)
  return newOrg
}

// Function to update organization (for admin use)
export const updateOrganization = (id: string, updates: Partial<Organization>): boolean => {
  const index = organizations.findIndex(org => org.id === id)
  if (index !== -1) {
    organizations[index] = { ...organizations[index], ...updates }
    return true
  }
  return false
}

// Function to delete organization (for admin use)
export const deleteOrganization = (id: string): boolean => {
  const index = organizations.findIndex(org => org.id === id)
  if (index !== -1) {
    organizations.splice(index, 1)
    return true
  }
  return false
}
