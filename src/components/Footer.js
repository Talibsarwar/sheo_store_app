import React from 'react'
import {Link} from 'react-router-dom'
import Github from './svg/github-brands.svg';
import Linkedin from './svg/linkedin-brands.svg';


function Footer() {
    return (
        <footer className="mt-6 border-primary border-t-2 border-b-2 pb-6">
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full px-3 text-center md:text-left" >
                    <div className="">
                        <Link to="/" className="ml-3 text-4xl text-white font-bold">Nike<span className="text-primary">Shoes</span></Link>
                    </div>
                    <p className="text-white ml-3 mt-1">
                        This is an online shoe store of nike brand that has the most attractive designs.
                    </p>
                </div>
                <div className="w-full pt-6 text-center flex justify-center">
                    <ul className="text-white">
                        <li> <Link className="hover:text-primary  transition duration-500 " to="/"> Home </Link> </li>
                        <li> <Link className="hover:text-primary  transition duration-500 " to="/products">  Products</Link> </li>
                        <li> <Link className="hover:text-primary  transition duration-500 " to="/about">  About</Link> </li>
                        <li> <Link className="hover:text-primary  transition duration-500 " to="/contact">  Contact</Link> </li>
                        <li> <Link className="hover:text-primary  transition duration-500 " to="/registration">  Login / Register</Link> </li>
                    </ul>
                </div>
                <div className="w-full pt-6 text-center md:text-right flex md:flex-row justify-center">
                    <ul className="text-white">
                        <li><a href="https://www.linkedin.com/in/talib-sarwar-338417189/" target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="LinkedIn" width="30"/></a></li>
                        <li><a href="https://github.com/Talibsarwar" target="_blank" rel="noopener noreferrer"><img src={Github} alt="Github" width="30"/></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer