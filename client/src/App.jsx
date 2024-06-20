import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './PAGES/Home'
import About from './PAGES/About'
import Signin from './PAGES/Signin'
import Signup from './PAGES/Signup'
import Dashboard from './PAGES/Dashboard'
import Projects from './PAGES/Projects'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route element={<PrivateRoute/>}>
           <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route path='/projects' element={<Projects/>}/>


      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
