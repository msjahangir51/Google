import React from 'react'

import google from "../images/google.png"
import { CiSearch } from "react-icons/ci";
import { IoMic } from "react-icons/io5";
import { MdImageSearch } from "react-icons/md";
function Egnine() {
  return (
    <div className='lg:w-[50%] md:w-[60%] sm:w-[70%] w-[80%] translate-y-[8rem] flex flex-col items-center'>
        <img src={google} alt="" className='lg:w-{24rem] md:w-[15rem] w-[12rem] mb-[3rem]'/>

        <div className="w-full flex items-center h-10 rounded-full shadow-sm ring-4 ring-gray-700/10 hover:ring-gray-700/10 px-3 py-2">
            <CiSearch size={22} className='cursor-pointer mr-3'/>
            <input type="text" className='w-full h-full border-none outline-none'/>
            <IoMic size={28} className='m-2 cursor-pointer'/>
            <MdImageSearch size={26} className='m-2 cursor-pointer'/>
        </div>
        <div className='flex mt-11'>
            <a href='#' className='sm:text-base text-[0.8rem] mr-5'>Google Search</a>
            <a href="#" className='sm:text-base text-[0.8rem] ml-5'>I'm Feeling Lucky</a>
        </div>
    </div>
  )
}

export default Egnine