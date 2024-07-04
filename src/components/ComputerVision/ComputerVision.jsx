import Manufacturing from "../../assets/images/manufacturing.png";
import Retail from "../../assets/images/retail.png";
import Security from "../../assets/images/security.png";
import Supply from "../../assets/images/supply-chain.png";
import './ComputerVision.css';

const ComputerVision = () => {
return (
  <>
    <div className="md:hidden">
      <div className="py-20 pl-4 flex flex-col gap-1 md:text-center move-up">
        <h2 className="text-white text-3xl md:text-4xl">
          Transform Your Business With
        </h2>
        <h1 className="text-primary font-bold text-4xl md:text-5xl">
          Computer Vision
        </h1>
      </div>

      {/* Computer Vision in Manufacturing */}
      <div className="w-full px-4 flex flex-col gap-7 pb-10">
        <h2 className="text-white text-3xl md:text-4xl">
          Conveyer Belt Monitoring{" "}
          
        </h2>
        <div className="w-full flex justify-start">
          <img src={Manufacturing} alt="manufacturing" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-white text-lg font-semibold" style={{ color: "gray" }}>
             By implementing our industrial machine vision solutions,
            manufacturers can automate quality control, optimise production
            processes, and enhance worker safety through various objects and
            pattern detection.
          </p>
          <button
            className="text-medium text-white cursor-pointer text-xl bg-primary h-10 w-52 hover:
          transition duration-500 ease-out hover:bg-white hover:text-primary "
          >
            Know More
          </button>
        </div>
      </div>

      <div className="w-full px-4 flex flex-col gap-7 pb-10">
        <h2 className="text-white text-3xl md:text-4xl">
          Computer Vision in{" "}
          <span className="text-primary font-bold">Retail Industries</span>
        </h2>
        <div className="w-full flex justify-start">
          <img src={Retail} alt="retail" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-white text-lg" style={{ color: "gray" }}>
            By implementing our industrial machine vision solutions,
            manufacturers can automate quality control, optimise production
            processes, and enhance worker safety through various objects and
            pattern detection.
          </p>
          <button
            className="text-medium text-white cursor-pointer text-xl bg-primary h-10 w-52 hover:
          transition duration-500 ease-out hover:bg-white hover:text-primary "
          >
            Know More
          </button>
        </div>
      </div>

      <div className="w-full px-4 flex flex-col gap-7 pb-10">
        <h2 className="text-white text-3xl md:text-4xl">
          Computer Vision in{" "}
          <span className="text-primary font-bold">Supply Chain</span>
        </h2>
        <div className="w-full flex justify-start">
          <img src={Supply} alt="supply chain" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-white text-lg" style={{ color: "gray" }}>
            By implementing our industrial machine vision solutions,
            manufacturers can automate quality control, optimise production
            processes, and enhance worker safety through various objects and
            pattern detection.
          </p>
          <button
            className="text-medium text-white cursor-pointer text-xl bg-primary h-10 w-52 hover:
          transition duration-500 ease-out hover:bg-white hover:text-primary "
          >
            Know More
          </button>
        </div>
      </div>

      <div className="w-full px-4 flex flex-col gap-7 pb-10">
        <h2 className="text-white text-3xl md:text-4xl">
          Computer Vision in{" "}
          <span className="text-primary font-bold">
            Surveillance & Security
          </span>
        </h2>
        <div className="w-full flex justify-start">
          <img src={Security} alt="security" />
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-white text-lg" style={{ color: "gray" }}>
            By implementing our industrial machine vision solutions,
            manufacturers can automate quality control, optimise production
            processes, and enhance worker safety through various objects and
            pattern detection.
          </p>
          <button
            className="text-medium text-white cursor-pointer text-xl bg-primary h-10 w-52 hover:
          transition duration-500 ease-out hover:bg-white hover:text-primary "
          >
            Know More
          </button>
        </div>
      </div>
    </div>
    
    
    <div className="hidden md:flex md:flex-col md:items-center ">
      <div className="text-white text-center pt-32 pb-24">
        <h2 className="text-5xl pb-4 font-bold">Transform Your Business With</h2>
        <h1 className="text-primary font-bold text-5xl">Computer Vision</h1>
      </div>

      

      <div className="flex items-center justify-evenly pb-24">
        <div className="w-[40%]">
          <img
            src={Manufacturing}
            alt="manufacturing"
            className="object-contain"
          />
        </div>
        <div className="w-2/5 flex flex-col gap-8">
          <h1 className="text-white text-4xl font-bold">
            WorkPlace Safety{" "}
            <span className="font-bold text-primary"></span>
          </h1>
          <p
            className="text-white flex flex-col text-3xl font-semibold font-serif"
            style={{ color: "gray" }}
          >
            Achieve 360° safety complaince through AI powered solutions.
            
              Mitigate risks and ensure a safer workplace by using vision to detect  PPE violations, fire, smoke and monitor employee health to deliver assistance in real time.
           
          </p>
          
        </div>
      </div>

      <div className="flex items-center justify-evenly pb-24">
        <div className="w-2/5 flex flex-col gap-8">
          <h1 className="text-white text-4xl font-bold">
            Improving Quality and Productivity using {" "}
            <span className="font-bold text-primary">Vision</span>
          </h1>
          <p
            className="text-white flex flex-col text-3xl font-semibold font-serif"
            style={{ color: "gray" }}
          >
            Enhance Productivity by including visual intelligence in work flow for inspection and monitoring of high speed processors.
          </p>
          
        </div>
        <div className="w-[40%]">
          <img
            src={Supply}
            alt="manufacturing"
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex items-center justify-evenly pb-24">
        <div className="w-[40%]">
          <img
            src={Retail}
            alt="manufacturing"
            className="object-contain"
          />
        </div>
        <div className="w-2/5 flex flex-col gap-8">
          <h1 className="text-white text-4xl font-bold">
            Conveyor Belt Monitoring{" "}
            <span className="font-bold text-primary"></span>
          </h1>
          <p
            className="text-white flex flex-col text-3xl font-semibold font-serif"
            style={{ color: "gray" }}
          >
           Increase life of Conveyor Belts by 5-8 % through visual inspection for foreign Objects , training, physical damages, wear and tear.
          </p>
          
        </div>
      </div>
    </div>
  </>
);
}

export default ComputerVision;
