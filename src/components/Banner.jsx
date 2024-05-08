
import React, { useEffect, useRef } from 'react';
import bannerImage from "../assets/potfol2.jpg";
import bannerBackground from "../assets/banner.svg";
import Typed from 'typed.js';

const Banner = () => {
    const el=useRef(null);
    useEffect(()=>{
const typed=new Typed(el.current,{
strings:["Frontend developer","Springboot developer","Mern Stack developer"],
startDelay:100,
typeSpeed:60,
backSpeed:50,
backDelay:10,
loop:true,
});
return ()=>{
    typed.destroy();
};
    },[])
  return (
    <>
   
      <div 
        style={{ backgroundImage: `url(${bannerBackground})`,
        backgroundSize:"cover" }}
      className='main-container flex h-fit'>
        <div className='w-full items-center flex justify-center mt-20 text-white'>
          <div
        

           className='w-2/3 ms-10'>
            <h3 className='text-3xl font-semibold'>Hi, I am </h3>
            <h1 className='mt-3 text-5xl font-bold'>Deepak Manral</h1>
            <h2 className="mt-3 text-3xl">And I am a <span className="font-bold underline"ref={el}></span></h2>
            <p className='mt-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt commodi voluptates quibusdam nisi. Consequuntur saepe veniam libero dolorum ratione reprehenderit!</p>

          <div className='icons-container flex space-x-5'>
          
<div className='px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800'>
    <a className=" hover:bg-orange-600 cursor-pointer fab fa-facebook text-4xl"></a>
</div>
<a className='border hover:bg-orange-600 cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800'>
    <i className="fab fa-instagram text-4xl"></i>
</a>
<a className='border hover:bg-orange-600 cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800'>
    <i className="fab fa-youtube text-4xl"></i>
</a>
<a className='border hover:bg-orange-600 cursor-pointer px-3 py-4 w-12 h-12 rounded-full flex justify-center items-center bg-gray-800'>
    <i className="fab fa-linkedin text-4xl"></i>
</a>

      
          </div>
          <br />
            <a className="text-xl px-3 py-2 bg-orange-500 rounded-full shadow-lg" href="/contact">Contact Me</a>
          </div>
          <div className=' w-full flex justify-center'>
            <img className="m-y-2 rounded-full shadow" src={bannerImage} alt="Banner"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
