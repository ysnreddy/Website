import React, { useState, useEffect } from 'react';
import Manufacturing from "../../assets/images/manufacturing.png";
import Retail from "../../assets/images/retail.png";
import Supply from "../../assets/images/supply-chain.png";
import './ComputerVision.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ComputerVision = () => {
  const data = [
    {
      id: 1,
      image: Manufacturing,
      name: "WorkPlace Safety",
      quote: "Utilize our advanced video analytics to create a safer environment for your workforce by detecting potential hazards, monitoring safety compliance, and preventing accidents before they occur. Our technology continuously scans the workplace, identifying unsafe conditions such as obstructed pathways, improper use of equipment, and potential slip and fall areas. By monitoring employee behavior and adherence to safety protocols in real-time, our system ensures that safety regulations are consistently followed. ",
    },
    {
      id: 2,
      image: Retail,
      name: "Conveyer Belt Monitoring",
      quote: "Keep your critical conveyor systems running smoothly with our state-of-the-art real-time monitoring solutions. Our technology continuously tracks the condition of your conveyor systems, identifying wear and tear before it becomes a significant issue. By detecting anomalies early, our system alerts you to potential problems, allowing you to take proactive measures. Schedule maintenance tasks ahead of time based on precise data, minimizing unexpected failures and avoiding costly downtime. Our solutions ensure that your conveyor systems operate efficiently and reliably, supporting uninterrupted production and enhancing overall operational efficiency.",
    },
    {
      id: 3,
      image: Supply,
      name: "Process and Quality Monitoring",
      quote: "Keep your critical conveyor systems running smoothly with our state-of-the-art real-time monitoring solutions. Our technology continuously tracks the condition of your conveyor systems, identifying wear and tear before it becomes a significant issue. By detecting anomalies early, our system alerts you to potential problems, allowing you to take proactive measures. Schedule maintenance tasks ahead of time based on precise data, minimizing unexpected failures and avoiding costly downtime. Our solutions ensure that your conveyor systems operate efficiently and reliably, supporting uninterrupted production and enhancing overall operational efficiency.",
    },
  ];

  const [index, setIndex] = useState(0);
  const lastIndex = data.length - 1;

  useEffect(() => {
    if (index < 0) {
      setIndex(lastIndex);
    } else if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, lastIndex]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index - 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);


  return (
    <section id='solutions' className="section">
      <div className="title text-2xl font-semibold">
        <h2>Our suite of video analytics solutions is designed to address the core challenges faced by industrial operations, ensuring a safer and more efficient workplace</h2>
      </div>
      <div className="section-center">
        {data.map((item, indexPeople) => {
          const { id, image, name, quote } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === data.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => setIndex(index - 1)}>
          <i className="fas fa-arrow-left" />
        </button>
        <button className="next" onClick={() => setIndex(index + 1)}>
          <i className="fas fa-arrow-right" />
        </button>
      </div>
    </section>
  );
}

export default ComputerVision;
