import React from 'react';
import { Footer, Navbar } from '../components';
import { client } from '../lib/client';
import { Product, HeroBanner } from '../components';
// products main page with banner data and best seller, navbar, and footer components
const Home1 = ({ products, bannerData }) => (
  <div className='bg-primary-black'>
    <Navbar></Navbar>
    <div className='heroHeading'>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]}  />
    </div>
    <div className="products-heading">
      <h2>Best Seller Advertising Services</h2>
      <p>Various ways to make your business much bigger</p>
    </div>
  <div className="gradient-04 z-0" />
  <div className="products-container">
    {/* to display all the products */}
      {products?.map((product) => <Product key={product._id} product={product} />)}
  </div>
  <Footer/>
  </div>
);
// to get the server side data and returned as props when loaded 
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home1;