import React from 'react';
import FeaturedProducts from './featured-products';
import FeaturedBrands from './featured-brands';

function Home() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to eBook app</h1>
      <p className="text-lg">You can find your books here.</p>
      <a href="/products" className="mt-4 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Explore Here <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </a>
      <FeaturedProducts/>
      <FeaturedBrands/>
    </div>
  );
}

export default Home;
