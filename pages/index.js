import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "./Header/Header";
import Register from "./Register/Register";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
export default function Home() {
  const [logged, isloggedin] = useState("false");

  return (
    <div className={styles.container}>
      <Header />
      <Register />
      <Footer />
    </div>
  );
}
