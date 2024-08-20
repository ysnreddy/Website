import React, { useState } from 'react';
import "./Contact.css";
import person from "../../assets/images/person.png";
import mail from "../../assets/images/mail.png";
import call from "../../assets/images/Phone.png";
import Com from "../../assets/images/com.png";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c17cd8e1-b40d-4ce2-9781-a6bfef31d8ff");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    if (res.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return (
    <div className="contact container mx-auto p-8 bg-blue-100" >
      <h2 className="contact-heading text-4xl font-bold mb-8 text-blue-900" id="contact">Contact Us</h2>
      <div className="flex flex-col lg:flex-row items-start lg:space-x-16 space-y-8 lg:space-y-0">
        <div className="contact-col mb-8 lg:mb-0 lg:w-1/2">
          <h3 className="font-bold text-3xl mb-4  text-blue-900">Send Us a Message</h3>
          <p className="font-serif text-lg mb-4">
            Feel free to reach out through the contact form or find our contact information below.
          </p>
          <ul className="font-sans text-lg space-y-4">
            <li className="flex items-center">
              <img src={person} alt="person" className="w-6 h-6 mr-2" /> Bharadwaj, Product Head
            </li>
            <li className="flex items-center">
              <img src={call} alt="phone" className="w-6 h-6 mr-2" /> +91 8986874702
            </li>
            <li className="flex items-center">
              <img src={mail} alt="mail" className="w-6 h-6 mr-2" /> Hello@deepnet.digital
            </li>
            <li className="flex items-center">
              <img src={Com} alt="company" className="w-6 h-6 mr-2" /> Deepnet Analytics LLP
            </li>
          </ul>
        </div>
        <div className="contact-col lg:w-1/2 w-full">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="form-group">
              <label className="block text-lg font-semibold flex items-center">
                Your Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input type="text" name="name" placeholder="Enter Your Name" required className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:shadow-md transition duration-300 ease-in-out" />
            </div>
            <div className="form-group">
              <label className="block text-lg font-semibold flex items-center">
                Phone Number <span className="text-red-500 ml-1">*</span>
              </label>
              <input type="tel" name="phone" placeholder="Enter your mobile number" required className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:shadow-md transition duration-300 ease-in-out" />
            </div>
            <div className="form-group">
              <label className="block text-lg font-semibold flex items-center">
                Email <span className="text-red-500 ml-1">*</span>
              </label>
              <input type="email" name="email" placeholder="Enter your mail ID" required className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:shadow-md transition duration-300 ease-in-out" />
            </div>
            <div className="form-group">
              <label className="block text-lg font-semibold flex items-center">
                Project Description <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea name="message" rows="6" placeholder="Describe the project" required className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:shadow-md transition duration-300 ease-in-out"></textarea>
            </div>
            <button type="submit" className="w-full px-4 py-3 bg-gray-500 text-white font-bold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105">Submit</button>
          </form>
          <span className="block mt-4 text-green-500">{result}</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;



