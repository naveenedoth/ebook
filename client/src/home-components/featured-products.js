import React from 'react';

function FeaturedProducts() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
      <div className="gallery grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="image-holder">
          <a href="#">
            <img src="./images/img_2.jpg" alt="img-1" className="w-full h-auto object-cover max-h-48" />
          </a>
        </div>
        <div className="image-holder">
          <a href="#">
            <img src="./images/img_3.jpeg" alt="img-2" className="w-full h-auto object-cover max-h-48" />
          </a>
        </div>
        <div className="image-holder">
          <a href="#">
            <img src="./images/img_4.jpg" alt="img-3" className="w-full h-auto object-cover max-h-48" />
          </a>
        </div>
        <div className="image-holder">
          <a href="#">
            <img src="./images/img_5.jpg" alt="img-4" className="w-full h-auto object-cover max-h-48" />
          </a>
        </div>
        <div className="image-holder">
          <a href="#">
            <img src="./images/img_6.jpg" alt="img-5" className="w-full h-auto object-cover max-h-48" />
          </a>
        </div>
        <div className="image-holder">
          <a href="#">
            <img src="./images/img_7.jpg" alt="img-6" className="w-full h-auto object-cover max-h-48" />
          </a>
        </div>
        <div className="image-holder">
          <a href="#">
            <img src="./images/img_8.jpg" alt="img-7" className="w-full h-auto object-cover max-h-48" />
          </a>
        </div>
        <div className="image-holder">
          <a href="#">
            <img src="./images/img_9.jpg" alt="img-8" className="w-full h-auto object-cover max-h-48" />
          </a>
        </div>
        <div className="image-holder">
          <a href="#">
            <img src="./images/img_10.jpg" alt="img-9" className="w-full h-auto object-cover max-h-48" />
          </a>
        </div>
        <div className="image-holder">
          <a href="#">
            <img src="./images/img_11.jpg" alt="img-10" className="w-full h-auto object-cover max-h-48" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProducts;
