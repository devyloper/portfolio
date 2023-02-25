import React from 'react'
import styles from '../styles/About.module.css'
import Image from 'next/image'
import Headshot from '../public/headshot.jpg'

type Props = {}

export default function About({}: Props) {
  return (
    <div className={styles.about}>
        <Image 
            src={Headshot}
            className={styles.headshot}
            alt="Picture of the author"
        />
    </div>
  )
}