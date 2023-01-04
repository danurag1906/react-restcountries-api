import React from 'react'
import './Header.css'
import { useNavigate,Link } from 'react-router-dom'


const Header = () => {
  return (
    
    <div className='header' >
        <Link style={{textDecoration:'none',color:'white'}} to='/' ><span style={{cursor:'pointer'}} >Where in the World?</span></Link>
        <span>Light Mode</span>
    </div>
  )
}

export default Header