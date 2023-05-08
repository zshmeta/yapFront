import Image from 'next/image'
import styles from './page.module.css'
import PetitZshmeta from "./components/PetitZshmeta";
import  Particles  from "./components/Particles";
import Snowflakes from "./components/Snowflakes";
import Footer from "./layouts/Footer";




export default function Home() {
    const footerIcons = 'url(/zshmeta.jpg)'
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          {/*<Sidebar />*/}
        <p>
          <code className={styles.code}>Le Z c'est Le S...</code>
        </p>
        <div style={{borderRadius: "45%", overflow:"hidden"}}>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/zshmeta.jpg"
              alt="Le z c'est Le s"
              className={styles.topLogo}
              width={50}
              height={44}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
          <div className={styles.grid}>


          </div>
      </div>


        <Snowflakes />
        <PetitZshmeta />
        <Footer icons={footerIcons}/>
    </main>
  )
}
