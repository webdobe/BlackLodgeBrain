import Image from "next/image";
import styles from "./page.module.css";
import Isabella from "./assets/_MG_1591.png";
import Header from "@/components/global/Header";


export default function Home() {
  return (
    <main className={styles.main}>
        <Header />

        <h1 className={styles.h1}>Welcome,</h1>

        <p className={styles.p}>My name is Isabella Pelot, I am a graphic design student at North Idaho College in my first year. I am interested in all aspects of design and look forward to learning more in the future.</p>

        <div className={styles.frontImage}>
          <Image 
            src={Isabella} 
            alt="Isabella"
            fill
          />
        </div>

        <h4>Look around this site to:</h4>

        <ul>
          <li>Find out more about me.</li>
          <li>See my work.</li>
          <li>Get in contact with me.</li>
        </ul>

        <div className={styles.interests}>
          <h2 className={styles.h2}>My Interests</h2>
          <ul className={styles.ul}>
            <li>Graphic Design</li>
            <li>Photography</li>
            <li>Web Development</li>
            <li>Illustration</li>
          </ul>
        </div>

        <footer className={styles.footer}><small>Copyright© Isabella Pelot 2024</small></footer>
    </main>
  );
}
