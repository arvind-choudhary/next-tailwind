import React from 'react'
import BackIcon from '../../reusable/BackIcon/BackIcon'
import UserInfoComponent from '../../reusable/UserInfo/UserInfoComponent'

type Props = {}

const GalleryHeader = (props: Props) => {
  return (
    <header className='flex place-content-between border px-4 py-2'>
      <span className='flex items-center'>
        <BackIcon />
      </span>
      <span className='flex items-center'>
        <UserInfoComponent />
      </span>
    </header>
  )
}

export default GalleryHeader