import { Button } from '@nextui-org/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from './Jobs.module.css'

const Jobs = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="jobs"/>
      <Navbar />
      <div className={styles.jobs__container}>
        <Button>Holi</Button>
      </div>
    </div>
  )
}

export default Jobs