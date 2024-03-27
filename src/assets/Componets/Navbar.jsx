import React from 'react'
import { CgMenuGridO } from "react-icons/cg";
import imgProfile from "../images/unnamed.png"
function Navbar() {
  return (
    <div className='absolute top-5 right-0 flex items-center'>
        <a className='text-lg mr-3 hover:underline' href="#gmail">Gmail</a>
        <a href="#gmail" className='text-lg mr-3 hover:underline'>Images</a>
        <a href="#" className='text-3xl mx-3 cursor-pointer'><CgMenuGridO/></a>
        <img src={imgProfile} className='mr-4 w-10 h-10 rounded-full cursor-pointer' />
    </div>
  )
}

export default Navbar