import React from 'react'

interface User {
  id: number
  name: string
}

const UsersTable = async () => {
  const res = await fetch('http://jsonplaceholder.typicode.com/users',{
    cache: "no-store",//disabling cache
  })
  const users: User[] = await res.json()
  return ( 
    <>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody> 
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
              </tr>
            ))} 
        </tbody>
      </table>
    </>
  )
}

export default UsersTable
