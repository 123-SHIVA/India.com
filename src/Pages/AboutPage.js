import { Link } from "react-router-dom";
import aboutImg from "../images/bannerbg1.jpg";
import HomeLayout from "../Layouts/HomeLayout";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import vision from "../images/vision.png";
import mission from "../images/mission.png";
import values from "../images/values.png";
import sanjibpuri from "../images/sanjibpuri.png";
import aboutbtm from "../images/about_btm_bg3.jpg";


let section3 = [
  {
    img: vision,
    Title: <h1>The ITC Vision</h1>,
    description: (
      <p>
        Sustain ITC's position as one of India's most valuable corporations
        through world class performance, creating growing value for the Indian
        economy and the Company's stakeholders
      </p>
    ),

  },
  {
    img: mission,
    Title: <h1>The ITC Mission</h1>,
    description: (
      <p>
        To enhance the wealth generating capability of the enterprise in a
        globalising environment, delivering superior and sustainable stakeholder
        values
      </p>
    ),
  },
  {
    img: values,
    Title: <h1> ITC Values</h1>,
    description: (
      <p>
        ITC believes that its core values of trusteeship, customer focus,
        respect for people, excellence, innovation and nation orientation have
        been the guiding principles behind the Company's phenomenal growth,
        helping it to become one of India's most admired and valued enterprises.
        Know more
      </p>
    ),
  },
];


// card2

const cardData = [
  { imageUrl: "https://www.itcportal.com/assets/images/about/honurs_ic1.png", description: "World Business And Development Awards 2012" },
  { imageUrl: "https://www.itcportal.com/assets/images/about/honurs_ic2.png", description: "The Development Gateway Award 2005" },
  { imageUrl: "https://www.itcportal.com/assets/images/about/honurs_ic3.png", description: "SAM/SPG Sustainability Leadership Award 2007" },
  { imageUrl: "https://www.itcportal.com/assets/images/about/honurs_ic4.png", description: "The Stockholm Challenge Award 2006" },
  { imageUrl: "https://www.itcportal.com/assets/images/about/honurs_ic5.png", description: "ICSI National Award 2006" }
];


const lastSectionData=[
  {
    img:"https://www.itcportal.com/assets/images/about/about_btm_bg1.jpg",
    icon:"https://www.itcportal.com/assets/images/about/about_btm_ic1.png",
    title:"Investor Relations",
    description:""
  },
  {
    img:"https://www.itcportal.com/assets/images/about/about_btm_bg2.jpg",
    icon:"https://www.itcportal.com/assets/images/about/about_btm_ic2.png",
    title:"Exemplar in Sustainability",
    description:"Only company in the world to be carbon positive, water positive and solid waste recycling positive."
  },
  {
    img:"https://www.itcportal.com/assets/images/about/about_btm_bg3.jpg",
    icon:"https://www.itcportal.com/assets/images/about/about_btm_ic3.png",
    title:"ITC Research and  Development",
    description:""
  },
  
]



