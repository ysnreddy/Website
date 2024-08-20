import React from 'react';
import Steel from "../../assets/images/Steel.png";
import Mining from "../../assets/images/Mining.png";
import Manufacture from "../../assets/images/Manu.png";
import "./Industries.css";

const Industries = () => {
  return (
    <div className="Industries" id="Industries">
      <div className="flex flex-col items-center justify-center gap-8 p-4 md:flex-row">
        <div className="Industry w-full md:w-1/3">
          <h2 className="text-3xl font-bold mb-4 text-center">Steel </h2> {/* Added Heading */}
          <div className="image-container">
            <img src={Steel} alt="Steel" className="w-full h-auto" />
            <div className="caption">
              <h1 className="text-2xl font-bold text-center mb-2">Steel</h1>
              <p className="text-xl leading-loose">
                Enhance operational safety, ensure equipment integrity, & improve production quality with real-time monitoring and predictive insights.
              </p>
            </div>
          </div>
        </div>

        <div className="Industry w-full md:w-1/3">
          <div className="image-container">
            <h2 className="text-3xl font-bold mb-4 text-center">Mining</h2> {/* Added Heading */}
            <img src={Mining} alt="Mining" className="w-full h-auto" />
            <div className="caption">
              <h1 className="text-2xl font-bold text-center mb-2">Mining</h1>
              <p className="text-xl leading-loose">
                Safeguard your workforce, monitor critical machinery, & streamline extraction processes through intelligent video surveillance & analytics.
              </p>
            </div>
          </div>
        </div>

        <div className="Industry w-full md:w-1/3">
          <div className="image-container">
            <h2 className="text-3xl font-bold mb-4 text-center">Manufacturing </h2> {/* Added Heading */}
            <img src={Manufacture} alt="Manufacture" className="w-full h-auto" />
            <div className="caption">
              <h1 className="text-2xl font-bold text-center mb-2">Manufacturing</h1>
              <p className="text-xl leading-loose">
                Optimize production lines, ensure compliance with safety standards, & maintain high quality output by leveraging our comprehensive video analytics technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
