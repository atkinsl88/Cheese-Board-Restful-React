import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'

class Navbar extends React.Component {
  
  state = {
    isOpen: false
  }

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen})
  }

  handleLogout = () => {
    logout()
    this.props.history.push('/')
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ isOpen: false })
    }
  }

  render() {
    const isLoggedIn = isAuthenticated()
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item">
              CheeseBored
            </Link>
            <span onClick={this.handleToggle} className={`navbar-burger ${this.state.isOpen ? 'is-active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div className={`navbar-menu ${this.state.isOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link to="/cheeses" className="navbar-item">All The Cheese Please</Link>
              {isLoggedIn ?
                <>
                  <Link to="/cheeses/new" className="navbar-item">Add a new Cheese</Link>
                  <span className="navbar-item" onClick={this.handleLogout}>Log Out</span>
                </>
                :
                <>
                  <Link to="/register" className="navbar-item">Register</Link>
                  <Link to="/login" className="navbar-item">Log In</Link>
                </>
              }
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(Navbar)