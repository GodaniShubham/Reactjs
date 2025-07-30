import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='w-full flex bg-blue-500  justify-around py-2'>
            <div className="left text-2xl">
                <a href="#">
                    Logo Example
                </a>
            </div>
            <div className="right">
                <ul className='flex gap-3 text-2xl'>
                    <li><Link to='/' className='hover:text-emerald-900'>Home</Link></li> 
                    <li><Link to='/About' className='hover:text-emerald-900'>About</Link></li>
                    <li><Link to='/Product' className='hover:text-emerald-900'>Product</Link></li>
                    <li><Link to='/Other' className='hover:text-emerald-900'>Other Page</Link></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar