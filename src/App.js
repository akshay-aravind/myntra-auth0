import './App.css'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Profile from './Screens/Profile/Profile'
import ProductScreen from './Screens/Product/ProductScreen'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/products' element={<ProductScreen />} />
        </Routes>
      </Router>
      
    </div>
  )
}

export default App
