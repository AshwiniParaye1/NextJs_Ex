import React from "react";
import styles from "../styles/Nav.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <div className={styles.main}>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
