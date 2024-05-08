import React, { useState } from 'react'

const Services = () => {
    useState([
        {
            id:"",
            title:"",
            description:"",
           actionButton:{
            title:"",
            link:""
           },
        },
    ]

    );
  return (
   <>
  <div className='main container py-14'>
    <h1 className='text-4xl font-bold text-center underline'>My Services </h1>
<div className="services-container flex mt-10 space-x-4 px-5 ">
    <div className=' cursor-pointer hover:bg-gray-100 p-5 text-center shadow-lg rounded-xl service1 space-y-4 bg-slate-200 '> 
    <i class="text-5xl fa-brands fa-webflow"></i>

        <h1 className='text-4xl'>Frontend Development</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita facere odit molestias eligendi sint distinctio nemo sed quis commodi.</p>
        <button className='px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg '> Check</button>
    
    </div>
    <div className='  cursor-pointer hover:bg-gray-100 space-y-4 shadow-lg rounded-xl bg-slate-200 p-5 text-center'>

    <i class="text-5xl fa-solid fa-server"></i>
    <h1 className='text-4xl'>Springboot Development</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita facere odit molestias eligendi sint distinctio nemo sed quis commodi.</p>
        <button className='px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg '> Check</button>
    </div>
    <div className=' hover:bg-gray-100 cursor-pointer hover: space-y-4 shadow-lg rounded-xl bg-slate-200 p-5 text-center'>
    <i class="text-5xl fa-brands fa-aws"></i>

    <h1 className='text-4xl'>Mern stack  Development</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus expedita facere odit molestias eligendi sint distinctio nemo sed quis commodi.</p>
        <button className='px-3 py-2 text-2xl bg-orange-500 rounded-full shadow-lg '> Check</button>
    </div>
</div>
  </div>
   </>
  )
}

export default Services
