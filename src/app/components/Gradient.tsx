import React from 'react'
import Image from 'next/image'
type Props = {}

const Gradient = (props: Props) => {
  return (
    <Image alt='Gradient' src={"/mesh.png"} className='lg:h-[100vh] lg:w-[30vw] md:h-[40vh] md:w-[100vw] sm:h-[40vh] sm:w-[100vw] h-[40vh] w-[100vw] object-cover' width={100} height={100}>
        
    </Image>
  )
}

export default Gradient