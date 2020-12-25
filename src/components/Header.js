import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../styles/Header.css'
import Logo from '../styles/GIT.png'
const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: '#fff' }
    }
    else {
        return { color: "#161B22" };
    }
}

const Header = ({ history }) => {
  return(
      <>
    <nav className="navbar navbar-expand-lg navbar-light">
    <Link className="navbar-brand" to="/"><img src={Logo}/> <b>GitHub doodle:)</b></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link style={isActive(history, '/')} className="nav-link" to="/"><h5>DASHBOARD</h5><span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link style={isActive(history, '/storage')} className="nav-link" to="/storage"><h5>USERS</h5></Link>
        </li>
      </ul>
    </div>
  </nav>
  </>
  )
}

export default withRouter(Header)
