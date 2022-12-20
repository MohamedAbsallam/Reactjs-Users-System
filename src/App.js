import React, {Component} from 'react'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'
import HomePage from './Pages/Home/HomePage'
import AboutPage from './Pages/About/AboutPage'
import ContactPage from './Pages/Contact/ContactPage'
import UsersPage from './Pages/Users/UsersPage'
import UserPage from './Pages/Users/UserPage'
import EditPage from './Pages/Users/EditPage'
import CreatePage from './Pages/Users/CreatePage'
import NotFound from'./Pages/404'

const HeaderNav = (props) => <NavLink {...props} end activeclassname='active'>{props.children}</NavLink>

class App extends Component{
  render() {
    return(
      <Router>
      <div>
      <HeaderNav to='/'>Home</HeaderNav>{' '}
      <HeaderNav to='/about'>About</HeaderNav>{' '}
      <HeaderNav to='/users'>Users</HeaderNav>{' '}
      <HeaderNav to='/users/create'>CreateUser</HeaderNav>{' '}
      <HeaderNav to='/contact'>Contact</HeaderNav>

      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route exact path='/about' element={<AboutPage/>}/>
        <Route exact path='/users' element={<UsersPage/>}/>
        <Route exact path='/users/:id' element={<UserPage/>}/>
        <Route exact path='/users/edit/:id' element={<EditPage/>}/>
        <Route exact path='/users/create' element={<CreatePage/>}/>
        <Route exact path='/contact' element={<ContactPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </div>
      </Router>
    )
  }
}

export default App