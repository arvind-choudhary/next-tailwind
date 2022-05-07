import classNames from 'classnames'
import React from 'react'
import styles from "./CardHeaderComponent.module.scss"

type Props = {
    classes?: string;
    headerInfo?: string;
}

export default function CardHeaderComponent(props: Props) {
  return (
    <header className={classNames(styles.cardHeader, props.classes)}>CardHeaderComponent</header>
  )
}
