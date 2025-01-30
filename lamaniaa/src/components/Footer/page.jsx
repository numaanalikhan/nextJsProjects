import React from "react";
import styles from "./page.module.css";

import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div>2025 copyrights resevers to LAMANIAA</div>
      <div className={styles.social}>
        <Image src="/1.png" alt="Facebook" width={15} height={15}  className={styles.icon}/>
        <Image src="/2.png" alt="Insta" width={15} height={15}  className={styles.icon}/>
        <Image src="/3.png" alt="Twitter" width={15} height={15}  className={styles.icon}/>
        <Image src="/4.png" alt="Youtube" width={15} height={15} className={styles.icon}/>
      </div>
    </div>
  );
}

export default Footer;
