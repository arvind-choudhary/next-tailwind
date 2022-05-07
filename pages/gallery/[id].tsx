import React from 'react'
import DetailPageLayout from '../../client/Layouts/DetailPageLayout';

type Props = {}

const GalleryDetail = (props: Props) => {
  return (
    <div>[id]</div>
  )
}

GalleryDetail.getLayout = DetailPageLayout(GalleryDetail);

export default GalleryDetail;