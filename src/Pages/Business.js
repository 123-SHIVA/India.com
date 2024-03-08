import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import {bussinessList} from '../Data/Data.js';

function Business() {
  return (
    <HomeLayout>
      <section className=" ">
        <div className="text-[11px] text-white bg-gradient-to-r from-[#000080de] to-blue-700 p-3 shadow-lg shadow-[navy] px-10">
          <Link to="/" className="">
            Home
          </Link>
          / Business
        </div>
      </section>

      <section className="relative">
        {/* Background image */}
        <img
          className="w-full h-80 object-cover absolute top-0 left-0"
          src="https://www.itcportal.com/assets/images/bluebg.jpg"
          alt=""
        />

        {/* Content container */}
        <div className="relative z-10 text-white font-bold  py-20 px-10">
          <h1 className="text-6xl">ITC ONLINE Businesses</h1>
          <div className="grid lg:grid-cols-3 gap-8 mx-auto mt-8">
            {
              bussinessList.map((item, index)=>{
                return(
                  <BusinessCard item={item} key={index} />
                )
              })
            }
          </div>
        </div>
      </section>

      <section className="px-10">

      </section>


    </HomeLayout>
  );
}


function BusinessCard({item}) {
  return (

    <div>
      <div className="card shadow-sm shadow-gray-200 rounded-md overflow-hidden group">
        <img src={item.img} className="" />
        <div className=" relative">
          {/* first div */}
          <div className="bg-[#1b2355] h-0 transition-all group-hover:h-56 absolute top-0 bottom-0 left-0 right-0  "></div>
         
          {/* second div */}
          <div className=" px-5 py-8  text-gray-800 h-56  group-hover:text-white text-center relative z-10">
            <h2 className=" font-bold text-xl ">{item.title}</h2>
              <div className=" text-xs font-normal mt-3 flex justify-between items-center group-hover:text-white ">
                {item.discription}
              </div>
              <button className=" absolute  m-auto bottom-10 left-0 right-0 flex justify-between text-[10px] font-semibold items-center w-28  py-2 px-5 border border-gray-200  shadow-lg rounded-2xl text-black group-hover:bg-white">
              Read more <FaArrowRight className="text-[8px]" />
            </button>
           
          </div>
        </div>
      </div>

    </div>

  )
}

export default Business;
