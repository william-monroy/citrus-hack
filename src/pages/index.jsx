import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button } from "@nextui-org/react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import CardHome from "../components/CardHome";
import home from "../data/home";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Citrus Hack</title>
        <meta name="description" content="Citrus Hackathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        as="main"
        style={{ height: "100vh", backgroundColor: "#011526", padding: "0" }}
      >
        <Sidebar page="home" />
        <Navbar />
        <div className={styles.home__container}>
          <h2 className={styles.home__title}>MostViewed</h2>
          <div className={styles.home__most}>
            <div className={styles.home__most__lg}>
              <img src="https://i.imgur.com/3LV8E6E.png" alt="" />
            </div>
            <div className={styles.home__most__md}>
              <img src="https://i.imgur.com/GxOlIpR.png" alt="" />
            </div>
              <img src="https://i.imgur.com/GxOlIpR.png" alt="" />
          </div>
          <h2 className={styles.home__title}>Upcoming Events</h2>
          <div className={styles.home__upcoming}>
            {
              home.map((item, index) => {
                <CardHome
                  key={index}
                  image={item.image}
                  organization={item.organization}
                  title={item.title}
                  followers={item.entries}
                  published={item.duration}
                  perfilimage={item.perfilimage}
                />
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}
