import React from 'react'
import { MouseEventHandler } from 'react';

type clickHandler = () => {}

interface Props {
    clickHandler?:clickHandler;
    title?: string;
    variant?: string;
}

export default function Button(props: Props) {
  return (
    <button onClick={props?.clickHandler} >Button</button>
  )
}
