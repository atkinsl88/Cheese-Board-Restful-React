import React from 'react'
import { BrowserRouter, Switch , Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './components/common/Home'
import CheeseIndex from './components/cheeses/CheeseIndex'
import CheeseShow from './components/cheeses/CheeseShow'
import CheeseNew from './components/cheeses/CheeseNew'
import CheeseEdit from './components/cheeses/CheeseEdit'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import ErrorPage from './components/common/ErrorPage'

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cheeses/:id/edit" component={CheeseEdit} />
      <Route path="/cheeses/new" component={CheeseNew} />
      <Route path="/cheeses/:id" component={CheeseShow} />
      <Route path="/cheeses" component={CheeseIndex} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/*" component={ErrorPage} />
    </Switch>
  </BrowserRouter>
)
export default App