import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <>
        <div className='footer-container'>
            <div className='section-a'>
                <img src={logo} alt="" />
            </div>
            <div className='section-b'>
                <h2>FAQ</h2>
                <p>Invester</p>
                <p>Privacy</p>
                <p>Speed Test</p>
            </div>
            <div className='section-c'>
                <h2>Help center</h2>
                <p>Jobs</p>
                <p>Cookie</p>
                <p>Legal Notices</p>
            </div>
            <div className='section-d'>
                <h2>Account</h2>
                <p>Watch</p>
                <p>Info</p>
            </div>
        </div>
    </>
  )
}

export default Footer