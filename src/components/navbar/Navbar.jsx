import React, { useEffect, useState } from 'react'
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";

import { TbMenu2,TbMenu3 } from "react-icons/tb";

import { IoSearch } from "react-icons/io5";
const Navbar = () => {
  const [showMenu,setShowMenu]=useState(false)
  const [isScroll,setIsScroll]=useState(false)
  const toggleMenu =()=>{
    setShowMenu(!showMenu)
  }
  useEffect(()=>{
const handleScroll = ()=>{
  setIsScroll(window.scrollY >10)
}
window.addEventListener('scroll',handleScroll)
return ()=> window.removeEventListener('scroll', handleScroll)
  },[])

  return (
      <header className={`bg-white fixed top-0 left-0 right-0 z-50 ${isScroll ? 'drop-shadow-[0_4px_25px_rgba(0,0,0,0.1)]':''}`}>
        <nav className='max-w-[1400px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>
          {/* Logo */}
          <a href="#" className='text-3xl font-bold'>
            Gr<span className='text-orange-500 uppercase'>o</span>cify
          </a>

          {/* Desktop Menu */}
          <ul className='md:flex items-center gap-x-15 hidden'>
            <li><a href="#" className='font-semibold tracking-wider text-orange-500 ' >Home</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>about us</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>
          </ul>


          {/* Nav Action */}
          <div className='flex items-center gap-x-5'>
            {/* input field */}
            <div className='md:flex hidden p-1 border-2 border-orange-500 rounded-full '>
              <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-0'/>
              <button className='bg-gradient-to-b from-orange-400 to-orange-500 rounded-full w-10 h-10 flex justify-center items-center text-xl text-white'>
                  <IoSearch />
              </button>
            </div>
            <a href="" className='text-zinc-800 text-2xl'>
              <GoHeartFill />
            </a>
            <a href="" className='text-zinc-800 text-2xl'>
              <HiShoppingBag />
            </a>

            {/* Hamburger */}
            <a href="#" className='text-zinc-800 text-3xl md:hidden ' onClick={toggleMenu}> 
                {showMenu ? <TbMenu3 />:<TbMenu2 /> }
            </a>
          </div>

          {/* Mobile Menu */}
          <ul className={`md:hidden items-center flex flex-col gap-y-12 gap-x-15 bg-orange-500/15 backdrop-blur-xl shadow-xl rounded-xl p-10 absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ''}`}>
            <li><a href="#" className='font-semibold tracking-wider text-orange-500 ' >Home</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>about us</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a></li>
            <li><a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a></li>

            <li className='flex md:hidden p-1 border-2 border-orange-500 rounded-full '>
              <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-0'/>
              <button className='bg-gradient-to-b from-orange-400 to-orange-500 rounded-full w-10 h-10 flex justify-center items-center text-xl text-white'>
                  <IoSearch />
              </button>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Navbar