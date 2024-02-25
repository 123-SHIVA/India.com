import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

function Investor() {

    let section3 = [
        {
          img: "https://www.itcportal.com/images/ir_ic1.png",
          Title: <h1> Quarterly Results</h1>,
          description: (
           <p>

           <p>-Media Statement</p>
            <p>-Results</p>
            <p>-Quarterly FAQs</p>
            <p>-Presentation</p>
           </p> 
            
          ),
      
        },
        {
          img: "https://www.itcportal.com/images/qr_ic1.png",
          Title: <h1>ITC Report & Accounts</h1>,
          
          
        },
        {
          img: "https://www.itcportal.com/images/ir_ic3.png",
          Title: <h1>Press Releases</h1>,
          
          
        },
        { 
     
       img: "https://www.itcportal.com/images/ir_ic4.png",
       Title: <h1> Presentation
       </h1>,
      
       
       
  

        },
      ];




    let section4 = [
        {
          img: "https://www.itcportal.com/images/si_ic1.png",
          Title: <p className="text-xs"> SHAREHOLDERS' INFORMATION
          Disclosures under Regulation 46 of the SEBI Listing Regulations</p>
      
      
        },
        {
          img: "https://www.itcportal.com/images/si_ic2.png",
          Title: <h1>ITC's Shareholding Pattern</h1>,
          
          
        },
        {
          img: "https://www.itcportal.com/images/si_ic4.png",
          Title: <h1>Unclaimed & Unpaid Dividend</h1>,
          
          
        },
        { 
     
       img: "https://www.itcportal.com/images/ir_ic4.png",
       Title: <h1> shareholder & AGM Information
       </h1>,
      
       
       
  

        },
      ];
    let section5 = [
        {
          img: "https://www.itcportal.com/images/quick_ic1.png",
          Title: <p className="text-xs"> SHAREHOLDERS' INFORMATION
          Disclosures under Regulation 46 of the SEBI Listing Regulations</p>
      
      
        },
        {
          img: "https://www.itcportal.com/images/ir_quick_ic.png",
          Title: <h1>ITC's Shareholding Pattern</h1>,
          
          
        },
        {
          img: "https://www.itcportal.com/images/bs_quick_ic.png",
          Title: <h1>Unclaimed & Unpaid Dividend</h1>,
          
          
        },
        {  img: "https://www.itcportal.com/images/pl_quick_ic.png",
       Title: <h1> shareholder & AGM Information
       </h1> },
        {  img: "https://www.itcportal.com/images/10yrs_quick_ic.png",
       Title: <h1> shareholder & AGM Information
       </h1> },
        {  img: "https://www.itcportal.com/images/kr_quick_ic.png",
       Title: <h1> shareholder & AGM Information
       </h1> },
        {  img: "https://www.itcportal.com/images/esg_ic.png",
       Title: <h1> shareholder & AGM Information
       </h1> },
        {  img: "https://www.itcportal.com/images/demerger_hotel_ic.png",
       Title: <h1> shareholder & AGM Information
       </h1> },
      ];







  return (
    <HomeLayout>
      <section className=" ">
        <div className="text-base text-black bg-[#f0f0f0]  p-5">
          <Link to="/" className="">
            Home
          </Link>
          <span className="text-[orange]">/Investor Relations</span>

          <span className="text-[#002c7f] text-center text-4xl ml-[28%]">
            INVESTOR RELATIONS
          </span>
        </div>
      </section>

      {/* section-2--- */}

      <div className="text-center text-2xl  text-white mt-20 mb-10 mx-20">
        <a href="/" className=" border-black bg-blue-950 p-5">
          ITC INSTITUTIONAL INVESTORS & FINANCIAL ANALYSTS DAY: 12TH DECEMBER
          2023
        </a>
      </div>


      <div className="ml-5 mb-10 text-2xl text-[#002c7f] text-bold">
      FINANCIAL REPORTING
      </div>


           {/* section -3 */}


           <section className="text-white m-5">
        <div className="  ">
          <ul className="grid grid-cols-4">
            {
              section3.map((item, index) => (
                <li key={index} className="">
                  <div className="section3 overflow-hidden shadow-lg px-16 py-10 bg-[#190483] h-[50vh] bg-gradient-to-r from-[#201658aa] to-[#142770] ">
                    
                    <div className=" font-semibold ">
                      <div className="text-2xl mb-2 text-white">{item.Title}</div>
                      <p className="text-white text-[10] mt-5">
                        {item.description}
                      </p>

                      


                    </div>

                    <img className="mt-40" src={item.img} alt="sorry" />
                  </div>
                </li>

              ))}
          </ul>
        </div>
      </section>


         {/* section-4 */}

      <section className="text-white m-5">
        <div className="  ">
          <ul className="grid grid-cols-4">
            {
              section4.map((item, index) => (
                <li key={index} className="">
                  <div className="section3 overflow-hidden shadow-lg px-16 py-10 bg-[#190483] h-[30vh] bg-gradient-to-r from-[#201658aa] to-[#142770]">
                    
                    <div className=" font-semibold items-right ">
                      <div className="mb-2 text-white">{item.Title}</div>
                    <img className="m-10" src={item.img} alt="sorry" />
                    </div>

                  </div>
                </li>

              ))}
          </ul>
        </div>
      </section>






<section className="bg-[#002c7f]">
   
<div className="ml-5 mb-10 text-2xl text-white text-bold p-10">
     QUICK LINKS
      </div>
    <section className="text-white p-10 ">
        <div className="  ">
          <ul className="grid grid-cols-4">
            {
              section5.map((item, index) => (
                <li key={index} className="">
                  <div className="section3 overflow-hidden shadow-lg px-16 py-10 bg-white h-[30vh] m-3">
                    
                    <div className=" font-semibold items-right ">
                      <div className="mb-2 text-black">{item.Title}</div>
                    <img className="m-10 text-black"  src={item.img} alt="sorry" />
                    </div>

                  </div>
                </li>

              ))}
          </ul>
        </div>
      </section>



      </section>










        




    </HomeLayout>
  );
}

export default Investor;
