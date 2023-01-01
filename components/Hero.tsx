import React from 'react'
import styles from '../styles/Hero.module.css'
import Image from "next/image";
import herosvg from "../public/herosvg.png"
type Props = {}

export default function Hero({}: Props) {
  
  return (
    <div className={styles.hero}>
        <div className={styles.hero_container}>
        <h1 className={styles.name}>
            <span>Devyanshu</span>
            <span> Jadon</span>
        </h1>
        <h6 className={styles.subheading}>Student Developer</h6>
        
        </div>
        
        <Image className={styles.herosvg}
          src={herosvg}
          alt="Picture of the author"
          width="350"
          height="300"
        />
        
    </div>
  )
}


























