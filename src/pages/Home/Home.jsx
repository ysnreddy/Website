import Navbar from "../../components/Navbar/Navbar";
import ClientWorked from "../../components/ClientWorked/ClientWorked";
import ComputerVision from "../../components/ComputerVision/ComputerVision";
import ProjectDiscussForm from "../../components/ProjectDiscussForm/ProjectDiscussForm";
import Services from "../../components/Services/Services";



const Home = () => {
  return (
    <div className=" bg-black">
      

      {/* Hero Section */}
      <div id="home" className="relative md:pl-16" style={{ height: "100vh" }}>
        {/* Overlay with opacity */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        

        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          
        >
         
         
           <ClientWorked/>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center justify-center gap-8 w-full h-full text-white text-4xl text-center p-4 relative z-10 md:w-1/2 md:gap-8 md:text-left md:place-items-start">
        <div className="h-50 z-50 absolute top-10 left-0 w-full p-3 flex  justify-between items-center md:p-6"><Navbar /></div>
          <h1 className="font-bold md:text-5xl">
          
            Building Intelligence through {" "}
            <span > Vision </span>
            In Manufacturing
          </h1>
          <p className="text-lg md:text-xl">
            Driving Manufacturing Excellence across Industries.
          </p>
          <a
            href="#contact"
            className=" transition duration-500 ease-out hover:duration-500 hover:ease-in-out hover:text-primary "
          >
            Book A Demo
          </a>
          
        
        </div>
      </div>
      <ComputerVision />

      <Services />  

      <ProjectDiscussForm />
    </div>
  );
};

export default Home;
