import React from 'react'
import { Link, useParams } from 'react-router-dom';
const ProductDetails = () => {
  // const {productId} =useParams();
  const params=useParams();
  
  // params.productId
  return (

    // <div>ProductDetails</div>
    <>
        <h1>Product Details</h1>
        <p>{params.productId}</p>
        <p><Link to='..' relative='path'>Back</Link></p>
        {/* <p>{productId}</p> */}
    </>
  );
}

export default ProductDetails