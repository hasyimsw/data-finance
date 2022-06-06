import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div id='company' className='bg-white w-full text-slate-900 py-32'>
        <div className='max-w-[1240px] mx-auto px-4 grid md:grid-cols-2 md:gap-0 items-center'>
            <img className='my-4' src={Laptop} alt="/" />

            <div>
                <p className='text-lg font-bold text-cyan-500 uppercase'>data analytics dashboard</p>
                <h1 className='text-3xl font-bold text-slate-800'>Manage Data Analytics Centrally</h1>
                <p className='text-slate-500 mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae consequuntur hic saepe voluptatum consequatur quisquam. Necessitatibus, sed enim? Delectus consequuntur vitae quaerat impedit, asperiores beatae? Repellendus nesciunt at molestias culpa.</p>
                <button className="text-cyan-500 font-semibold py-2 px-4 bg-[#040a0e] w-48 mx-auto mt-7 rounded-lg hover:bg-[#282828]">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics