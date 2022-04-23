import React, { ReactChild, ReactElement } from 'react';
import styles from './Button.module.scss'

type clickHandler = () => {}

interface Props {
    overideStyle?: string;
    children?: ReactChild | ReactElement;
    clickHandler?: clickHandler;
    title?: string;
    variant?: string;
}

export default function Button(props: Props) {
  return (
    <button
      onClick={props?.clickHandler} 
      className={`${styles.btn} ${styles[props?.variant]} ${props?.overideStyle}`}
      data-style={props.variant}
    >
     {React.isValidElement(props?.children) ? props.children : props.title}
    </button>
  )
}

Button.defaultProps = {
  title: 'Button',
  variant: 'primary',
  overideStyle: ''
}