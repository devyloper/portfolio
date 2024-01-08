import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='flex h-[18vh] bg-[#000]   mx-[2rem] md:mx-[10rem] lg:mx-[10rem] border-x-[0.5px] border-[#29373f] p-[] items-center justify-around'>
        <div className='flex gap-5'>
            <Link href="https://twitter.com/DevyanshuJadon"><h1 className='font-poppins text-sm font-semibold tracking-widest'>Twitter</h1></Link>
            <Link href="https://github.com/devyloper"><h1 className='font-poppins text-sm font-semibold tracking-widest'>GitHub</h1></Link>
            <Link href="https://www.linkedin.com/in/devyanshu-jadon/"><h1 className='font-poppins text-sm font-semibold tracking-widest'>LinkedIn</h1></Link>
            <Link href="mailto:jadon.devyanshu@gmail.com"><h1 className='font-poppins text-sm font-semibold tracking-widest'>Mail</h1></Link>
        </div>
        <div className='flex'>
            <h1 className='font-poppins text-sm font-thin tracking-widest cursor-pointer'>© 2023 Devyanshu Jadon. All rights reserved.</h1>
        </div>
    </div>
  )
}

export default Footer