import { Button } from '@nextui-org/react'
import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'

const Settings = () => {
  return (
    <div className={styles.container}>
      <Sidebar page="settings"/>
      <Navbar />
      <div className={styles.settings__container}>
        <Button>Holi</Button>
      </div>
    </div>
  )
}

export default Settings