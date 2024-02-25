import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import { LuClock } from "react-icons/lu";

function ITCResources() {
  const cardsData = [
    {

      imageSrc: 'https://www.itcportal.com/assets/images/resources/gallery-thumb-chennarayappa-150224.jpg',
      title: 'ITC Stories of change | Chennarayappa',

    },
    {

      imageSrc: 'https://www.itcportal.com/assets/images/resources/gallery-thumb-yippee-150224.jpg',
      title: 'YiPPee! WOW MASALA',

    },
    {

      imageSrc: 'https://www.itcportal.com/assets/images/resources/gallery-thumb-sanjiv-puri-150224.jpg',
      title: 'ITC CMD Sanjiv Puri Speaks On Sustain-O-Vation: Transformation, Transition...',

    },
    {

      imageSrc: 'https://www.itcportal.com/assets/images/resources/gallery-thumb-children-150224.jpg',
      title: "From Slate to Sky: the story of dreams & hope | World Children's Day 2023 | The ITC Way"

    },
  ];




  return (
    <HomeLayout>
      {/* section-1-------- */}
      <section className=" ">
        <div className="text-[11px] text-white bg-gradient-to-r from-[#000080de] to-blue-700 p-3 shadow-lg shadow-[navy] px-10">
          <Link to="/" className="">
            Home
          </Link>
          / Business
        </div>
      </section>

      {/* section-2-------- */}
      <section className="relative bg-[#0f0544]">
        {/* Background image */}
        {/* <img
          className="w-full h-[100%] object-cover absolute top-0 left-0"
          src="https://www.itcportal.com/assets/images/bluebg.jpg"
          alt=""
        /> */}

        <div className="relative z-10 text-white text-sm font-[400] pt-20 px-10">
          <h1 className="text-5xl font-bold">ITC Resources</h1>

          <div className=" gap-10 flex flex-row justify-center items-center mt-10 p-5">
            <div className="rounded-lg shadow-lg">
              <img
                src="https://www.itcportal.com/assets/images/resources/resourcestop_thumb1.jpg"
                alt="Image 1"
                className="w-full rounded-lg "
              />

              <div className="flex py-5 px-1 ">
                <div className="text-2xl font-semibold">
                  <h1>
                    ITC Sustainability
                    <br />
                    Report 2023
                  </h1>
                </div>

                <div className="ml-[50%] font-[400]">
                  <div className="flex gap-2" >

                    <p>View :</p>
                    <a
                      href="https://www.itcportal.com/sustainability/sustainability-integrated-report-2023/ITC-Sustainability-Integrated-Report-2023.pdf"
                      target=""
                    >
                      <img src="https://www.itcportal.com/assets/images/resources/pdf_ic.png" />
                    </a>
                  </div>

                  <div className="flex gap-2 items-center " >

                    <p>View More :</p>
                    <a
                      href=""
                      target=""
                    >
                    <FaArrowRight className=" text-xs font-thin"/>
                    </a>
                  </div>




                </div>
              </div>
            </div>


            <div className="rounded-lg shadow-lg">
              <img
                src="https://www.itcportal.com/assets/images/resources/resourcestop_thumb2.jpg"
                alt="Image 1"
                className="w-full rounded-lg "
              />

              <div className="flex py-5 px-1 ">
                <div className="text-2xl font-semibold">
                <h1>
                    ITC Reports &
                    <br />
                    Accounts 2023
                  </h1>
                </div>

                <div className="ml-[50%] font-[400]">
                  <div className="flex gap-2" >

                    <p>View :</p>
                    <a
                      href="https://www.itcportal.com/sustainability/sustainability-integrated-report-2023/ITC-Sustainability-Integrated-Report-2023.pdf"
                      target=""
                    >
                      <img src="https://www.itcportal.com/assets/images/resources/pdf_ic.png" />
                    </a>
                  </div>

                  <div className="flex gap-2 items-center " >

                    <p>View More :</p>
                    <a
                      href=""
                      target=""
                    >
                    <FaArrowRight className=" text-xs font-thin"/>
                    </a>
                  </div>




                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* section-4-------- */}

      <section className=" p-16 ">
          <h1 className="text-4xl mb-10 text-black font-semibold">ITC Video Gallery</h1>

        <div className="flex justify-between">
          {cardsData.map((item, index) => (
            <ItcVideoGallery item={item} key={index}/>
          ))}
        </div>



      </section>
    </HomeLayout>
  );
}


function ItcVideoGallery({ item }) {
  return (
      <div className="card bg-white text-black overflow-hidden w-72 rounded-md shadow-xl">
          <img src={item.imageSrc} className="h-[50%]" />
          <div className="p-5 flex flex-col  ">
              <h1 className="font-bold text-xs pb-5">{item.title}</h1>
              <div className="flex justify-between text-xs  absolute bottom-5  left-5 right-5 ">
                  <span className="flex items-center gap-2 mt-4 "><LuClock />15 feb 2023</span>
                  <div className="flex items-center gap-2 mt-4">watch video <img src="https://www.itcportal.com/assets/images/mediacentre/watch_mediaic.png" /></div>
              </div>
          </div>
      </div>
  )
}

export default ITCResources;
