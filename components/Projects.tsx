import React from "react";
import styles from "../styles/Projects.module.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro";
type Props = {};

export default function ({}: Props) {
  return (
    <div className={styles.projects}>
      <h1 className={styles.project_heading}>
        Projects and Experiences {">>>"}
      </h1>

      <>
        <h1 className={styles.rusty}>
          {"--"} Getting a little Rusty these days!
        </h1>
        <p className={styles.rusty_para}>
          Yes! I am learning Rust right now. Rust is more inclined to security
          and used for system programming. <br /> My main goal I want to achieve
          by learning Rust is that I want to work on WASM {"(Web Assembly)"}{" "}
          <br />
          related projects and contribute to such opensource projects.
        </p>
      </>
      <>
        <h1 className={styles.experience}>
          {"--"} Checkout some of my experiences and achievements:
        </h1>
        <div className={styles.exp_card_group}>
          <div className={styles.exp_card}>GDSC</div>
          <div className={styles.exp_card}>IBM Z</div>
          <div className={styles.exp_card}>Badges</div>
        </div>
      </>
      <>
        <h1 className={styles.experience}>
          {"--"} And if you're not done yet, take a look at my projects:
        </h1>
        <div className={styles.exp_buttons}>
          <div className={styles.exp_button}>
            <div>Projects</div>
          </div>
          <div className={styles.exp_button}>
            <div>Blogs</div>
          </div>
        </div>
      </>
    </div>
  );
}
