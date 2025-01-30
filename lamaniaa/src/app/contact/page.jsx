import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";
function Contact() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>

      <div className={styles.content}>

        <div className={styles.imageContainer}>
          <Image
            src="/contact.png"
            alt="contact"
            fill={true}
            className={styles.image}
          />
        </div>

        <form className={styles.form}>
          <input
          type="text"
          placeholder="name"
          className={styles.input}
          />
          <input
          type="email"
          placeholder="email"
          className={styles.input}
          />
          <textarea
          placeholder="message"
          className={styles.textarea}
          />
          <Button text="Send" url="/" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
