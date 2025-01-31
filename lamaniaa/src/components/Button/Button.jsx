<<<<<<< HEAD
=======
import React from 'react'
>>>>>>> 5bd321c354a5e78f878fd7fecb379d4b60206187
import styles from "./button.module.css"
import Link from 'next/link'
function Button({text,url}) {
  return (
    <Link href={url}>
    <button className={styles.container}>
        {text}
    </button>
    </Link>
)
}

export default Button