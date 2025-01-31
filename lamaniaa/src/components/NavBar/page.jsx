"use client"

import Link from "next/link";
import React from "react";
import styles from "./page.module.css"
import Button from "../Button/Button";
import DarkModeToggle from "../DarkMode/DarkModeToggle";
function NavBar() {
  const navList = [
    {
      id: 0,
      url: "/",
      title: "Home",
    },
    {
      id: 1,
      url: "/portfolio",
      title: "Portfolio",
    },
    {
      id: 2,
      url: "/blog",
      title: "Blog",
    },
    {
      id: 3,
      url: "/about",
      title: "About",
    },
    {
      id: 4,
      url: "/contact",
      title: "Contact",
    },
    {
      id: 5,
      url: "/dashboard",
      title: "Dashboard",
    },
  ];

  return (
    <div className={styles.container}>

        <Link href="/" className={styles.logo}>lamania</Link>
     
      <div className={styles.links}>
        <DarkModeToggle/>
        {navList.map((list) => {
          return (
            <Link href={list.url} key={list.id} className={styles.link}>
              {list.title}
            </Link>
          );
        })}
        
        <Button text="logout" url="/"/>
      </div>
    </div>
  );
}

export default NavBar;
