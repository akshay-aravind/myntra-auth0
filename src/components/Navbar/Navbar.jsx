import './Navbar.css'
import SearchIcon from '@mui/icons-material/Search'
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'
import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@mui/material'

const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0()
  return (
    <div className='navbar'>
      <ul>
        <li>
          <img
            src='https://aartisto.com/wp-content/uploads/2020/11/myntra.png'
            alt=''
            className='navlogo'
          />
        </li>
        <li className='link'>MEN</li>
        <li className='link'>WOMEN</li>
        <li className='link'>KIDS</li>
        <li className='link'>HOME & LIVING</li>
        <li className='link'>BEAUTY</li>
        <li className='link'>STUDIO</li>
        <li className='search'>
          <SearchIcon />
          <input type='search' placeholder='Search' />
        </li>
        <li  className='icon' onClick={() => loginWithRedirect()}>
          <Person2OutlinedIcon className='logo'/>
          <div >
            {isAuthenticated ? (
              <div className=''>{user.name} </div>
            ) : (
              'Login'
            )}
          </div>
        </li>
        <li className='icon'>
        <FavoriteBorderOutlinedIcon className='logo'/>
          <div>
            Wishlist
          </div>
        </li>
        <li className='icon'>
        <ShoppingBagOutlinedIcon  className='logo'/>
          <div>
            Cart
          </div>
        </li>
        <li>
          {isAuthenticated ? (
            <Button onClick={() => logout()}> LogOut</Button>
          ) : (
            ' '
          )}
        </li>
      </ul>
    </div>
  )
}

export default Navbar
