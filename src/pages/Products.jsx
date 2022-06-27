import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Card, Button } from 'react-bootstrap'

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
            <Card style={{ width: '18rem' }} key={productId}>
            <Card.Body>
              <Card.Title>{productName}</Card.Title>
              <Card.Text>
                {productDescription}
              </Card.Text>
              <Card.Text>
                ${productPrice}.00
              </Card.Text>
              <Button>Add to Cart</Button>
            </Card.Body>
          </Card>
          )})}
    </>
  )
}
