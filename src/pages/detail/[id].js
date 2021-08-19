import React, { useEffect, useState } from 'react'
import ProductDetail from "../../components/Detail/detail";


function index({productDetail}) {

    return (
        <div>
          <ProductDetail detail={productDetail}/>
        </div>
    )
}

export default index


//Rutas con parametro :id
export async function getServerSideProps({params}) {
  const productDetail = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  .then(res=>res.json()
  )
  
 
  return {
    props: {
      productDetail,
    }
  }
}