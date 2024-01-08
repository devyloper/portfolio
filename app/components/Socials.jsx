import React from 'react'
import Link from 'next/link'
import { FaXTwitter } from "react-icons/fa6";


function Socials() {
  return (
    <div className='mx-8 flex flex-col'>
      <Link href="https://twitter.com/DevyanshuJadon" className='flex gap-8 items-center py-4 text-zinc-400 hover:text-[#3f6fc7] hover:scale-105 transition duration-250 ease-in-out font-bold mx-4'><FaXTwitter /><h3 className=' text-sm '>DevyanshuJadon</h3></Link>
      <Link href="https://github.com/devyloper" className='flex gap-8 items-center py-4 text-zinc-400 hover:text-[#3f6fc7] hover:scale-105 transition duration-250 ease-in-out font-bold mx-4'><FaXTwitter /><h3 className=' text-sm '>Devyloper</h3></Link>
      <Link href="https://www.linkedin.com/in/devyanshu-jadon/" className='flex gap-8 items-center py-4 text-zinc-400 hover:text-[#3f6fc7] hover:scale-105 transition duration-250 ease-in-out font-bold mx-4'><FaXTwitter /><h3 className=' text-sm '>devyanshu-jadon</h3></Link>
      <br />
      <div className='flex justify-center'><div className='w-[30%] text-[#29373f]  border-t'></div></div>
      <br />
      <Link href="mainto:jadon.devyanshu@gmail.com" className='flex gap-8 items-center py-4  text-zinc-400 hover:text-[#3f6fc7] hover:scale-105 transition duration-250 ease-in-out font-bold mx-4'><FaXTwitter /><h3 className=' text-sm '>jadon.devyanshu@gmail.com</h3></Link>
    </div>
  )
}

export default Socials