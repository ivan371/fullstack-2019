import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Board from './components/Board'
import Header from './components/Header'
import Product from './components/Product'
import ProductCreate from './components/ProductCreate'
import Login from './components/Login'

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" exact component={Board} />
        <Route path="/product" component={Product} />
        <Route path="/product-create/" component={ProductCreate} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  )
}

export default App
