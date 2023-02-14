import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Footer, Navbar } from '../components';
// final page
const Success = () => (
<div className='bg-primary-black'>
    <Navbar></Navbar>
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
        </p>
        <h2>Thank you for your order!</h2>
        <p className="email-msg">Check your email inbox for the receipt(we will be adding the payments details later).</p>
        <p className="description">
          If you have any questions, please email
          {/* to email me for any questions */}
          <a className="email" href="mailto:Arwafathi30@gmail.com">
            Arwafathi30@gmail.com
          </a>
        </p>
        {/* back to the products page */}
        <Link href="/indexproduct">
          <button type="button" width="300px" className="btn">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
    <Footer></Footer>
</div>
  )


export default Success