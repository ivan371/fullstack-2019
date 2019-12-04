import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Board from './components/Board'
import Header from './components/Header'
import Product from './components/Product'
import Registration from './components/Registration'
import { ProductCreate } from './components/ProductForm'
import Login from './components/Login'
import initStore from './store'

const App: React.FC = () => {
  return (
    <Provider store={initStore()}>
      <Router>
        <div>
          <Header />
          <Route path="/" exact component={Board} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/product-create/" component={ProductCreate} />
          <Route path="/login" component={Login} />
          <Route path="/registration" component={Registration} />
        </div>
      </Router>
    </Provider>
  )
}

export default App
