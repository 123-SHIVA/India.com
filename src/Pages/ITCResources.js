import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";

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
      <section className="relative">
        {/* Background image */}
        <img
          className="w-full h-[100%] object-cover absolute top-0 left-0"
          src="https://www.itcportal.com/assets/images/bluebg.jpg"
          alt=""
        />

        <div className="relative z-10 text-white font-bold  py-20 px-10">
          <h1 className="text-6xl">ITC Resources</h1>

          <div class=" gap-10 flex flex-row justify-center items-center mt-10 p-5">
            <div class="rounded-lg shadow-lg">
              <img
                src="https://www.itcportal.com/assets/images/resources/resourcestop_thumb1.jpg"
                alt="Image 1"
                class="w-full rounded-lg "
              />

              <div className="flex mt-7 ">
                <div className="text-2xl">
                  <h1>
                    ITC Sustainability
                    <br />
                    Report 2023
                  </h1>
                </div>

                <div className="ml-[50%] flex flex-col">
                  <span>
                    View :
                    <a
                      href="https://www.itcportal.com/sustainability/sustainability-integrated-report-2023/ITC-Sustainability-Integrated-Report-2023.pdf"
                      target=""
                    >
                      <img src="https://www.itcportal.com/assets/images/resources/pdf_ic.png" />
                    </a>
                  </span>

                  <a href="">
                    View More{" "}
                    <img
                      src="https://www.itcportal.com/images/arrow_brand.png"
                      class="ml-2"
                      alt="Arrow Icon"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class=" rounded-lg shadow-lg ">
              <img
                src="https://www.itcportal.com/assets/images/resources/resourcestop_thumb2.jpg"
                alt="Image 2"
                class="w-full  rounded-lg"
              />

              <div className="flex mt-7 ">
                <div className="text-2xl">
                  <h1>
                    ITC Sustainability
                    <br />
                    Report 2023
                  </h1>
                </div>

                <div className="ml-[50%] flex flex-col">
                  <span>
                    View :
                    <a
                      href="https://www.itcportal.com/sustainability/sustainability-integrated-report-2023/ITC-Sustainability-Integrated-Report-2023.pdf"
                      target=""
                    >
                      <img src="https://www.itcportal.com/assets/images/resources/pdf_ic.png" />
                    </a>
                  </span>

                  <a href="/">
                    View More{" "}
                    <img
                      src="https://www.itcportal.com/images/arrow_brand.png"
                      class="ml-2"
                      alt="Arrow Icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* section-4-------- */}

      <section>
          
      <div className="flex ">
      {cardsData.map((item, index) => (
        <div key={index} className="m-4  bg-white rounded-xl overflow-hidden shadow-md w-[25%] text-black">
          <div className="p-4">

            <img src={item.imageSrc} alt="iamge data"/>
            <h2 className="text-xl font-semibold">{item.title}</h2>
         

            <div className="flex gap-5   mt-[10px]">
          
              <img src="https://www.itcportal.com/assets/images/mediacentre/dateic.png"/>
             <span className="text-[10]"> 15 feb 2024</span>

             <span>Watch video</span>
             <a href="">
              <img src="https://www.itcportal.com/assets/images/mediacentre/watch_mediaic.png"/>
             </a>
            </div>
          </div>
          {/* You can customize this section according to your card content */}
        </div>
      ))}
    </div>
 


      </section>
    </HomeLayout>
  );
}

export default ITCResources;
