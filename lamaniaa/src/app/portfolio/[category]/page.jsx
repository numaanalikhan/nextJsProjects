import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
<<<<<<< HEAD
import { items } from "./data";
function Category({ params }) {
  const cat = items[params.category]
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{params.category}</h1>

      {cat.map((item)=>{
        return(
      <div className={styles.item} key={item.id}>
        <div className={styles.content}>
          <h1 className={styles.contentTitle}>{item.title}</h1>
          <p className={styles.contentDesc}>{item.desc}</p>
=======
function Category({ params }) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{params.category}</h1>
      <div className={styles.item}>

        <div className={styles.content}>
          <h1 className={styles.contentTitle}>Creative Portfolio</h1>
          <p className={styles.contentDesc}>
            lorem ipsum dolor, sit amet consectetur adipisicing elit, Pariatur
            vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
            ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
            fugiat tenetur?
          </p>
>>>>>>> 5bd321c354a5e78f878fd7fecb379d4b60206187
          <Button url="#" text="See More"/>
        </div>

        <div className={styles.imageContainer}>
          <Image
<<<<<<< HEAD
          src={item.image}
=======
          src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
>>>>>>> 5bd321c354a5e78f878fd7fecb379d4b60206187
          fill={true}
          className={styles.img}
          />
        </div>
      </div>
<<<<<<< HEAD
          
        )
      })}

=======

      <div className={styles.item}>

<div className={styles.content}>
  <h1 className={styles.contentTitle}>Creative Portfolio</h1>
  <p className={styles.contentDesc}>
    lorem ipsum dolor, sit amet consectetur adipisicing elit, Pariatur
    vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
    ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
    fugiat tenetur?
  </p>
  <Button url="#" text="See More"/>
</div>

<div className={styles.imageContainer}>
  <Image
  src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
  fill={true}
  className={styles.img}
  />
</div>
</div>



<div className={styles.item}>

<div className={styles.content}>
  <h1 className={styles.contentTitle}>Creative Portfolio</h1>
  <p className={styles.contentDesc}>
    lorem ipsum dolor, sit amet consectetur adipisicing elit, Pariatur
    vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
    ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
    fugiat tenetur?
  </p>
  <Button url="#" text="See More"/>
</div>

<div className={styles.imageContainer}>
  <Image
  src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
  fill={true}
  className={styles.img}
  />
</div>
</div>



<div className={styles.item}>

<div className={styles.content}>
  <h1 className={styles.contentTitle}>Creative Portfolio</h1>
  <p className={styles.contentDesc}>
    lorem ipsum dolor, sit amet consectetur adipisicing elit, Pariatur
    vel tenetur necessitatibus unde natus perspiciatis, amet cupiditate
    ducimus possimus, eaque ex autem id nobis eum dolorem. Neque eveniet
    fugiat tenetur?
  </p>
  <Button url="#" text="See More"/>
</div>

<div className={styles.imageContainer}>
  <Image
  src="https://images.pexels.com/photos/3130810/pexels-photo-3130810.jpeg"
  fill={true}
  className={styles.img}
  />
</div>
</div>
>>>>>>> 5bd321c354a5e78f878fd7fecb379d4b60206187
    </div>
  );
}

export default Category;
