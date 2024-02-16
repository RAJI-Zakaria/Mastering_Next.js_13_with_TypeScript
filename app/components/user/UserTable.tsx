import React from 'react'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
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
            <th>Email</th>
            <th>Company name</th>
            <th>Company catchPhrase</th>
          </tr>
        </thead>
        <tbody> 
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.company.name}</td>
                <td>{user.company.catchPhrase}</td>
              </tr>
            ))} 
        </tbody>
      </table>
    </>
  )
}

export default UsersTable
