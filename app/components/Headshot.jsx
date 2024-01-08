import React from 'react'
import Image from 'next/image'

function Headshot() {
  return (
    <Image
      src="/head.png"
      width={1080}
      height={1080}
      alt="Picture of the author"
      className=' w-[20rem] m-4 hover:scale-105 transition duration-250 ease-in-out '
    />
  )
}

export default Headshot