import React from 'react'
import DB from '../server/mongo/mongo.init'

interface Props {
  name: string
}

export async function getServerSideProps(context) {
  const isConnected = await DB();
  return {
    props: {
      isConnected: isConnected ?? null
    }
  }
}

function ProductList(props: Props) {
  return (
    <div>product-list</div>
  )
}


export default ProductList
