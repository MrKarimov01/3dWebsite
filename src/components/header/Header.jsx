import React from 'react'
import "./Header.scss"
import logo from "./../../Assets/img/logo.png"

import { SearchOutlined } from '@ant-design/icons'


const Header = () => {
  return (
    <div className='Header'>
        <nav>
            <img src={logo} alt="" className='nav_logo'/>

            <ul>
                <li className='reg'>
                    <a href="#">Login</a>
                </li>
                <li className='reg'>
                    <a href="#">Sign up</a>
                </li>
                <li className='search'>
                    <a href="#"><SearchOutlined /></a>
                </li>
                <li className='ham'>
                   <a href="#">
                    <div className="bar"></div>
                   </a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Header