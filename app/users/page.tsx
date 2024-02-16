import React from 'react'

interface User {
  id: number
  name: string
}

const UsersPage = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users',{
    //cache: "no-cache",//disabling cache
    next: {
      revalidate: 10,//refetch only after 10 seconds
    }
  })
  const users: User[] = await res.json()
  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default UsersPage
