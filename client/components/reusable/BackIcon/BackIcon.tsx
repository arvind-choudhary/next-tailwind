import React from 'react'
import Image from 'next/image'
import backIcon from "../../../../assets/angle-left-solid.svg";


type Props = {

}

const BackIcon = (props: Props) => {



    return (
        <span className='h-6 w-6 inline-flex place-content-center'>
            <Image
                src={backIcon}
                objectFit={'contain'}
            />
        </span>
    )
}

export default BackIcon