
import Marquee from "react-fast-marquee";
import Logo1 from "../../assets/logos/CompanyLogo1.png";
import Logo2 from "../../assets/logos/CompanyLogo2.png";
import Logo3 from "../../assets/logos/CompanyLogo3.png";


const ClientWorked = () => {

  return (
    <div className=" bg-black flex bg-body flex-col items-center py-0 px-0 gap-8 overflow-hidden md:flex-row ">
      
      
     
      <div>
      
      
        <Marquee pauseOnHover>
       
          <div className=" bg-black flex gap w-screen h-screen">
          
            <img src={Logo1} alt="company logo" />
            <img src={Logo2} alt="company logo" />
            <img src={Logo3} alt="company logo" />
            
            
          </div>

          
        </Marquee>

        
      </div>
    </div>
  );  
}

export default ClientWorked;
