import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    
    <div className='header' >
        <Link style={{textDecoration:'none',color:'white'}} to='/' ><span style={{cursor:'pointer'}} >Where in the World?</span></Link>
        
    </div>
  )
}

export default Header