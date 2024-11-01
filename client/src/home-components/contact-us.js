import React from 'react';

function ContactUs() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p>Leave us a message or suggestion:</p>
      <form className="mt-4">
        <label htmlFor="fname" className="block mb-1">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.." className="border p-2 w-full mb-4" />
        <label htmlFor="lname" className="block mb-1">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.." className="border p-2 w-full mb-4" />
        <label htmlFor="country" className="block mb-1">Country</label>
        <select id="country" name="country" className="border p-2 w-full mb-4">
          <option value="india">India</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
        <label htmlFor="subject" className="block mb-1">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.." className="border p-2 w-full mb-4" style={{ height: '170px' }}></textarea>
        <input type="submit" value="Submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700" />
      </form>
    </div>
  );
}

export default ContactUs;
