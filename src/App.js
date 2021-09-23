import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoginPage from './pages/accounts/LoginPage'
import RegisterPage from './pages/accounts/RegisterPage'
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <Router>
      <Route path='/register' component={RegisterPage} />
      <Route path='/login' component={LoginPage} />
      <Route path='/' component={HomePage} exact />
    </Router>
  )
}

export default App
