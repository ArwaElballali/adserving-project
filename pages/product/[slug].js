import React, { useState } from 'react';
import { client, urlFor } from '../../lib/client';
import { Product } from '../../components';
import {Footer} from '../../components';
import {Navbar} from '../../components';
import HeroBanner from '../../components';
// product details page according to what product you clicked it reviews its data
// use product component to retrieve its data based on the slug chosen
const ProductDetails = ({ product, products }) => {
  const { image, name, details, price } = product;
//   to display one of the images associated with the product when hovering on small images container
  const [index, setIndex] = useState(0);
// to confirm when clicking buy 
  const handleBuyNow = () => {
    if (confirm("Are you sure you want to buy this item!") == true) {
        // if ok then route to success page
        window.location.href = '../sucess';
    } else {
    }
  }

  return (
    // main page content
    <div className='bg-primary-black'>
    <Navbar></Navbar>
    {/* <div className="gradient-04 z-0" /> */}

      <div className="product-detail-container">
        <div>
            {/* display image of an index */}
          <div className="image-container">
            <img src={urlFor(image && image[index])} className="product-detail-image" />
          </div>
          <div className="small-images-container">
            {/* display all images and set index to i of the image the mouse is on */}
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlFor(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
{/* text next to product image (product name, product details are fetched) */}
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <h4>Details: </h4>
          <p>{details}</p>
          <p className="price">${price}</p>
        <button type="button" className="btn" onClick={handleBuyNow}>Buy</button>
        </div>
    
      </div>
      <div className="maylike-products-wrapper">

          <h2>You may also like</h2>
          {/* maps in products item and displayes its contents (image, price, and name)*/}
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
      <Footer></Footer>
    </div>

  )
}

//  to dynamic routing the page based on the slug  (the slug clicked)
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);
// map the current slug params
  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}
// pre-render this page at build time using the props returned by getStaticProps the props are based on current slug data.

export const getStaticProps = async ({ params: { slug }}) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails