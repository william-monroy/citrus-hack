import { Button } from '@nextui-org/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from './Learning.module.css'

const Learning = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="learning"/>
      <Navbar />
      <div className={styles.learning__container}>
        <Button>Holi</Button>
      </div>
    </div>
  )
}

export default Learning