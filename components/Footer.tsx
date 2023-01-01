import React from 'react'
import styles from '../styles/Footer.module.css'
type Props = {}

export default function h1
({}: Props) {
  return (
    <div className={styles.footer}>
       <div className={styles.footer_links}>
       <ul>
            <li>Links</li>
            <li>Resume</li>
            <li>Certifications</li>
            <li>Timeline</li>
        </ul>
       </div>
       <div className={styles.footer_cc}>
        <h3 className={styles.footer_copyright}>©Devyloper | 2022</h3>
       </div>
    </div>
  )
}