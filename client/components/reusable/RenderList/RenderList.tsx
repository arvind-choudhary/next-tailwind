import React, { isValidElement, cloneElement } from 'react'

type Props = {
    children?: React.ReactElement;
    listData: any[];
}

export default function RenderList({ listData, children, ...restProps  }: Props): React.ReactNode {
  return Array.isArray(listData) && listData.map(( data?: {}, key?: number ) => isValidElement(children) && cloneElement(children, { key, data, ...restProps }, null))
}
