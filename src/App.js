import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import BurgerMenu from './components/BurgerMenu'


import './App.css'


function App() {

  return (
    <div className="app">
      <Router>
        <BurgerMenu />
      </Router>
    </div>
  )
}

export default App;
