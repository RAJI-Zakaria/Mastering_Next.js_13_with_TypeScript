import React, { Suspense } from 'react'
import UsersTable from '../components/user/UserTable'
import Link from 'next/link'

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
      <Link href="/users/new" className
      ="btn btn-primary" >New User</Link>
      <p>{new Date().toLocaleTimeString()}</p>
      <Suspense 
        fallback={<div>Loading...</div>}
      >
        <UsersTable sortOrder={sortOrder}/>
      </Suspense>
    </>
  )
}

export default UsersPage
