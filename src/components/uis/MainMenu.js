import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const MainMenu = ({ isAuthenticated, displayName, photoURL}) => {
  return (
    <nav className='main-nav-block'>
      <ul className='main-nav-block__wrapper'>
        <li className="main-nav-block__nav-item">
          <NavLink className="main-nav-block__nav-link" to='/'>Home</NavLink>
        </li>
        {
          isAuthenticated
            ? (
              <>
                <li className="main-nav-block__nav-item">
                  <NavLink className="main-nav-block__nav-link" to='/dashboard'>Dashboard</NavLink>
                </li>
                <li className="main-nav-block__nav-item">
                  <NavLink className="main-nav-block__nav-link" to='/account'>{displayName}</NavLink>
                </li>
                <li className="main-nav-block__nav-item">
                  <a className="main-nav-block__nav-link" href="#" role='button' >Logout</a>
                </li>
              </>
            )
            : (
              <>
                <li className="main-nav-block__nav-item">
                  <NavLink className="main-nav-block__nav-link" to='/register'>Register</NavLink>
                </li>
                <li className="main-nav-block__nav-item">
                  <NavLink className="main-nav-block__nav-link" to='/login'>Login</NavLink>
                </li>
              </>
            )
        }
      </ul>
    </nav>
  )
}

const mapStateToProps = (state,) => {
  let { uid, displayName, photoURL, } = state.user;
  return {
    isAuthenticated: !!uid,
    displayName, photoURL
  }
}
export default connect(mapStateToProps)(MainMenu);