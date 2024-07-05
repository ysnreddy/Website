import React from 'react';
import "./About.css";
import Abou from "../../assets/images/Abou.png";

const About = () => {
  return (
    <div className="about container mx-auto p-8 bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="lg:w-1/2 w-full">
          <h3 className="font-bold text-3xl mb-4" id="About" >| About Us</h3>
          <p className="text-gray-700 text-lg md:text-xl font-serif leading-relaxed">
          Deepnet Analytics transforms manufacturing problem-solving with advanced video analytics. We provide tailored, comprehensive solutions for seamless operations and optimized productivity. By analyzing vast data, we identify inefficiencies and root causes, developing actionable solutions. Our commitment to delivering complete solutions includes executing strategies for tangible results. From conveyor belt health monitoring to quality control and workplace safety, Deepnet Analytics helps manufacturing industries thrive in today’s competitive landscape..
          </p>
        </div>
        <div className="lg:w-1/2 w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
          <img
            className="w-full rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            src={Abou}
            alt="About Us"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

