import React from "react";
import styles from "../styles/IndexPage.module.css";

export default function RootPage({ children }) {
  return (
    <React.Fragment>
      <a href="#main-content" className="skip-link">
        Skip to Main Content
      </a>
      <header></header>
      <main>
        <h1 className={styles[`title`]}>
          This is a test!!! Next Project!!! Let's Go!!!
        </h1>
      </main>
    </React.Fragment>
  );
}
