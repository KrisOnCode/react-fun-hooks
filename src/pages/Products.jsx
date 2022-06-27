import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Products() {
  const [products, SetProducts] = useState([])

  useEffect(() => {
    axios.get(`https://cardgametestserver.azurewebsites.net/product`).then((res) => {
      const responseProducts = res.data
      SetProducts(responseProducts)
    })
  }, [])


  return (
    <>
       <h1>Product List</h1>
       {products &&
        products.map((product) => {
          const { productId, productName, productDescription, productPrice } = product
          return (
            <div key={productId}>
              <h1>{productName}</h1>
              <h3>{productDescription}</h3>
              <h5>{productPrice}</h5>
            </div>
          )})}
    </>
  )
}
