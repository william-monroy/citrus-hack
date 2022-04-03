import { Button } from '@nextui-org/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from './Forum.module.css'

const Forum = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="forum"/>
      <Navbar />
      <div className={styles.forum__container}>
        <Button>Holi</Button>
      </div>
    </div>
  )
}

export default Forum