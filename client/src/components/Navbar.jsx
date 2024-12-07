import React from 'react'
import { Link, Navigate } from "react-router-dom";

// import link from 'next/link'

const Navbar = ({ det, det2, is_Authenticated}) => {
  // const navigate = Navigate();
  const handleLogout = async (e) => {
    const response =  await fetch("http://localhost:3000/user/logout")
    const data = response.json()
    console.log(data)
    alert(data)
    // navigate('/')
    
  }

  console.log(det, det2)
  return (
    <div className="navbar">
      <div className="site_name">
        THE_SOCIAL_SITE {det} {det2}
      </div>
      <ul className='nav_list text-sm'>
        <li> <Link to="/">           HOME</Link></li>
        {
          !is_Authenticated?(
            <>
            <li> <Link to="/login">      LOG_IN</Link>   </li>
            <li> <Link to="/register">   REGISTER</Link> </li>
            </>
          ):(
            <li> <button onClick={handleLogout} className='button'>   LOG_OUT </button>    </li>
          )
        }
        
        <li> <Link to="/imps">       IMPS</Link> </li>

      </ul>

    </div>
  )
}

export default Navbar
