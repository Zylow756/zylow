import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import Footer from "../components/Footer/Footer";
import styles from "../assets/css/Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.rootImage}>
      <Nav />

      <main className={styles.content}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;