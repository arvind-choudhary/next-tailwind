import classNames from 'classnames';
import React from 'react';
import styles from './Button.module.scss';

type clickHandler = () => {}

type Props = {
  classes?: string;
  children?: React.ReactNode;
  clickHandler?: clickHandler;
  title?: string;
  variant?: 'primary' | 'secondary' | 'error' | 'info' | 'warning' | 'success';
}

export default function Button(props: Props) {
  return (
    <button
      onClick={props?.clickHandler}
      className={classNames(styles.btn, styles[`btn-${props.variant}`], props.classes)}
    >
      {React.isValidElement(props?.children) ? props.children : props.title}
    </button>
  )
}

Button.defaultProps = {
  title: 'Button',
  variant: 'primary',
  classes: ''
}