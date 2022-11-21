import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-v8lwrcdi2g66bbk6.us.auth0.com'
      clientId='wHRUAyCsDShcDDBYWp7y5Kf7YA7r30jt'
      redirectUri='https://localhost:3001/'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
