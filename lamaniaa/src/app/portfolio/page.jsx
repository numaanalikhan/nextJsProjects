import Link from 'next/link'
import React from 'react'
import styles from './portfolio.module.css'
function Portfolio() {
  return (
    <div className={styles.container}>

      <h2 className={styles.subTitle}>Choose a gallery</h2>
      
      <div className={styles.items}>
      
        <Link
<<<<<<< HEAD
        href={"/portfolio/illustrations"}
=======
        href={"/portfolio/illustraion"}
>>>>>>> 5bd321c354a5e78f878fd7fecb379d4b60206187
         className={styles.item}>
          <span className={styles.title}>
            Illustration
            </span>
         </Link>

        <Link
        href={"/portfolio/websites"}
         className={styles.item}>
          <span className={styles.title} 
          >Websites
          </span>
         </Link>

        <Link
<<<<<<< HEAD
        href={"/portfolio/applications"}
=======
        href={"/portfolio/applicaions"}
>>>>>>> 5bd321c354a5e78f878fd7fecb379d4b60206187
         className={styles.item}>
          <span className={styles.title}>
            Applications
            </span>
         </Link>
      
      </div>
    </div>
  )
}

export default Portfolio