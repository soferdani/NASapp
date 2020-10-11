import React from 'react';
import './App.css';
import Container from './components/container/Container';
import NavBar from './components/nav/Navbar';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      this is app
      <NavBar></NavBar>
      <Container></Container>
    </div>
  )
}

export default App;
