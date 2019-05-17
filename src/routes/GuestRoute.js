import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const GuestRoute =({isAuthenticated, component: Component, ...rest}) => {
  return (
    <Route 
      render={(props) => (
        !isAuthenticated
          ? <Component {...props} />
          : <Redirect to='/dashboard' /> 
      )} 
      {...rest}
    />
  )
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: !!state.user.uid,
  }
}
export default connect(mapStateToProps)(GuestRoute);