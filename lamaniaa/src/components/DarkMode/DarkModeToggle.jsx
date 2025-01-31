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
    </div>
  )
}

export default DarkModeToggle