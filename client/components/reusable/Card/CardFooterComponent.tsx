import classNames from 'classnames';
import React from 'react'

// styles
import styles from "./CardFooterComponent.module.scss"

type Props = {
    classes?: string;
    footerInfo?: object;
}

const CardFooterComponent = (props: Props) => {
  return (
    <footer className={classNames(styles.cardFooter, props.classes)}>CardFooterComponent</footer>
  )
}

export default CardFooterComponent