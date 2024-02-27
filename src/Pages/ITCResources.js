import { useState,useEffect,useRef } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

import { LuClock } from "react-icons/lu";

const cards = [
  { title: 'Card 1', content: 'Content of Card 1' },
  { title: 'Card 2', content: 'Content of Card 2' },
  { title: 'Card 3', content: 'Content of Card 3' },
];



function ITCResources() {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    const slider = sliderRef.current;
    slider.scrollLeft -= slider.offsetWidth;
  };

  const scrollRight = () => {
    const slider = sliderRef.current;
    slider.scrollLeft += slider.offsetWidth;
  };








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
      <section className="">
  <div className="text-[11px] text-white bg-gradient-to-r from-[#000080de] to-blue-700 p-3 shadow-lg shadow-[navy] px-10">
    <Link to="/" className="">
      Home
    </Link>
    / Business
  </div>
</section>

{/* section-2-------- */}
<section className="relative bg-[#0f0544]">
  <div className="relative z-10 text-white text-sm font-[400] pt-20 px-5 sm:px-10">
    <h1 className="text-3xl sm:text-5xl font-bold">ITC Resources</h1>

    <div className="gap-6 sm:gap-10 flex flex-col sm:flex-row justify-center items-center mt-6 sm:mt-10 p-3 sm:p-5">
      <div className="rounded-lg shadow-lg mb-6 sm:mb-0">
        <img
          src="https://www.itcportal.com/assets/images/resources/resourcestop_thumb1.jpg"
          alt="Image 1"
          className="w-full rounded-lg"
        />

        <div className="flex flex-col sm:flex-row justify-between items-center py-3 px-2">
          <div className="text-lg sm:text-2xl font-semibold">
            <h1>
              ITC Sustainability
              <br />
              Report 2023
            </h1>
          </div>

          <div className="mt-3 sm:mt-0">
            <a
              href="https://www.itcportal.com/sustainability/sustainability-integrated-report-2023/ITC-Sustainability-Integrated-Report-2023.pdf"
              target="_blank"
              className="flex items-center"
            >
              <p className="mr-1">View :</p>
              <img src="https://www.itcportal.com/assets/images/resources/pdf_ic.png" alt="PDF Icon" />
            </a>
            <a href="#" className="flex items-center mt-1 sm:mt-0">
              <p className="mr-1">View More :</p>
              <FaArrowRight className="text-xs font-thin" />
            </a>
          </div>
        </div>
      </div>

      <div className="rounded-lg shadow-lg">
        <img
          src="https://www.itcportal.com/assets/images/resources/resourcestop_thumb2.jpg"
          alt="Image 1"
          className="w-full rounded-lg"
        />

        <div className="flex flex-col sm:flex-row justify-between items-center py-3 px-2">
          <div className="text-lg sm:text-2xl font-semibold">
            <h1>
              ITC Reports &
              <br />
              Accounts 2023
            </h1>
          </div>

          <div className="mt-3 sm:mt-0">
            <a
              href="https://www.itcportal.com/sustainability/sustainability-integrated-report-2023/ITC-Sustainability-Integrated-Report-2023.pdf"
              target="_blank"
              className="flex items-center"
            >
              <p className="mr-1">View :</p>
              <img src="https://www.itcportal.com/assets/images/resources/pdf_ic.png" alt="PDF Icon" />
            </a>
            <a href="#" className="flex items-center mt-1 sm:mt-0">
              <p className="mr-1">View More :</p>
              <FaArrowRight className="text-xs font-thin" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* section-3-------- */}
<section className="p-5 sm:p-16">
  <h1 className="text-3xl sm:text-4xl mb-6 sm:mb-10 text-black font-semibold">ITC Video Gallery</h1>

  <div className="flex flex-col sm:flex-row justify-center sm:justify-between">
    {cardsData.map((item, index) => (
      <ItcVideoGallery item={item} key={index} />
    ))}
  </div>
</section>


      
    </HomeLayout>
  );
}


function ItcVideoGallery({ item }) {
  return (
    <div className="card bg-white text-black overflow-hidden md:w-72 w-full rounded-md shadow-xl">
    <img src={item.imageSrc} className="h-48 md:h-auto w-full object-cover" />
    <div className="p-3 md:p-5 flex flex-col">
        <h1 className="font-bold text-sm md:text-xs pb-2">{item.title}</h1>
        <div className="flex flex-col md:flex-row justify-between text-xs md:text-xxs">
            <span className="flex items-center gap-2 mt-2 md:mt-4">
                <LuClock />15 Feb 2023
            </span>
            <div className="flex items-center gap-2 mt-2 md:mt-4">
                watch video 
                <img src="https://www.itcportal.com/assets/images/mediacentre/watch_mediaic.png" className="w-4 h-4" />
            </div>
        </div>
    </div>
</div>

  )
}

export default ITCResources;
