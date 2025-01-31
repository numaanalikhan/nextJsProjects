import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Button/Button";
import Image from "next/image";
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
          <Button url="#" text="See More"/>
        </div>

        <div className={styles.imageContainer}>
          <Image
          src={item.image}
          fill={true}
          className={styles.img}
          />
        </div>
      </div>
          
        )
      })}

    </div>
  );
}

export default Category;
