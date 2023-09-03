import React from 'react'
import Social from './Social'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='bg-[#091922] h-[48vh] w-[100%]'>
        <div >
            <Social/>
        </div>
    </div>
  )
}

export default Footer