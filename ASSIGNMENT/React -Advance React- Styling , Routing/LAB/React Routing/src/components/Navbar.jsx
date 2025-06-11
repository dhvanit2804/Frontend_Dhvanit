import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav className='bg-gray-800 p-4'>
            <ul>
                <li className='inline-block mr-4'>
                    <a href="/" className='text-white hover:text-gray-400'>Home</a>
                </li>
                <li className='inline-block mr-4'>
                    <a href="/about" className='text-white hover:text-gray-400'>About</a>
                </li>
                <li className='inline-block'>
                    <a href="/contact" className='text-white hover:text-gray-400'>Contact</a>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar