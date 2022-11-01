import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Welcome from "./Welcome";
import Quiz from "./quiz";
export default function Home() {
  const [logged, isloggedin] = useState("false");

  return (
    <div className={styles.container}>
      <Welcome />
      {/* <Quiz /> */}

      {/* </Router> */}
    </div>
  );
}
