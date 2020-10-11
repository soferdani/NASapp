import React from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import NavBarLinks from './NavBarLinks'
import Favorites from '../container/Favorites'
import Home from '../container/Home'
import Search from '../container/Search'

export default function NavBar() { 
    
    
  return (
      <Router>
      <div className='navbar'>
        <div className='main-links'>
        <Link to='/'>HOME</Link>
        <Link to='/search'>SEARCH</Link>
        <Link to='/favorites'>FAVORITES</Link>
        </div>
      </div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Search" component={Search}/>
      <Route exact path="/Favorites" component={Favorites}/>

      </Router>
      )
}




