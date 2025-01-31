import React from "react";
import styles from './page.module.css'
import Image from "next/image";
function Blog() {
  return (
   <> <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
        src='https://images.pexels.com/photos/30429869/pexels-photo-30429869/free-photo-of-elderly-shepherd-with-walking-stick-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        width={400}
        height={250}
        alt='blog'
        className={styles.img}
        />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure
          cumque harum voluptas nulla nisi voluptates voluptatem ex magnam nam!
          Optio similique blanditiis culpa consequatur minus, suscipit
          exercitationem doloremque tenetur?
        </p>
      </div>
    </div>


<div className={styles.container}>
<div className={styles.imageContainer}>
  <Image
  src='https://images.pexels.com/photos/30429869/pexels-photo-30429869/free-photo-of-elderly-shepherd-with-walking-stick-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  width={400}
  height={250}
  alt='blog'
  className={styles.img}
  />
</div>

<div className={styles.contentContainer}>
  <h1 className={styles.title}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </h1>
  <p className={styles.desc}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure
    cumque harum voluptas nulla nisi voluptates voluptatem ex magnam nam!
    Optio similique blanditiis culpa consequatur minus, suscipit
    exercitationem doloremque tenetur?
  </p>
</div>
</div>


<div className={styles.container}>
<div className={styles.imageContainer}>
  <Image
  src='https://images.pexels.com/photos/30429869/pexels-photo-30429869/free-photo-of-elderly-shepherd-with-walking-stick-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  width={400}
  height={250}
  alt='blog'
  className={styles.img}
  />
</div>

<div className={styles.contentContainer}>
  <h1 className={styles.title}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </h1>
  <p className={styles.desc}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure
    cumque harum voluptas nulla nisi voluptates voluptatem ex magnam nam!
    Optio similique blanditiis culpa consequatur minus, suscipit
    exercitationem doloremque tenetur?
  </p>
</div>
</div>


<div className={styles.container}>
<div className={styles.imageContainer}>
  <Image
  src='https://images.pexels.com/photos/30429869/pexels-photo-30429869/free-photo-of-elderly-shepherd-with-walking-stick-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  width={400}
  height={250}
  alt='blog'
  className={styles.img}
  />
</div>

<div className={styles.contentContainer}>
  <h1 className={styles.title}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
  </h1>
  <p className={styles.desc}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui iure
    cumque harum voluptas nulla nisi voluptates voluptatem ex magnam nam!
    Optio similique blanditiis culpa consequatur minus, suscipit
    exercitationem doloremque tenetur?
  </p>
</div>
</div></>
  );
}

export default Blog;
