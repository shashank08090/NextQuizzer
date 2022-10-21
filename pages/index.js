import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Header from "./Header/Header.jsx";
import Register from "./Register/Register.jsx";
import Footer from "./Footer/Footer.jsx";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./quiz.jsx";
export default function Home() {
  const [logged, isloggedin] = useState("false");

  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Register />
        <Quiz />
        <Footer />
      </Router>
    </div>
  );
}
