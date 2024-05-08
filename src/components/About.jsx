import React, { useState } from 'react'
import bannerImage from '../assets/potfol1.jpg'
const About = () => {
   const [data,setData]= useState({
        image:bannerImage,
        title:"Java Developer and Mern stack Developer",
        desc1:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab eos ea doloremque aperiam optio odio. Obcaecati id eaque atque`,
        des2:`Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab eos ea doloremque aperiam optio odio. Obcaecati id eaque atque`,
        actionButton:{
            title:"Read More...",
link:"/readmore"
        }
    })
  return (
 <>
<div className="main-container py-16 shadow-lg bg-gray-200">
    <h1 className='text-center pb-16 text-4xl underline font-bold '>About Me </h1>
<div className='main flex items-center'>

    <div className='w-full flex justify-center '>
<img className='w-fit rounded-full' src={data.image} alt="Deepak Manral"></img>
    </div>
    <div className='w-full border  flex justify-center'>
     <div className='space-y-5   w-2/3'>
     <h1 className='text-4xl font-semibold   '>{data.title}</h1>
       <p>{data.desc1} </p>
       <p>{data.desc2}</p>

       <button className='bg-orange-500 px-3 py-2 text-2xl rounded-full shadow-lg'>{data.actionButton.title}</button>
     </div>
    </div>

</div>
</div>
 </>
  )
}

export default About
