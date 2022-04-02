import { Button } from '@nextui-org/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import styles from './Events.module.css'

const Events = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="events"/>
      <Navbar />
      <div className={styles.events__container}>
        <Button>Holi</Button>
      </div>
    </div>
  )
}

export default Events