import React from 'react';
import Navbar from './navbar';

export default function Products() {
  const categories = [
    { id: 'Adventure', title: 'Adventure' },
    { id: 'Thriller', title: 'Thriller' },
    { id: 'Romantic', title: 'Romantic' },
    { id: 'Comedy', title: 'Comedy' },
  ];

  const products = {
    Adventure: [
      { img: './images/Adv1.jfif', price: 200 },
      { img: './images/Adv2.jfif', price: 250 },
      { img: './images/Adv3.jfif', price: 180 },
      { img: './images/Adv4.jfif', price: 460 },
      { img: './images/Adv5.jfif', price: 390 },
      { img: './images/Adv6.jfif', price: 100 },
      { img: './images/adv7.jfif', price: 304 },
      { img: './images/adv8.jfif', price: 340 },
    ],
    Thriller: [
      { img: './images/th1.jfif', price: 120 },
      { img: './images/th2.jfif', price: 402 },
      { img: './images/th3.jfif', price: 299 },
      { img: './images/th4.jfif', price: 150 },
      { img: './images/th5.jfif', price: 300 },
      { img: './images/th6.jfif', price: 389 },
      { img: './images/th7.jfif', price: 269 },
      { img: './images/th8.jfif', price: 451 },
    ],
    Romantic: [
      { img: './images/r1.jfif', price: 250 },
      { img: './images/r2.jfif', price: 300 },
      { img: './images/r3.jfif', price: 450 },
      { img: './images/r4.jfif', price: 299 },
      { img: './images/r5.jfif', price: 105 },
      { img: './images/r6.jfif', price: 199 },
      { img: './images/r7.jfif', price: 299 },
      { img: './images/r8.jfif', price: 349 },
    ],
    Comedy: [
      { img: './images/c1.jfif', price: 400 },
      { img: './images/c2.jfif', price: 370 },
      { img: './images/c3.jfif', price: 320 },
      { img: './images/c4.jfif', price: 430 },
      { img: './images/c5.jfif', price: 360 },
      { img: './images/c6.jfif', price: 295 },
      { img: './images/c7.jfif', price: 289 },
      { img: './images/c8.jfif', price: 450 },
    ],
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <Navbar />

      {/* Fixed Sidebar */}
      <aside className="w-1/4 bg-white rounded-lg shadow-lg p-4 fixed h-auto max-h-[80vh] overflow-auto mt-12 ml-2"> {/* Adjusted height */}
        <h4 className="font-bold text-lg mb-4 text-center">Categories</h4>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category.id}>
              <a
                href={`#${category.id}`}
                className="text-gray-700 hover:text-teal-500 font-semibold transition duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(category.id);
                  const yOffset = -80;
                  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }}
              >
                {category.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 ml-auto p-8">
        {categories.map((category) => (
          <section key={category.id} id={category.id} className="mb-12">
            <h2 className="text-3xl font-semibold mb-4 text-teal-600 border-b-2 border-teal-600 pb-2">
              {category.title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products[category.id].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
                  <img src={product.img} alt="product" className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <p className="text-lg font-semibold mb-2">
                      Price: <span className="text-teal-500">${product.price}</span>
                    </p>
                    <button className="flex items-center justify-center bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition duration-200 w-full">
                      <i className="fa fa-shopping-cart mr-2" aria-hidden="true"></i> Buy Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
