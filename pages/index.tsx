import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-xl">Hello world</h1>
      </main>

      <footer className={styles.footer}>
        <Image
          src="/icon.svg"
          alt="mhakash logo"
          className={styles.logo}
          width={20}
          height={20}
        />
        <span className="ml-2">2022</span>
      </footer>
    </div>
  );
};

export default Home;
