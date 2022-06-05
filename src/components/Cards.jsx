import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full bg-white text-slate-900 py-32'>
        <div className='max-w-[1240px] mx-auto px-4 grid md:grid-cols-3 gap-10'>
            {/* card */}
            <div className='w-full shadow-xl hover:scale-105 duration-500 bg-slate-100 rounded-md py-5 px-4 flex flex-col'>
                <img className='w-24 mx-auto py-4' src={Single} alt="/" />
                <h2 className='text-2xl text-center font-bold py-5'>Single User</h2>
                <p className='text-4xl text-center font-bold'>$175</p>
                <div className='text-center font-medium mt-6 mb-3'>
                    <p className='py-2 border-b'>500 GB Storage</p>
                    <p className='py-2 border-b'>1 User Allowed</p>
                    <p className='py-2 border-b'>Send up to 2 GB</p>
                </div>
                <button className='bg-cyan-500 hover:bg-cyan-600 font-bold py-2 px-4 text-white rounded-lg w-48 mx-auto'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl hover:scale-105 duration-500 bg-gray-200 rounded-md py-5 px-4 flex flex-col'>
                <img className='w-24 mx-auto py-4' src={Double} alt="/" />
                <h2 className='text-2xl text-center font-bold py-5'>Single User</h2>
                <p className='text-4xl text-center font-bold'>$245</p>
                <div className='text-center font-medium mt-6 mb-3'>
                    <p className='py-2 border-b'>1 TB Storage</p>
                    <p className='py-2 border-b'>3 User Allowed</p>
                    <p className='py-2 border-b'>Send up to 10 GB</p>
                </div>
                <button className='text-cyan-500 font-bold py-2 px-4 bg-[#040a0e] w-48 rounded-lg hover:bg-[#282828] mx-auto'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl hover:scale-105 duration-500 bg-slate-100 rounded-md py-5 px-4 flex flex-col'>
                <img className='w-24 mx-auto py-4' src={Triple} alt="/" />
                <h2 className='text-2xl text-center font-bold py-5'>Single User</h2>
                <p className='text-4xl text-center font-bold'>$358</p>
                <div className='text-center font-medium mt-6 mb-3'>
                    <p className='py-2 border-b'>5 TB Storage</p>
                    <p className='py-2 border-b'>10 User Allowed</p>
                    <p className='py-2 border-b'>Send up to 50 GB</p>
                </div>
                <button className='bg-cyan-500 hover:bg-cyan-600 font-bold py-2 px-4 text-white rounded-lg w-48 mx-auto'>Start Trial</button>
            </div>
        </div>  
    </div>
  )
}

export default Cards