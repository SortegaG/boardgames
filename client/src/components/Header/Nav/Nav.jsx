import React from "react";
import { Link } from 'react-router-dom'


const Nav = () => {
  return <nav>
    <ul className='nav.generic'>
      <li className="nav-link active">Home</li>
      {/* <li className="nav-link active"><Link to='/list'>Christmas list</Link></li>
      <li className="nav-link "><Link to='/contact'>Contact</Link></li>
      <li className="nav-link " > <Link to='/staff'>Staff</Link></li >
      <li className="nav-link " > <Link to='/topic'>Topic</Link></li > */}
    </ul >
  </nav>;
};

export default Nav;
