import React from 'react'
import Image from 'next/image'
import styles from "./page.module.css"
import Button from '@/components/Button/Button'
// import Hero from 'public/hero.png'
// the above way is temp not working
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better Design for your digital products</h1>
        <p className={styles.desc}>turning your idea into Really. We bring together the teams from the global tech indutry.</p>
        <Button text="See Our Works" url="/portfolio"/>
      </div>
      <div className={styles.item}>
      <Image className={styles.img} src="/hero.png" width={500} height={500 } alt='heroImg'/>
      </div>
    </div>
  )
}

export default Home