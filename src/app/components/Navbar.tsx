"use client"
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react'
import Social from './Social'

type Props = {}

const Navbar = (props: Props) => {
    const [isOpen, setIsOpen] = useState(false);

  
  return (<div className='sticky top-0 z-999'>
    <div className='h-20 bg-[#091922] border-b-[0.5px] border-[#3a474e] flex justify-between sticky top-0 z-999' >
      <Link href={"/"}><div className='h-20 bg-[#16252d] flex w-[fit-content] border-b-[0.5px] border-r-[0.5px] border-[#3a474e] '>
        <h1 className='flex justify-center items-center p-8 text-[#c6e926]'>Devyanshu</h1>
      </div></Link>
        <ul className='text-[#ffffff] hidden lg:flex h-20 items-center'>
          <li className='w-[fit-content] px-8 flex h-20 justify-center items-center border-l-[0.5px] border-[#3a474e] hover:underline decoration-[#c6e926] underline-offset-8'><Link href="/" >Blog</Link></li>
          <li className='w-[fit-content] px-8 flex h-20 justify-center items-center border-l-[0.5px] border-[#3a474e] hover:underline decoration-[#c6e926] underline-offset-8'><Link href="/About" >About me</Link></li>
          <li className='w-[fit-content] px-8 flex h-20 justify-center items-center border-l-[0.5px] border-[#3a474e] hover:underline decoration-[#c6e926] underline-offset-8'><Link href="/" > Contact me</Link></li>
          <li></li>
        </ul>
        <div className='lg:hidden flex h-20 border-l-[0.5px] border-[#3a474e] px-8 py-8 justify-center items-center'>
        <FontAwesomeIcon onClick={()=>setIsOpen(!isOpen)} icon={faBars} className="text-[#c6e926]  text-[30px] w-[fit-content]  "/>
        </div>
      
    </div>
    <div  className={`${isOpen?`flex`:`hidden`} fixed z-44 bg-[#091922] w-[100vw]  flex-col h-[90vh] p-8 text-white  justify-center`}>
      <div className='p-8 text-[2rem] hover:underline decoration-[#c6e926] underline-offset-8 border-t-[0.5px] border-b-[0.5px] border-[#3a474e]'><Link href={"/"}>Home</Link></div>
      <div className='p-8 text-[2rem] hover:underline decoration-[#c6e926] underline-offset-8 border-b-[0.5px] border-[#3a474e]'><Link href={"/"}>Blog</Link></div>
      <div className='p-8 text-[2rem] hover:underline decoration-[#c6e926] underline-offset-8 border-b-[0.5px] border-[#3a474e]'><Link href={"/"}>About me</Link></div>
      <div className='p-8 text-[2rem] hover:underline decoration-[#c6e926] underline-offset-8 border-b-[0.5px] border-[#3a474e]'><Link href={"/"}>Contact me</Link></div>
      <div className='p-8 text-[2rem] hover:underline decoration-[#c6e926] underline-offset-8 border-b-[0.5px] border-[#3a474e]'><Social /></div>
    </div> 
    </div>
  )
}

export default Navbar