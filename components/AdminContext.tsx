'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface AdminContextType {
  isAdmin: boolean
  setIsAdmin: (isAdmin: boolean) => void
  toggleAdmin: () => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false)

  const toggleAdmin = () => {
    setIsAdmin(!isAdmin)
  }

  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin, toggleAdmin }}>
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const context = useContext(AdminContext)
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider')
  }
  return context
}
