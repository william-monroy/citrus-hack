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
        <Button>Holi</Button>
      </div>
    </div>
  )
}

export default Communities