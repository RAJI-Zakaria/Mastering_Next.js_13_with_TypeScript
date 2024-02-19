import React from 'react'
import UsersTable from '../components/user/UserTable'

interface User {
  id: number
  name: string
}

interface Props {
  searchParams: {sortOrder: string}
}

const UsersPage = async ({searchParams: { sortOrder}}: Props) => {
  
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UsersTable sortOrder={sortOrder}/>
    </>
  )
}

export default UsersPage
