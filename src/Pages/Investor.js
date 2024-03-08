import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import {financialReportingData, stackHoldersInformation, quickLinksData, itcAtGlanceInInvestor} from '../Data/Data.js'
import '../App.css'


function Investor() {

 
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
          ITC ONLINE INSTITUTIONAL INVESTORS & FINANCIAL ANALYSTS DAY: 12TH DECEMBER
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
        <h1 className="text-2xl tracking-tight">ITC ONLINE AT A GLANCE</h1>
        <div className="text-2xl text-[#825e09] font-semibold">|</div>
        <div className="w-[80%] m-auto">
          <div className=" flex gap-2 carousel my-10">
            {
              itcAtGlanceInInvestor.map((item, index) => {
                return (
                  <div className="carousel-item" key={index}>
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
          <div className="my-5 text-sm">ITC's Investor Service Centre (ISC), registered with SEBI as Category II Share Transfer Agent, provides share registration and related services from its office located at the Company's headquarters in Kolkata. Such services are provided by a dedicated and trained team of professionals backed by state-of-the-art infrastructure. The ISC is accredited with the ISO 9001:2015 certification for investor servicing.</div>

      </section>

    </HomeLayout>
  );
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
        <div className="text-xs">{item.subtitle}</div>
        <h2 className="text-lg font-[400]">{item.heading}</h2>
        <div className="text-xs font-[300]">{item.para}</div>
      </div>
    </div>
  )
}

export default Investor;
