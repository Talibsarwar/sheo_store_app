import React, { useState } from 'react';
import Menu from './svg/bars-solid.svg';
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
                <div className="logo">
                    <h1><a to="/products">Nike Shoes</a></h1>
                </div>
                <ul style={styleMenu}>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/products">Products</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/login or register">Login / Register</Link></li>
                    <li onClick={toggleMenu}><img src={Close} alt="Close" width="30" className="menu" /></li>
                </ul>
                <div className="menu" onClick={toggleMenu}>
                    <img src={Menu} alt="Menu" width="30" />
                </div>
            </header>
        </div>
    )
}