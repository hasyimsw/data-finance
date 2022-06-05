import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-900 text-white'>
      <div className='max-w-[1240px] h-20 mx-auto px-4 flex items-center justify-between'>
        <h1 className='text-3xl font-bold text-cyan-500'><a href="#home">REACT.</a></h1>
        <ul className='flex items-center space-x-8 font-semibold'>
          <li className='hover:text-cyan-500'>Home</li>
          <li className='hover:text-cyan-500'>Company</li>
          <li className='hover:text-cyan-500'>Resources</li>
          <li className='hover:text-cyan-500'>About</li>
          <li className='hover:text-cyan-500'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar