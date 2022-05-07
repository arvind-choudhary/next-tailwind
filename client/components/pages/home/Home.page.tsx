import React from 'react'
import Button from '../../reusable/Button/Button'
import Image from 'next/image'
import homeScreen from '../../../../assets/home-screen.jpg';
import styles from './home.module.scss';

export default function HomePage() {
  return (
    <div className={`flex flex-col h-screen ${styles.home}`} >
      <div className='h-3/4 relative'>
        <Image
          src={homeScreen}
          layout={'fill'}
          objectFit={'cover'}
        />
      </div>
      <div className='flex h-1/4 place-content-center'>
        <Button title='Get started' />
        <div className={styles.footer}>
          <Button title='Footer clicked' />
        </div>
      </div>
    </div>
  )
}