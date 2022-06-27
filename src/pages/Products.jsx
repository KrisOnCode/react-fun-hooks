import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {
  const [products, SetUsers] = useState([])

  useEffect(() => {
    axios.get(`https://cardgametestserver.azurewebsites.net/product`).then((res) => {
      const responseProducts = res.data
      SetUsers(responseProducts)
    })
  }, [])


  return (
    <>
       <h1>Users List</h1>
       {users &&
        users.map((user) => {
          const { userId, username, password, email } = user
          return (
            <div key={userId}>
              <h1>{username}</h1>
              <h3>{password}</h3>
              <h5>{email}</h5>
            </div>
          )})}
    </>
  )
}
