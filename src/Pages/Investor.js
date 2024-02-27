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
            {/* Section 1: Breadcrumb */}
            <section className="text-base text-black bg-[#f0f0f0] p-5">
                <div className="container mx-auto">
                    <Link to="/" className="inline-block">Home</Link>
                    <span className="text-[orange]">/Investor Relations</span>
                    <span className="text-[#002c7f] text-center text-4xl ml-[28%]">INVESTOR RELATIONS</span>
                </div>
            </section>

            {/* Section 2: Announcement */}
            <div className="text-center text-2xl text-white mt-20 mb-10 mx-20">
                <a href="/" className="border-black bg-blue-950 p-5 inline-block">ITC INSTITUTIONAL INVESTORS & FINANCIAL ANALYSTS DAY: 12TH DECEMBER 2023</a>
            </div>

            {/* Section 3: Financial Reporting */}
            <div className="ml-5 mb-10 text-2xl text-[#002c7f] font-bold">FINANCIAL REPORTING</div>

            {/* Section 4: Quarterly Results, ITC Report & Accounts, Press Releases, Presentation */}
            <section className="text-white m-5">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {section3.map((item, index) => (
                        <div key={index} className="overflow-hidden shadow-lg px-8 py-6 bg-gradient-to-r from-[#201658aa] to-[#142770]">
                            <div className="font-semibold text-2xl mb-4 text-white">{item.Title}</div>
                            <div className="text-white text-sm">{item.description}</div>
                            <img className="mt-8 mx-auto" src={item.img} alt="Image" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Section 5: Shareholders' Information, Shareholding Pattern, Unclaimed & Unpaid Dividend */}
            <section className="bg-[#002c7f]">
                <div className="ml-5 mb-10 text-2xl text-white font-bold p-10">QUICK LINKS</div>
                <section className="text-white p-10">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {section5.map((item, index) => (
                            <div key={index} className="overflow-hidden shadow-lg px-8 py-6 bg-white">
                                <div className="font-semibold text-xl mb-4 text-black">{item.Title}</div>
                                <img className="mt-8 mx-auto" src={item.img} alt="Image" />
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </HomeLayout>
    );
}

export default Investor;
