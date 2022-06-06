import React from 'react'

const Newsletter = () => {
  return (
    <div id='contact' className='w-full bg-[#040a0e] py-28'>
        <div className='max-w-[1240px] mx-auto block lg:flex items-center px-4'>
            <div className='w-full lg:w-7/12 items-center'>
                <h1 className='text-white text-3xl font-bold'>Want tips &amp; tricks to optimize your flow?</h1>
                <p className='text-slate-300 text-base py-2'>Sign up to our newsletter and stay up to date.</p>
            </div>

            <div className='w-full mt-20 lg:mt-0 lg:w-5/12'>
                <div className='flex flex-col md:flex-row md:space-x-2'>
                    <input className='py-2 px-4 rounded-lg max-w-[300px]' type="email" placeholder='Enter Email' />
                    <button className='text-white md:mt-0 mt-2 max-w-[120px] bg-cyan-500 hover:bg-cyan-600 font-semibold py-2 px-4 rounded-lg'>Notify me</button>
                </div>
                <p className='text-white py-2 w-10/12'>We care about the protection of your data. Read our <span className='text-cyan-500 underline'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter