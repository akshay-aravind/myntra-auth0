import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './ProductScreen.css'

const ProductScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProducts(res.data)
      console.log(res.data)
    })
  }, [])

  return (
    <>
      {/* {products.map((product) => (
        <div className='card'>
          <img src={product.image} alt='img' className='img' />
          <div className='container'>
            <h5>
              <b>{product.title}</b>
            </h5>
            <p> Price : $ {product.price}</p>
          </div>
        </div>
      ))} */}
      <h3>For Her</h3>
      <div className='box'>
      {products
        .filter((pro) => pro.category === "women's clothing")
        .map((product) => (
        
          <div className='card'>
            <img src={product.image} alt='img' className='img' />
            <div className='container'>
              <h5>
                <b>{product.title}</b>
              </h5>
              <p> Price : $ {product.price}</p>
            </div>
          </div>
        ))}

        
        </div>
        <h3>Jewelery</h3>
      <div className='box'>
      {products
        .filter((pro) => pro.category === "jewelery")
        .map((product) => (
        
          <div className='card'>
            <img src={product.image} alt='img' className='img' />
            <div className='container'>
              <h5>
                <b>{product.title}</b>
              </h5>
              <p> Price : $ {product.price}</p>
            </div>
          </div>
        ))}

        
        </div>

        <h3>Electronics</h3>
      <div className='box'>
      {products
        .filter((pro) => pro.category === "electronics")
        .map((product) => (
        
          <div className='card'>
            <img src={product.image} alt='img' className='img' />
            <div className='container'>
              <h5>
                <b>{product.title}</b>
              </h5>
              <p> Price : $ {product.price}</p>
            </div>
          </div>
        ))}

        
        </div>

     <h3>For Him</h3>
      <div className='box'>
      {products
        .filter((pro) => pro.category === "men's clothing")
        .map((product) => (
        
          <div className='card'>
            <img src={product.image} alt='img' className='img' />
            <div className='container'>
              <h5>
                <b>{product.title}</b>
              </h5>
              <p> Price : $ {product.price}</p>
            </div>
          </div>
        ))}

        
        </div>

    </>
  )
}

export default ProductScreen