function AboutPage() {
  return (
    <HomeLayout className="bg-white">

      <section className=" ">
        <div className="text-base text-white bg-blue-900 p-2">
          <Link to="/" className="">
            Home
          </Link>
          /About
        </div>
      </section>


      <section className="about-banner">
        <img src={aboutImg} className="h-96" />
      </section>


      <section>
        <div className="left text-blue-800">
          <div className="absolute top-5 left-32 bottom-0 flex flex-col justify-center gap-5 text-blue-900 font-bold  ">
            <h1 className="text-5xl">About ITC</h1>

            <p>
              ITC is a leading multi-business Indian enterprise with <br></br>{" "}
              presence in{" "}
              <b>
                FMCG, Paper, Packaging, Agribusiness, Hotels <br></br> and IT
              </b>
              , and is a global Sustainability exemplar.
            </p>
            <button className="flex justify-between text-[10px] font-semibold items-center w-40  text-blue py-2 px-5 border  border-blue-600 rounded-2xl">
              Read more <FaArrowRight className="text-[8px]" />
            </button>
          </div>

          <div className="absolute top-0 right-32 bottom-0 flex flex-col justify-center gap-5 text-blue-900 font-bold  ">
            <h1 className="text-5xl">200+</h1>

            <p>
              Manifacturing <br></br> Units
            </p>
          </div>
        </div>
      </section>

  

      {/* section-2 -------- */}

      <section className="px-14 mt-10 w-full  text-black">
        <div>
          <h1 className=" text-4xl text-black font-semibold ">ITC at a Glance</h1>

          <div className="bg-white border border-red-500  rounded-lg my-10  ">
            <div className=" flex justify-evenly  text-sm relative -top-6 ">
              <div className="text-center">
                <img
                  src="https://www.itcportal.com/assets/images/glace_ic14.png"
                  className="m-auto"
                />
                <div className="mt-5">
                  <h1 className="text-2xl">43%</h1>
                  <p>
                    of Total energy <br /> is renewable
                  </p>
                </div>
              </div>

              <div className="text-center">
                <img
                  src="https://www.itcportal.com/assets/images/glace_ic15.png"
                  className="m-auto"
                />
                <div className="mt-5">
                  <h1 className="text-2xl">40</h1>
                  <p>
                    Platinum Rated <br /> Green Building{" "}
                  </p>
                </div>
              </div>

              <div className="text-center">
                <img
                  src="https://www.itcportal.com/assets/images/glace_ic16.png"
                  className="m-auto"
                />
                <div className="mt-5">
                  <h1 className="text-2xl">
                    12 Hotels, <br /> 1 Data Center
                  </h1>
                  <p>LEED Zero Carbon</p>
                </div>
              </div>

              <div className="text-center">
                <img
                  src="https://www.itcportal.com/assets/images/glace_ic16.png"
                  className="m-auto"
                />
                <div className="mt-5">
                  <h1 className="text-2xl">2 Hotels</h1>
                  <p>LEED Zero Water</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section -3    */}
      <section className="text-white">
        <div className="  ">
          <ul className="grid grid-cols-3">
            {
              section3.map((item, index) => (
                <li key={index} className="">
                  <div className="overflow-hidden shadow-lg px-16 py-10 bg-[#190483] h-[70vh] bg-gradient-to-r from-[#201658aa] to-[#142770]">
                    <img src={item.img} alt="sorry" />
                    <div className="mt-10 font-semibold ">
                      <div className="text-3xl mb-2 text-indigo-200">{item.Title}</div>
                      <p className="text-indigo-300 text-xs mt-5">
                        {item.description}
                      </p>
                      {
                        index == section3.length - 1 &&
                        <button className=" mt-10 flex justify-between text-[10px] font-thin items-center w-40  text-blue py-2 px-5 border border-white rounded-2xl">
                          Know more <FaArrowRight className="text-[8px]" /></button>
                      }
                    </div>
                  </div>
                </li>

              ))}
          </ul>
        </div>
      </section>


      {/* section -4 */}

      <section className="bg-sky-100 -mt-2 px-14  ">
        <div className="flex justify-between items-center py-8 text-black mt-2 border ">
          <div className="w-5/12">
            <h1 className="text-4xl font-semibold">ITC Leadership</h1>
            <p className="text-xs leading-6 my-5">Flowing from the concept and principles of Corporate Governance adopted by the Company, leadership within ITC is exercised at three levels. The Board of Directors at the apex, as trustee of shareholders, carries the responsibility for strategic supervision of the Company.</p>

            <button className="my-2 ml-0 flex justify-between text-xs font-thin items-center w-40  text-blue py-2 px-5 border-2 border-blue-600 rounded-2xl">
              Read more <FaArrowRight className="text-[8px]" />
            </button>
          </div>
          <div className="flex w-6/12  ">
            <div className=" overflow-hidden shadow-lg flex bg-white w-full px-8 mt-8 pt-8 rounded-xl  ">
              <img src={sanjibpuri} alt="Placeholder" />
              <div className="px-10 pt-16 ">
                <div className=" w-full">
                  <h1 className="text-3xl" >Mr. Sanjiv Puri</h1>
                  <p>Chairman & MD</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>



      <section>

        <div class="section">
          <div class="flex bg-gradient-to-b from-blue-700 to-blue-950 text-white text-sm justify-around py-5">
            <div class="flex flex-row gap-5 items-cente">
              <img src="https://www.itcportal.com/assets/images/about/bod-icon.png" class="w-6 h-6" alt="Image 1" />
              <p>Board of Directors</p>
            </div>
            <div class="flex flex-row gap-5 items-center">
              <img src="https://www.itcportal.com/assets/images/about/cmc-icon.png" class="w-6 h-6" alt="Image 2" />
              <p>Corporate Management Committee</p>
            </div>
            <div class="flex flex-row gap-5 items-center">
              <img src="https://www.itcportal.com/assets/images/about/bh-icon.png" class="w-6 h-6" alt="Image 3" />
              <p>Business Heads</p>
            </div>
          </div>
        </div>
      </section>


      <section className="my-20  mx-14">
        <div className="text-black text-4xl text-center my-10">
          <h2>Global <strong>Honours</strong>
          </h2>
        </div>


        <div className="flex justify-center ">
          {cardData.map((card, index) => (
            <div key={index} className={`py-10 px-14 bg-white overflow-hidden flex flex-col justify-center items-center text-xs  ${index!==cardData.length-1 && "border-r"} border-gray-300  border-dashed `}>

              <img src={card.imageUrl} alt={`Card`} />

              <div className="p-4 flex text-center text-black">
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="flex justify-between text-xs font-thin items-center border shadow-xl border-gray-300  m-auto bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
        </div>

      </section>

      <section className="my-20 mx-10 ">
        <div className="flex gap-3 justify-center"> 
          {
            lastSectionData.map((items,index)=>{
              return(
                <AboutCard item={items} key={index} />
              )
            })
          }
        </div>
      </section>
    </HomeLayout>
  );
}

function  AboutCard({item})
{
  return(
    <div>
            <div className="relative shadow-xl text-center text-white font-bold ">
                <figure><img src={item.img} alt="Shoes" className="  rounded-lg w-[35vw] h-64" /></figure>
                <div className=" absolute top-0 right-0 bottom-0 left-0  text-center px-10  py-8">
                  <div className="flex flex-col items-center gap-3 relative">
                    <img src={item.icon} />
                    <p className="text-xl ">{item.title}</p>
                    <p className="text-xs">{item.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-10  left-0 right-0 ">
                    <button className="flex text-xs font-thin items-center border shadow-xl border-gray-300  m-auto bg-white text-black py-2 px-5 rounded-2xl gap-3">Read more <FaArrowRight className="text-[8px]" /></button>
                </div>
            </div>
        </div>
  )
}

export default AboutPage;


