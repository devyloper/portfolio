import React from 'react'
import { CiLight } from "react-icons/ci";
import { BsMoonStars } from "react-icons/bs";
import { ThemeProvider } from 'next-themes'
import { useState } from 'react';
function ThemeButton() {
  const [mounted, setMounted] = useState(false)

  return (
    <div>
        
       <CiLight /> 
       <BsMoonStars />
    </div>
  )
}

export default ThemeButton