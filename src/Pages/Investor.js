import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import '../App.css'


function Investor() {

<<<<<<< HEAD
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
      
      
=======
  let financialReportingData = [
    {
      img: "https://www.itcportal.com/images/ir_ic1.png",
      Title: <h1> Quarterly Results</h1>,
      color: "bg-[#031f4b] shadow-lg",
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
      color: "bg-[#04396c]  shadow-lg",
      Title: <h1>ITC Report & Accounts</h1>,


>>>>>>> 8936344f7dd877754385cfb47bdf9d25f968794f
    },
    {
      img: "https://www.itcportal.com/images/ir_ic3.png",
      Title: <h1>Press Releases</h1>,
<<<<<<< HEAD
      
      
    },
    { 
 
   img: "https://www.itcportal.com/images/ir_ic4.png",
   Title: <h1> Presentation
   </h1>,
  
   
   
=======
      color: "bg-[#035b96]  shadow-lg",


    },
    {

      img: "https://www.itcportal.com/images/ir_ic4.png",
      color: "bg-[#74c0bc]  shadow-lg",
      Title: <h1> Presentation
      </h1>,



>>>>>>> 8936344f7dd877754385cfb47bdf9d25f968794f


    },
  ];

<<<<<<< HEAD



let section4 = [
    {
      img: "https://www.itcportal.com/images/si_ic1.png",
      Title: <p className="text-xs"> SHAREHOLDERS' INFORMATION
      Disclosures under Regulation 46 of the SEBI Listing Regulations</p>
  
  
    },
    {
      img: "https://www.itcportal.com/images/si_ic2.png",
      Title: <h1>ITC's Shareholding Pattern</h1>,
=======
  let stackHoldersInformation = [
    {
      img: "https://www.itcportal.com/images/si_ic1.png",
      color:"bg-[#00455e]",
      Title: "Disclosures under Regulation 46 of the SEBI Listing Regulations"
      
      
    },
    {
      img: "https://www.itcportal.com/images/si_ic2.png",
      color:"bg-[#01698f]",
      Title: "ITC's Shareholding Pattern"
>>>>>>> 8936344f7dd877754385cfb47bdf9d25f968794f
      
      
    },
    {
      img: "https://www.itcportal.com/images/si_ic4.png",
<<<<<<< HEAD
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
=======
      color:"bg-[#4c8090]",
      Title: "Unclaimed & Unpaid Dividend"
      
      
    },
    {
      
      img: "https://www.itcportal.com/images/ir_ic4.png",
      color:"bg-[#6aa2b3]",
      Title: "shareholder & AGM Information"
    },
  ];

  let quickLinksData = [
    {
      img: "https://www.itcportal.com/images/quick_ic1.png",
      Title: "Recent News",
      color:"bg-[#ffffff]"
      
      
    },
    {
      img: "https://www.itcportal.com/images/ir_quick_ic.png",
      Title: "ITC Reports & Accounts 2023",
      color:"bg-[#ffffff]"
>>>>>>> 8936344f7dd877754385cfb47bdf9d25f968794f
      
      
    },
    {
      img: "https://www.itcportal.com/images/bs_quick_ic.png",
<<<<<<< HEAD
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
=======
      Title: "ITC Balance Sheet",
      color:"bg-[#ffffff]"
      
      
    },
    {
      img: "https://www.itcportal.com/images/pl_quick_ic.png",
      Title: "ITC Profit & Loss Statement",
      color:"bg-[#ffffff]"
    },
    {
      img: "https://www.itcportal.com/images/10yrs_quick_ic.png",
      color:"bg-[#ffffff]",
      Title: "10 Years at a Glance",
    },
    {
      img: "https://www.itcportal.com/images/kr_quick_ic.png",
      color:"bg-[#ffffff]",
      Title: "Key Ratios"
    },
    {
      img: "https://www.itcportal.com/images/esg_ic.png",
      color:"bg-[#ffffff]",
      Title: "ITC's ESG Credentials"
    },
    {
      img: "https://www.itcportal.com/images/demerger_hotel_ic.png",
      color:"bg-[#ffffff]",
      Title: "Proposed Demerger of Hotels Business"
    },
  ];


  const itcAtGlanceData = [
    {
      logo: "https://www.itcportal.com/images/glace_ic1.png",
      title: "₹ 69,481",
      subtitle: "Crores",
      heading: "Gross Revenue",
      para: "figures as on 31.03.2023"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic2.png",
      title: "₹ 18,753.31",
      subtitle: "crores",
      heading: "Net Profit",
      para: "figures as on 31.03.2023"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic3.png",
      title: "12",
      heading: "Businesses of Tomorrow"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic4.png",
      title: "25+",
      heading: "FMCG Mother Brands"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic19.png",
      title: "900",
      heading: "Patents filed"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic5.png",
      title: "200+",
      heading: "Manufacturing Units"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic20.png",
      title: "exports to",
      heading: "100 Countries"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic7.png",
      title: "119",
      heading: "Hotels across 80 locations"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic10.png",
      title: "18 Years",
      heading: "Carbon Positive"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic11.png",
      title: "21 Years",
      heading: "Water Positive"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic12.png",
      title: "16 Years",
      heading: "Solid Waste Recycling Positive"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic13.png",
      title: "4 Million ",
      heading: "Farmers Benefitted by e-Choupal"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic14.png",
      title: "6 Million",
      heading: "Sustainable Livelihoods"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic15.png",
      title: "43%",
      heading: "of the Total Energy is Renewable"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic16.png",
      title: "40",
      heading: "Platinum Rated Green Building"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic17.png",
      title: "12 hotels, 1 Data centre",
      heading: "LEED Zero Carbon"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic18.png",
      title: "2 Holtels",
      heading: "LEED Zero Water"
    }
  ]





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

      {/* --------------Investor Relation--------------- */}

      <div className="text-center text-white mt-20 mb-10 mx-20">
        <a href="/" className=" border-black bg-[#010b36] font-semibold p-4 tracking-tighter text-xl">
          ITC INSTITUTIONAL INVESTORS & FINANCIAL ANALYSTS DAY: 12TH DECEMBER
          2023
        </a>
      </div>


      {/* ---------------Financial Reporting-------------------- */}

      <section className="text-white  w-[80%] m-auto">
        <h1 className="ml-5 mb-10 text-sm text-[#002c7f] text-bold">
          FINANCIAL REPORTING
        </h1>
        <div className="  ">
          <div className="grid grid-cols-4">
            {
              financialReportingData.map((item, index) => {
                return (
                  <FinancingReportCard key={index} item={item} />
                )
              }

              )}
          </div>
        </div>
      </section>


      {/* -------------------ITC at a Glance------------------------ */}

      <section className="bg-[#f7f7f7] text-center my-10 p-10 text-[#1b2355]">
        <h1 className="text-2xl tracking-tight">ITC AT A GLANCE</h1>
        <div className="text-2xl text-[#825e09] font-semibold">|</div>
        <div className="w-[80%] m-auto">
          <div className=" flex gap-2 carousel my-10">
            {
              itcAtGlanceData.map((item, index) => {
                return (
                  <div className="carousel-item">
                    <ItcAtGlanceCard item={item} key={index} />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>


      {/* -------------------Shareholders Information---------------- */}

      <section className=" text-[#1b2355]">
        <div className=" w-[80%] m-auto ">
          <h1 className="text-2xl tracking-tight ">SHAREHOLDERS INFORMATION</h1>
          <div className="grid grid-cols-4 text-white text-sm tracking-tight my-9">
            {
              stackHoldersInformation.map((item, index) => (
                <FinancingReportCard item={item} key={index} />

              ))}
          </div>
        </div>
      </section>

      
      {/* ----------------------QUICK LINKS----------------- */}

      <section className="bg-[#002c7f] p-10 ">

      <div className="text-white  w-[80%] m-auto   ">
            <h1 className="text-2xl tracking-tight mb-7 ">QUICK LINKS</h1>
          <div className="  ">
            <ul className="grid grid-cols-4 gap-2 text-lg text-[#3b3b3b] tracking-tight">
              {
                quickLinksData.map((item, index) => (
                  
                      <FinancingReportCard item={item} key={index}  />
                 
                ))}
            </ul>
          </div>
        </div>
      </section>


      {/* ---------------------INVESTOR SERVICE CENTRE---------- */}

      <section className="w-[80%] m-auto p-10 my-4 text-[#2b2b2b] font-[350] tracking-tight">
          <h1 className="text-2xl tracking-tight mb-7 ">INVESTOR SERVICE CENTRE</h1>
          <div className="border border-gray-300 flex p-5 leading-7 ">
              <ul className=" w-1/2 ">
                  <li>- AGM 2023</li>
                  <li>- Service of Documents through Electronic Mode</li>
                  <li>- Investor Charter and Investor Complaints</li>
              </ul>
              <ul>
                  <li>- TDS on Interim Dividend 2023-24</li>
                  <li>- Postal Ballot 2024</li>
              </ul>
          </div>
          <p className="my-5 text-sm">ITC's Investor Service Centre (ISC), registered with SEBI as Category II Share Transfer Agent, provides share registration and related services from its office located at the Company's headquarters in Kolkata. Such services are provided by a dedicated and trained team of professionals backed by state-of-the-art infrastructure. The ISC is accredited with the ISO 9001:2015 certification for investor servicing.</p>

      </section>

    </HomeLayout>
  );
>>>>>>> 8936344f7dd877754385cfb47bdf9d25f968794f
}


function FinancingReportCard({ item }) {
  return (
    <div className={item.color}>
      <div className="flex flex-col justify-between h-full  p-7  group ">
        <div className=" font-semibold">
          <div className=" mb-2">{item.Title}</div>
          <div className=" text-[10]  text-xs leading-5">
            {item.description}
          </div>
        </div>
        <div className="flex items-end justify-between">
          <img className="w-10 h-10 mt-3 " src={item.img} alt="sorry" />
          <FaArrowRight className="text-[10px] group-hover:animate-bounce" />

        </div>
      </div>
    </div>
  )
}


function ItcAtGlanceCard({ item }) {
  return (
    <div className="w-64 flex flex-col  items-center  font-semibold">
      <img src={item.logo} className="max-w-20 w-16 mb-2" />
      <div>
        <h1 className="text-2xl ">{item.title}</h1>
        <p className="text-xs">{item.subtitle}</p>
        <h2 className="text-lg font-[400]">{item.heading}</h2>
        <p className="text-xs font-[300]">{item.para}</p>
      </div>
    </div>
  )
}

export default Investor;
