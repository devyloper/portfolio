import React from "react";
import styles from "../styles/Hero.module.css";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';



type Props = {};

export default function Hero({}: Props) {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_container}>
        <h1 className={styles.name}>
          <span>Devyanshu</span>
          <span> Jadon</span>
        </h1>
        <h6 className={styles.subheading}>Student Developer</h6>
        <div className={styles.social_container}>
           
            <GitHubIcon sx={{ fontSize: "42px" }} className={styles.githubIcon} />
            <LinkedInIcon sx={{ fontSize: "42px" }} className={styles.githubIcon} />
            <TwitterIcon sx={{ fontSize: "42px" }} className={styles.githubIcon} />
            <InstagramIcon sx={{ fontSize: "42px" }} className={styles.githubIcon} />
            <button className={styles.resume}>Resume</button>
        </div>
      </div>
    </div>
  );
}
