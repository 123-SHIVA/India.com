import { Link } from "react-router-dom";
import aboutImg from "../images/bannerbg1.jpg";
import HomeLayout from "../Layouts/HomeLayout";
import { FaArrowRight } from "react-icons/fa6";
import sanjibpuri from "../images/sanjibpuri.png";
import ItcAtGlanceCard from "../Cards/ItcAtGlanceCard";
import { itcAtGlanceData, ItcPerspective, globalHonours, moreAboutItc } from "../Data/Data";



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

      <section className="about-banner lg:h-96 h-[80vh] relative">
        <img src={aboutImg} className="h-full w-full" />
        <div className="absolute top-0 left-0 right-0  p-20">
          <div className="text-blue-800 flex flex-col lg:flex-row justify-between  ">
            <div className="flex flex-col justify-center gap-5 text-blue-900 font-bold  ">
              <h1 className="text-5xl">About ITC</h1>

              <div className="text-lg font-[350]">
                ITC is a leading multi-business Indian enterprise with <br></br>{" "}
                presence in{" "}
                <b>
                  FMCG, Paper, Packaging, Agribusiness, Hotels <br></br> and IT
                </b>
                , and is a global Sustainability exemplar.
              </div>
              <button className="flex justify-between text-[10px] font-semibold items-center w-40  text-blue py-2 px-5 border  border-blue-600 rounded-2xl">
                Read more <FaArrowRight className="text-[8px]" />
              </button>
            </div>

            <div className="mt-10 flex flex-col justify-center gap-5 text-blue-900 font-bold text-2xl ">
              <h1 className="text-5xl text-[#b60070c4] ">200+</h1>
              <div>
                Manifacturing <br></br> Units
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* --------------------------ITC at a Glance------------ */}
      <section className="px-14 mt-10 w-full  text-black">
        <div>
          <h1 className=" text-4xl text-black font-semibold ">ITC at a Glance</h1>



          <div className="bg-white border border-red-500  rounded-lg my-10  ">

            <div className="  text-sm relative -top-6 carousel flex justify-between">
              {
                itcAtGlanceData.map((item, index) => {
                  return (
                    <ItcAtGlanceCard item={item} key={index} />
                  )
                })
              }
            </div>
          </div>

        </div>
      </section>

      {/* ---------------ItcPerspective-----------------  */}
      <section className="text-white">
        <div className="  ">
          <ul className="grid lg:grid-cols-3">
            {
              ItcPerspective.map((item, index) => (
                <ItcPerspectiveCard item={item} key={index} />

              ))}
          </ul>
        </div>
      </section>


      {/* --------------------------ItcPerspective---------------- */}

      <section className="bg-sky-100 -mt-2 px-14  ">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center py-8 text-black mt-2 border ">
          <div className="w-5/12">
            <h1 className="text-4xl font-semibold">ITC <span className="font-bold">Leadership</span></h1>
            <p className="text-xs leading-6 my-5">Flowing from the concept and principles of Corporate Governance adopted by the Company, leadership within ITC is exercised at three levels. The Board of Directors at the apex, as trustee of shareholders, carries the responsibility for strategic supervision of the Company.</p>

            <button className="my-2 ml-0 flex justify-between text-xs font-thin items-center w-40  text-blue py-2 px-5 border-2 border-blue-600 rounded-2xl">
              Read more <FaArrowRight className="text-[8px]" />
            </button>
          </div>

          <div className="flex lg:w-6/12 w-full  ">
            <div className=" overflow-hidden shadow-lg flex bg-white w-full px-8 mt-8 pt-8 rounded-xl  ">
              <img src='https://i.postimg.cc/CL4d5gLR/generate-a-similar-image-like-this-to-remove-the-owner-rights-4.jpg' alt="Placeholder" />
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

        <div className="section">
          <div className="flex bg-gradient-to-b from-blue-700 to-blue-950 text-white text-sm justify-around py-5">
            <div className="flex flex-row gap-5 items-cente">
              <img src="https://www.itcportal.com/assets/images/about/bod-icon.png" className="w-6 h-6" alt="Image 1" />
              <p>Board of Directors</p>
            </div>
            <div className="flex flex-row gap-5 items-center">
              <img src="https://www.itcportal.com/assets/images/about/cmc-icon.png" className="w-6 h-6" alt="Image 2" />
              <p>Corporate Management Committee</p>
            </div>
            <div className="flex flex-row gap-5 items-center">
              <img src="https://www.itcportal.com/assets/images/about/bh-icon.png" className="w-6 h-6" alt="Image 3" />
              <p>Business Heads</p>
            </div>
          </div>
        </div>
      </section>

      {/* --------------------Global honours------------- */}

      <section className="my-20  mx-14">
        <div className="text-black text-4xl text-center my-10">
          <h2>Global <strong>Honours</strong>
          </h2>
        </div>


        <div className="flex  flex-col lg:flex-row justify-center ">
          {globalHonours.map((card, index) => (
            <div key={index} className={`py-10 px-14 bg-white overflow-hidden flex flex-col justify-center items-center text-xs  ${index !== globalHonours.length - 1 ? "lg:border-r border-b " : ""} border-gray-300  border-dashed `}>

              <img src={card.imageUrl} alt={`Card`} />

              <div className="p-4 flex text-center text-black">
                <div>{card.description}</div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button className="flex justify-between text-xs font-thin items-center border shadow-xl border-gray-300  m-auto bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
        </div>

      </section>


      <section className="my-20 mx-10 ">
        <div className="flex flex-col lg:flex-row gap-3 justify-center">
          {
            moreAboutItc.map((items, index) => {
              return (
                <MoreAboutItc item={items} key={index} index={index} />
              )
            })
          }
        </div>
      </section>
    </HomeLayout>
  );
}

function MoreAboutItc({ item }) {
  return (
    <div>
      <div className="relative shadow-xl text-center text-white font-bold ">
        <figure><img src={item.img} alt="Shoes" className="  rounded-lg w-full lg:w-[35vw] h-64" /></figure>
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


function ItcPerspectiveCard({ item , index}) {

  return (
    <li  className={item.color}>
      <div className="overflow-hidden shadow-lg px-16 py-16 lg:py-10 lg:h-[70vh] ">
        <img src={item.img} alt="sorry" />
        <div className="mt-10 font-semibold ">
          <div className="text-3xl mb-2 text-indigo-200">{item.Title}</div>
          <div className="text-indigo-300 text-xs mt-5">
            {item.description}
          </div>
          {
            index === ItcPerspective.length - 1 &&
            <button className=" mt-10 flex justify-between text-[10px] font-thin items-center w-40  text-blue py-2 px-5 border border-white rounded-2xl">
              Know more <FaArrowRight className="text-[8px]" /></button>
          }
        </div>
      </div>
    </li>
  )
}


export default AboutPage;


