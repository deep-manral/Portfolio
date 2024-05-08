import React from 'react'
import bannerBackground from "../assets/banner.svg";
const Expertise = () => {
  return (
  <>
 <div className=''>
 
 <h1 className=' mb-6 text-4xl font-bold underline text-center'> My Expertise</h1>

    <div
      style={{ backgroundImage: `url(${bannerBackground})`,
      backgroundSize:"cover" }}
    className=' items-center box-container flex py-16 ' >
<div className=' text-white flex justify-center '>
   <div className='w-2/3 text-center space-y-4'>
   <h1 className='text-4xl font-bold '>I love this technologies</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel animi maxime aperiam nisi ex. Consequuntur.</p>
    <button className=' text-2xl px-4 py-2 bg-orange-500 rounded shadow-lg'>Hire Me</button>
    </div> 
    </div>
<div className='h-fit  space-x-3 flex justify-center'>
   <div className=' justify-center flex w-2/3  space-x-3 flex-wrap space-y-3 ' >
   <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400  cursor-pointer'>Core Java</p>
    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400 cursor-pointer'>Hibernate</p>
    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400 cursor-pointer'>Springboot</p>
    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400 cursor-pointer'>spring MVC</p>
    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400 cursor-pointer'>ReactJs</p>
    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400 cursor-pointer'>Spring Security</p>
    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400 cursor-pointer'>Tailwind CSS</p>
    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 cursor-pointer hover:bg-orange-400'>Nodejs</p>
    <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400 cursor-pointer'>Expressjs</p>
   <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400 cursor-pointer'>Mongodb</p>
   <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400'>SQL</p>
   <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400 cursor-pointer'>HTML</p>
   <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 hover:bg-orange-400 cursor-pointer'>CSS</p>
   <p className='bg-gray-300 w-fit px-3 py-2 rounded-full mt-1 cursor-pointer hover:bg-orange-400'>Javascript</p>
   </div>
   
   </div>
   </div>
   </div>
 
  

    


  </>
  )
}

export default Expertise
