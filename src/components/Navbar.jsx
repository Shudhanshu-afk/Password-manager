import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-gray-900 flex justify-between p-5 text-white'>
        <div className='logo font-extrabold'>Passop</div>
        <ul>
            <li className='flex gap-3'>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
