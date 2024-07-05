import styles from "./Services.module.css";
import PropTypes from "prop-types";

const ServiceArray = [
  {
    head: "Computer Vision Ai:",
    para: "We leverage AI and machine learning to extract valuable insights from visual data",
  },
  {
    head: "Embeded Vision:",
    para: "We integrate computer vision capabilities into your existing systems, facilitating real-time insights and data-driven decisions.",
  },
  {
    head: "Industrial Machine Vision:",
    para: "We provide cutting-edge solutions to optimize your manufacturing processes, increasing efficiency and reducing error rates.",
  },
  {
    head: "Object Detection and Recognition:",
    para: "Our solutions can detect, identify, and track objects in images and videos, enabling automation and advanced surveillance.",
  },
  {
    head: "Image and Video Analysis:",
    para: "Our technology can analyse images and videos at granular levels, providing valuable insights and advanced analytics for various applications.",
  },
  {
    head: "Embeded Vision:",
    para: "We integrate computer vision capabilities into your existing systems, facilitating real-time insights and data-driven decisions.",
  },
  {
    head: "Industrial Machine Vision:",
    para: "We provide cutting-edge solutions to optimize your manufacturing processes, increasing efficiency and reducing error rates.",
  },
  {
    head: "Object Detection and Recognition:",
    para: "Our solutions can detect, identify, and track objects in images and videos, enabling automation and advanced surveillance.",
  },
  {
    head: "Image and Video Analysis:",
    para: "Our technology can analyse images and videos at granular levels, providing valuable insights and advanced analytics for various applications.",
  }
];

const Services = () => {
  return (
    <div
      id="services"
      className="text-secondary bg-white flex flex-col gap-6  md:m-auto md:mb-10 md:text-center lg:text-center xl:text-center md:p-8"
    >
      <h2 className="text-4xl font-bold bg-white">
        Empowering Businesses with Advanced Vision Intelligence:
      </h2>
      <h1 className="text-4xl font-bold text-secondary">Services We Offer</h1>

      {/* Cards */}
      <div className="flex flex-wrap   justify-between gap-0 sm:gap-0 md:gap-0 lg:gap-0 xl:gap-0">
        {ServiceArray.map((Card, index) => {
          return (
            <Cards heading={Card.head} paragraph={Card.para} key={index} />
          );
        })}
      </div>
    </div>
  );
}

const Cards = ({heading,paragraph}) => {
   
    return (
        <div className={`  hover:bg-zinc-300 scale-75 transition duration-500 ease-in-out transform hover:scale-110 flex flex-col gap-4 w-full transition duration-500 border-2  text-secondary border-gray-800 sm:w-[47%] md:w-[47%] lg:w-[30%] xl:w-[30%] p-4  hover:shadow-lg hover:shadow-secondary mb-[5%] text-start ${styles.hover_effect}`} >
        <h1 className="font-bold text-2xl transition duration-500">{heading}</h1>
        <p className="text-lg ">
          {paragraph}
        </p>
      </div>
    );
}

Cards.propTypes = {
    heading: PropTypes.string.isRequired,
    paragraph:PropTypes.string.isRequired
}

export default Services;
