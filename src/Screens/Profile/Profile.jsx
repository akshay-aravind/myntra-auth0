import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'

const Profile = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0()
  console.log(isAuthenticated)
  if (isLoading) {
    return <div className='loader'></div>
  }

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <Button onClick={logout()}>Log Out</Button>
        </div>
      ) : (
        <>
          <img
            src='https://i.pinimg.com/736x/01/95/82/01958236733281d8467cdf63484bfbed.jpg'
            alt=''
          />
          <br></br>
          <Button onClick={() => loginWithRedirect()}>Login</Button>
        </>
      )}
    </div>
  )
}

export default Profile
