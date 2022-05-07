import Link from 'next/link';
import React from 'react'
import RenderList from '../RenderList/RenderList';

type Props = {
    data?: {
        title: string;
        href: string;
        dropdown: {
            title: string;
            href: string;
        }[]
    }
}

export default function NavItems(props: Props) {
  return (
    <div className="nav__right__navitems-item">
        {/* Title */}
        <Link href={props.data.title} key={props.data.title}>
            <a>{props.data.title}</a>
        </Link>
        
        <div className='nav__right__navitems-item-dropdown'>
            <RenderList listData={props.data.dropdown}>
                <NavItems />
            </RenderList>
        </div>
    </div>
  )
}
