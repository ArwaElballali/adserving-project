import React from 'react';
import Link from 'next/link';
import { urlFor } from '../lib/client';
import Image from 'next/image';
// product model to fetch its content from sanity
const Product = ({ product: { image, name, slug, price } }) => {
  
  return (
    <div>
      {/* current slug product that is chosen */}
      <Link href={`/product/${slug.current}`}>
      <div className="product-card">
      <img src={urlFor(image && image[0])} width={250} height={250} className="product-image"/>
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
      </div>
      </Link>
    </div>
  )
}

export default Product