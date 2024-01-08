'use client';
import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import ThemeButton from "./ThemeButton";
import { Poppins } from "next/font/google";
import { usePathname } from 'next/navigation'

const poppins = Poppins({
  weight: ["400", '700', '900', '800'], 
  subsets: ["latin"],
  variable: "--poppins", 
  });
const Nav = () => {
  const pathname = usePathname()
  
  
  return (
    <div className="relative flex justify-around top-5  origin-center m-auto">
     
        <div className="flex fixed gap-[22rem] ">
          <div className="flex">
            <Logo />
          </div>
          <div>
          <ul style={poppins.style} className="font-medium flex gap-5 border-[1.5px] border-[#29373f] text-sm font-poppins  px-6 py-2 rounded-full bg-gray-0 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 ">
            <li className=""><Link href="/" className={`link ${pathname === '/' ? 'text-[#4d74bb]' : 'hover:text-[#3267ca]'}`}>Home</Link></li>
            <li><Link href="/about" className={`link ${pathname === '/about' ? 'text-[#4d74bb]' : 'hover:text-[#3267ca]'}`}>About</Link></li>
            <li><Link href="/" className={`link ${pathname === '/blog' ? 'text-[#4d74bb]' : 'hover:text-[#3267ca]'}`}>Blog</Link></li>
            <li><Link href="/" className="hover:text-[#3267ca]">Twitter</Link></li>
          </ul>
          </div>
          <div className="flex my-2">
            <ThemeButton />
          </div>
        </div>
      
    </div>
  );
};

export default Nav;
