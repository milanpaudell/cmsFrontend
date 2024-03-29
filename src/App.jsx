import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Login from './pages/Login/Login'
import Test from './pages/Test/Test'
import UseEffect from './pages/UseEffect/UseEffect'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/contact' element={ <Contact /> } />
        <Route path='/login' element={ <Login /> } />
        <Route path='/test' element={ <Test /> } />
        <Route path='/useEffect' element={ <UseEffect /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
