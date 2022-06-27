import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function User() {
  const [data, SetData] = useState([])

  useEffect(() => {
    axios.get(`https://cardgametestserver.azurewebsites.net/user/name/robin`).then((res) => {
      const data = res.data
      SetData(data)
    })
  }, [])


  return (
    <>
      User Page
      <h1>{data.username}</h1>
    </>
  )
}
