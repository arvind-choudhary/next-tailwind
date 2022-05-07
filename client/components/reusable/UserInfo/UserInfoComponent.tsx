import React from 'react'
import Image from 'next/image';
import userImage from './../../../../assets/photo-1438761681033-6461ffad8d80.jpeg'

type Props = {
  
}

const UserInfoComponent = (props: Props) => {
  return (
    <span className="border rounded-full p-1 inline-flex bg-slate-300">

      <Image 
        src={userImage}
        width={40}
        height={40}
        objectFit={'cover'}
        className="rounded-full "
      />
        
    </span>
  )
}

export default UserInfoComponent