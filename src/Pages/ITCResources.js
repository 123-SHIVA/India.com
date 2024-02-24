import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";

function ITCResources() {
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
          className="w-full h-[300%] object-cover absolute top-0 left-0"
          src="https://www.itcportal.com/assets/images/bluebg.jpg"
          alt=""
        />

        <div className="relative z-10 text-white font-bold  py-20 px-10">
          <h1 className="text-6xl">ITC Resources</h1>

       
          <div class="absolute gap-10 flex flex-row justify-center items-center mt-10 p-5">
            <div class="rounded-lg shadow-lg">
              <img
                src="https://www.itcportal.com/assets/images/resources/resourcestop_thumb1.jpg"
                alt="Image 1"
                class="w-full rounded-lg "
              />
            
            </div>
            <div class="bg-white  rounded-lg shadow-lg ">
              <img
                src="https://www.itcportal.com/assets/images/resources/resourcestop_thumb2.jpg"
                alt="Image 2"
                class="w-full  rounded-lg"
              />
        
            </div>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}

export default ITCResources;
