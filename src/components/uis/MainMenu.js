import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

const MainMenu = ({ isAuthenticated, displayName, photoURL}) => {
  return (
    <nav className='main-nav-block'>
      <ul className='main-nav-block__wrapper'>
        <li className="main-nav-block__nav-item">
          <NavLink className="main-nav-block__nav-linkk" to='/'>Home</NavLink>
        </li>
        {
          isAuthenticated
            ? (
              <>
                <li className="main-nav-block__nav-item">
                  <NavLink className="main-nav-block__nav-linkk" to='/dashboard'>Dashboard</NavLink>
                </li>
                <li className="main-nav-block__nav-item">
                  <NavLink className="main-nav-block__nav-linkk" to='/account'>{displayName}</NavLink>
                </li>
                <li className="main-nav-block__nav-item">
                  <a className="main-nav-block__nav-linkk" href="#" role='button' >Logout</a>
                </li>
              </>
            )
            : (
              <>
                <li className="main-nav-block__nav-item">
                  <NavLink className="main-nav-block__nav-linkk" to='/register'>Register</NavLink>
                </li>
                <li className="main-nav-block__nav-item">
                  <NavLink className="main-nav-block__nav-linkk" to='/login'>Login</NavLink>
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