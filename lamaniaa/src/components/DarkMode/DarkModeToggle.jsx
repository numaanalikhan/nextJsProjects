
import React from 'react'
import styles from './page.module.css'

function DarkModeToggle() {
  
    return (
    <div className={styles.container} onClick={()=>{

    }}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball}/>
    </div>
  )
}

export default DarkModeToggle