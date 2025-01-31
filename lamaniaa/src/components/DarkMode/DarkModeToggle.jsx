<<<<<<< HEAD
"use client"
import React, { useContext } from 'react'
import styles from './page.module.css'
import { ThemeContext } from '@/context/ThemeContext'

function DarkModeToggle() {
  // const mode = 'dark'
  const {mode,toggle} = useContext(ThemeContext)
    return (
    <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball} style={mode ==="dark" ? {left:0} : {right:0}}/>
=======

import React from 'react'
import styles from './page.module.css'

function DarkModeToggle() {
  
    return (
    <div className={styles.container} onClick={()=>{

    }}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div className={styles.ball}/>
>>>>>>> 5bd321c354a5e78f878fd7fecb379d4b60206187
    </div>
  )
}

export default DarkModeToggle