import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useAuth0 } from '@auth0/auth0-react'
import ProductScreen from '../Product/ProductScreen'
import './HomeScreen.css'

const HomeScreen = () => {
  const { isAuthenticated } = useAuth0()
  return (
    <div>
      <Navbar />
      {isAuthenticated ? (
        <div className='products'>
          {' '}
          <img
            src='https://pbs.twimg.com/media/FJ7-8hWaMAkC_s-?format=jpg&name=medium'
            alt=''
          />
          <ProductScreen />{' '}
        </div>
      ) : (
        <img
          src='https://i.pinimg.com/originals/01/95/82/01958236733281d8467cdf63484bfbed.png'
          alt=''
          className='imgin'
        />
      )}
    </div>
  )
}

export default HomeScreen
