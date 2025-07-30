import React from 'react'

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
                    <li><a href="#" className='hover:text-emerald-900'>Home</a></li> 
                    <li><a href="#" className='hover:text-emerald-900'>About</a></li>
                    <li><a href="#" className='hover:text-emerald-900'>Product</a></li>
                    <li><a href="#" className='hover:text-emerald-900'>Other Page</a></li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar