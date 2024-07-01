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
import OnlyAdminPrivateRoute from './components/OnlyAdminPrivateRoute'
import CreatePost from './PAGES/CreatePost'
import UpdatePost from './PAGES/UpdatePost'
import PostPage from './PAGES/PostPage'
import ScrollToTop from './components/ScrollToTop.jsx'
import Search from './PAGES/Search.jsx'

const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route element={<PrivateRoute/>}>
           <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route element={<OnlyAdminPrivateRoute/>}>
           <Route path='/create-post' element={<CreatePost/>}/>
           <Route path='/update-post/:postId' element={<UpdatePost/>}/>
        </Route>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/post/:postSlug' element={<PostPage/>}/>


      </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
