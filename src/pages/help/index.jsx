import { Button } from '@nextui-org/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Help = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="help"/>
      <Navbar />
      <div className={styles.help__container}>
        <Button>Holi</Button>
      </div>
    </div>
  )
}

export default Help