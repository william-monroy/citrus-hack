import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Citrus Hack</title>
        <meta
          name="description"
          content="Citrus Hackathon"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        as="main"
        style={{ height: '100vh', backgroundColor: '#011526', padding: '0'}}
      >
        Citrus Hack
      </div>
    </div>
  );
}
