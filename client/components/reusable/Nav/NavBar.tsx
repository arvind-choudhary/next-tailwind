import React from 'react'
import Link from 'next/link'
import AuthComp from '../Auth/AuthComp'
import RenderList from '../RenderList/RenderList'
import NavConfig from '../../../../common/configs/nav.config.json'
import NavItems from './NavItems'

import styles from "./navbar.module.scss"

export default function NavBar() {
  return (
    <section className={styles.nav}>

        <div className="nav__right">
            <div className='nav__right-logo'>
                <Link href="/"><a>Home</a></Link>
            </div>

            <div className='nav__right-navitems'>
                <RenderList listData={NavConfig.nav.items}>
                    <NavItems  />
                </RenderList>
            </div>
        </div>

        <div className="nav__left">
            <AuthComp  />
        </div>

    </section>
  )
}
