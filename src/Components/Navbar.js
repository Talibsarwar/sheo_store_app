import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Components/Navbar.css';

function NavBar() {

  return (
	<div className="Navbar">
        <Link to="/" className = {styles.Link}> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/product"> Product </Link>
	</div>
  );
}

export default NavBar;