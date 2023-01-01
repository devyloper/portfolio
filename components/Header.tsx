import React from "react";
import styles from '../styles/Header.module.css';
type Props = {};

export default function Header({}: Props) {
  return (
    <div className={styles.header}>
      <div className={styles.headerflex}>
        <div className={styles.logo}>
          <h1 className="">Devyanshu</h1>
        </div>
        <div className={styles.list}>
          <ul>
            <li>About Me</li>
            <li>Projects</li>
            <li>Blog</li>
            <li>Contact Me</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
