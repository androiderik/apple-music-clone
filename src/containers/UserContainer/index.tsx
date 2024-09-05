//Author: Erik Rodriguez
'use client' // This is a client component 👈🏽
import { createContext, useState } from 'react'
import { UserDashboard } from '../../components/userDashboard'

export const UserContext = createContext()

export default function UserContainer() {
  const [user, setUser] = useState('Erik Rodriguez')
  return (
    <UserContext.Provider value={user}>
      <UserDashboard />
    </UserContext.Provider>
  )
}
