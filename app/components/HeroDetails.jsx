import React from 'react'
import { Nunito_Sans, Barlow } from "next/font/google";
import AboutButton from './AboutButton';
const nunitoSans = Nunito_Sans({
    
    subsets: ["latin"],
    variable: "--nunito-sans",
  });

const barlow = Barlow({
    weight: ["400", '700', '900', '800'], 
    subsets: ["latin"],
    variable: "--barlow", 
});



function HeroDetails() {
  return (
    <div className='flex px-[18rem] py-[12rem] flex-col'>
        <h3 className='pb-4 font-poppins text-sm font-bold tracking-widest text-zinc-600 dark:text-zinc-400  '>Hi, my name is </h3>
        <h1 style={barlow.style} className=' pb-4 text-5xl font-bold'>Devyanshu Jadon</h1>
        <h1 style={barlow.style} className={ `font-bold font-calsans pb-4 text-5xl bg-gradient-to-r from-[#3e70c8] to-[#d74d67] bg-clip-text text-transparent`}>I build things for the web.</h1>
        <p className='mt-4 mb-6 pl-1 text-base text-zinc-600 dark:text-zinc-400 md:my-6 animate-fade-in text-justify'>Hey everyone! 🎉 I'm a very cheerful final year undergrad student who fell in love with coding in Class 8. Currently juggling placement preparation and exploring the world of Full Stack Development. 🚀 It's a fun journey, and I can't wait to see what's next! 🌟 #CodingEnthusiast  #FullStackDeveloper</p>
        <AboutButton /> 
    </div>
  )
}

export default HeroDetails
