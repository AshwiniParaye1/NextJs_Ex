import React from "react";
import styles from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default Layout;
