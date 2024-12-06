import React from 'react'
import { Link } from "react-router-dom";

// import link from 'next/link'

const Navbar = ({ det, det2 }) => {
  console.log(det, det2)
  return (
    <div className="navbar">
      <div className="site_name">
        THE_SOCIAL_SITE {det}, {det2}
      </div>
      <ul className='nav_list text-sm'>
        <li> <Link to="/">           HOME</Link></li>
        <li> <Link to="/login">      LOG_IN</Link>   </li>
        <li> <Link to="/register">   REGISTER</Link> </li>
        <li> <Link to="/imps">       IMPS</Link> </li>

      </ul>

    </div>
  )
}

export default Navbar
