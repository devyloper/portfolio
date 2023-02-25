import React from 'react'
import styles from '../styles/Footer.module.css'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub';

type Props = {}

export default function h1
({}: Props) {
  return (
    <div className={styles.footer}>
       <div className={styles.footer_link_cr}>
       <div className={styles.footer_links}>
  
       <ul>
            <li>Links</li>
            <li>Resume</li>
            <li>Certifications</li>
            <li>Timeline</li>
        </ul>
       </div>
       <div className={styles.footer_cr}>
        <h3 className={styles.footer_copyright}>©Devyloper | 2022</h3>
       </div>
       </div>
       <div className={styles.socials}>
       <div className={styles.socialsparent}>
       </div>
       </div>
    </div>
  )
}
