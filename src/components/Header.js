import React, { useState } from 'react';
import Menu from './svg/bars-solid.svg';
import CartIcon from './svg/shopping-cart-solid.svg';
import Close from './svg/times-solid.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    const [menu, setMenu] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <div>
            <header>
                <div className="menu" onClick={toggleMenu}>
                    <img src={Menu} alt="Menu" width="30" />
                </div>
                <div className="logo">
                    <h1><a href="/products">Nike Shoes</a></h1>
                </div>
                <ul style={styleMenu}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/login or register">Login / Register</Link></li>
                    <li onClick={toggleMenu}><img src={Close} alt="Close" width="30" className="menu" /></li>
                </ul>
                <div className="nav-cart">
                    <span>0</span>
                    <Link to="/cart">
                        <img src={CartIcon} alt="Cart Icon" width="30" />
                    </Link>
                </div>
            </header>
        </div>
    )
}