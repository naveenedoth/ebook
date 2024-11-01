import React from 'react';
import Navbar from './navbar';

// Team Member Card Component
function TeamMemberCard({ image, name, title, quote, email }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 m-4 max-w-xs text-center">
      <img src={image} alt={name} className="rounded-lg w-full h-64 object-cover" />
      <div className="mt-4">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-blue-500 text-sm">{title}</p>
        <p className="mt-2 text-gray-600 italic">"{quote}"</p>
        <p className="mt-2 text-gray-700">{email}</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Contact
        </button>
      </div>
    </div>
  );
}

// About Component
function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Use the existing Navbar component */}
      <Navbar />

      <div className="about-section text-center py-8 px-4">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg text-gray-700">Book Zone provides an easy interface for customers to purchase books online.</p>
        <p className="mt-2 text-gray-600">
          For any queries, leave a comment in the Home page comment section. You can also email us or call us 
          on weekdays. <br />Thank you for your patience, and we hope you had a great shopping experience here.
        </p>
      </div>

      <h2 className="text-3xl font-semibold text-center mt-8">Our Team</h2>
      <div className="flex flex-wrap justify-center p-8">
        <TeamMemberCard
          image="./images/p1.jfif"
          name="Himansi"
          title="CEO & Founder"
          quote="Be yourself; everyone else is already taken."
          email="himanshi@example.com"
        />
        <TeamMemberCard
          image="./images/p2.jfif"
          name="Abc"
          title="Art Director"
          quote="Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
          email="Abc@example.com"
        />
        <TeamMemberCard
          image="./images/p3.jfif"
          name="Xyz"
          title="Designer"
          quote="A room without books is like a body without a soul."
          email="xyz@example.com"
        />
      </div>
    </div>
  );
}

export default About;
