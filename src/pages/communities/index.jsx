import { Button } from '@nextui-org/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from './Communities.module.css'

const Communities = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="communities"/>
      <Navbar />
      <div className={styles.communities__container}>
        <h2 className={styles.communities__title}>Discover</h2>
        <div className={styles.communities__cards}>
          <div className={styles.communities__card}>
            <img src="https://i.imgur.com/JPMb99X.png" alt="" />
          </div>
          <div className={styles.communities__card}>
            <img src="https://i.imgur.com/q0rC2aW.png" alt="" />
          </div>
          <div className={styles.communities__card}>
            <img src="https://i.imgur.com/q0rC2aW.png" alt="" />
          </div>
          <div className={styles.communities__card}>
            <img src="https://i.imgur.com/Yhepr75.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Communities