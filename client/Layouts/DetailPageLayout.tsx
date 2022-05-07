import React from 'react'
import NavBar from '../components/reusable/Nav/NavBar'

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => (
    <section>
        Detail Layout
        <WrappedComponent {...props} />
    </section>
  )
  
  return hocComponent
}
