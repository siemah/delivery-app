import React from 'react'
import Logo from '../../assets/images/logo.png';

export default function Splash() {
  return (
    <div className='full-screen splash-block'>
      <div className="splash-block__logo-block">
        <img src={Logo} alt="awwid brand logo"/>
        <div className="activeindicator"></div>
      </div>
    </div>
  )
}
