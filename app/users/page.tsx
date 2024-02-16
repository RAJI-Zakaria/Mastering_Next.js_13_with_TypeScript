import React from 'react'
import UsersTable from '../components/user/UserTable'

interface User {
  id: number
  name: string
}

const UsersPage = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users',{
    cache: "no-store",//disabling cache
    // next: {
    //   revalidate: 10,//refetch only after 10 seconds
    // }
  })
  const users: User[] = await res.json()
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <UsersTable/>
    </>
  )
}

export default UsersPage
