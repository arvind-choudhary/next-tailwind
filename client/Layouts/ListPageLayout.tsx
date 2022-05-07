import React from 'react'
import GalleryHeader from '../components/pages/gallery/Gallery.Header'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => (
    <main>
        <GalleryHeader  />     
        <WrappedComponent {...props} />
    </main>
  )
  return hocComponent
}
