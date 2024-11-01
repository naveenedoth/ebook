import React from 'react';

function FeaturedBrands() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4 text-center">Featured Brands</h2>
      <div className="flex flex-wrap justify-center">
        <div className="brand m-2">
          <img src="./images/book_logo1.png" alt="" className="h-24" />
        </div>
        <div className="brand m-2">
          <img src="./images/book_logo_6.png" alt="" className="h-24" />
        </div>
        <div className="brand m-2">
          <img src="./images/book_logo3.png" alt="" className="h-24" />
        </div>
        <div className="brand m-2">
          <img src="./images/book_logo_4.png" alt="" className="h-24" />
        </div>
        <div className="brand m-2">
          <img src="./images/book_logo_5.png" alt="" className="h-24" />
        </div>
      </div>
    </div>
  );
}

export default FeaturedBrands;
