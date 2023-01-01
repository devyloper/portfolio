import React from 'react'
import styles from '../styles/Contact.module.css'

type Props = {}

export default function Contact({}: Props) {
  return (
    <div className={styles.contact}>
        <h1 className={styles.contact_title}>Get In Touch!</h1>
        <h3 className={styles.contact_email}>devyanshujadon@acm.org</h3>
    </div>


  )
}