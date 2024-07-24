/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context';

const NavBar = () => {
    return (
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt='User Icon' />
        </div>
    )
}

export default NavBar