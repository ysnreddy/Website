import Navbar from "../../components/Navbar/Navbar";
import ClientWorked from "../../components/ClientWorked/ClientWorked";
import ComputerVision from "../../components/ComputerVision/ComputerVision";
import Industries from "../../components/Industries/Industries";
import "./Home.module.css";
import Title from "../../components/Title/Title";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div id="home" className="scroll-smooth">
      {/* Hero Section */}
      <div id="home" className="relative bg-black md:pl-16" style={{ height: "100vh" }}>
        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Background image */}
        <div className="absolute inset-0 bg-center opacity-50">
          <ClientWorked />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full gap-4 p-4 text-center text-white md:w-1/2 md:gap-8 md:text-left md:items-start">
          <div className="absolute top-10 left-10 w-full p-3 flex justify-between items-center md:p-6">
            <Navbar />
          </div>
          <h1 className="text-4xl font-medium leading-loose antialiased md:text-5xl">
            Building Intelligence through{" "}
            <span className="text-4xl font-medium leading-loose antialiased md:text-5xl">Vision in manufacturing</span>
          </h1>
          <p className="text-lg leading-none md:text-xl hover:leading-loose">
            Driving manufacturing excellence across industries.
          </p>
          <a href="#contact" className="transition-transform duration-500 hover:scale-110">
            <button className="group h-10 pl-5 pr-5 rounded-full flex items-center bg-gradient-to-r from-gray-600 to-gray-400 hover:to-gray-100 font-bold text-xl">
              Book A Demo 
            </button>
          </a>
        </div>
      </div>

      <div className="container mx-auto my-auto flex flex-col items-center justify-center h-auto">
        <Title />
        <Industries />
      </div>

      <About />
      <ComputerVision />
      <Contact />
    </div>
  );
};

export default Home;
