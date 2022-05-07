import React from 'react'
import ListPageLayout from '../../client/Layouts/ListPageLayout'

type Props = {}

const Gallery = (props: Props) => {
  return (
    <div>Gallery</div>
  )
}

Gallery.getLayout = ListPageLayout(Gallery);

export default Gallery