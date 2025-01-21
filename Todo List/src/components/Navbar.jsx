import React from 'react';
import './Navbar.css'
import Logo from  '../assets/logo.png';


const Navbar = () => {
    return (
        <>
            <div className="nav">
                <div className="Logo">
                    <a href="#"><img src={Logo} alt="Logo" className='logo' /></a>
                </div>
                <div className="nav">
                    <ul>
                        <li className="nav-list">
                            <a href="#" className='active'>Home</a>
                        </li>
                        <li className="nav-list">
                            <a href="#">Something</a>
                        </li>
                        <li className="nav-list">
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;