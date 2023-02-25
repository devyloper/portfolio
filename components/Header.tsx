import React from "react";
import styles from '../styles/Header.module.css';
import Link from 'next/link';


type Props = {};

export default function Header({}: Props) {
  return (
    <div className={styles.header}>
      <div className={styles.headerflex}>
        <div className={styles.logo}>
          <h1 className=""><Link href="/">Devyanshu</Link></h1>
        </div>
        <div className={styles.hamburger}>
          
         
        </div>
        <div className={styles.list}>

          <ul>
            <li><Link href="/about">About Me</Link></li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
