import Carosal from "../Components/Carosal";
import ItcVectorGrowthCard from "../Components/ItcVectorGrowthCard";
import HomeLayout from "../Layouts/HomeLayout";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { MdOutlineFileDownload } from "react-icons/md";
import ItcAtGlanceCard from "../Cards/ItcAtGlanceCard";
import { itcAtGlanceData , LatestUpdate , ItcBussinesses} from "../Data/Data";
import ItcBussinessesCard from "../Cards/ItcBussinessesCard";
import LatestUpdateCard from "../Cards/LatestUpdateCard";
import {vectorOfGrowth ,leadershipSpeaks, ItcBrands, Sustainability} from '../Data/Data.js'





function HomePage() {
    return (
        <HomeLayout>

            {/* --------------------------- - Carosal--------------------- */}

            <Carosal />


            {/* ----------------------------Lates Update --------------------- */}

            <section className=" px-20 py-10 pb-36 my-10  w-full bg-gradient-to-r from-green-600 to-yellow-400 text-black ">

                <div className="my-10 mb-20">
                    <div className="my-5 flex justify-between ">

                        <h1 className=" text-3xl text-white font-bold">Latest Updates</h1>
                        <div className="flex items-center gap-2  text-gray-800 ">
                            <button className="flex justify-between text-[11px] font-thin items-center w-32 bg-white py-2 px-5 rounded-2xl">View more <FaArrowRight className="text-[8px]" /></button>
                            <IoIosArrowBack className="bg-white rounded-full p-1 text-2xl" />
                            <IoIosArrowForward className=" bg-white rounded-full p-1 text-2xl" />
                        </div>
                    </div>


                    <div className=" flex gap-7 carousel my-10">

                        {
                            LatestUpdate.map((items, index) => {
                                return (
                                    <div className="carousel-item">
                                        <LatestUpdateCard item={items} key={index} />
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

                <div className="relative">



                    <div className="absolute left-0 right-0 -top-5">
                        <div className="my-5 flex justify-between ">
                            <h1 className=" text-3xl text-white font-bold ">ITC at a Glance</h1>
                            <div className="flex items-center gap-2  text-gray-800 ">
                                <button className="flex justify-between text-[11px] font-thin items-center w-32 bg-white py-2 px-5 rounded-2xl">View more <FaArrowRight className="text-[8px]" /></button>
                                <IoIosArrowBack className="bg-white rounded-full p-1 text-2xl" />
                                <IoIosArrowForward className=" bg-white rounded-full p-1 text-2xl" />
                            </div>
                        </div>


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

                </div>
            </section>


            {/* -----------------------------  ITC's new Vectors of Growth*/}

            <section className="mt-32 px-16 py-10 text-black text-center">

                <h1 className="text-4xl">ITC's new vectors <br />of <b>Growth</b></h1>

                <div className="flex items-center gap-5 my-10">
                    <IoIosArrowBack className="text-5xl " />
                    <div className="flex gap-7 carousel my-10" >
                        {
                            vectorOfGrowth.map((item, index) => {
                                return (
                                    <div className={index % 2 === 0 && "mt-16"}>
                                        <ItcVectorGrowthCard key={index} value={item} />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <IoIosArrowForward className="text-5xl " />
                </div>
                <progress className="progress progress-error  w-56 h-2" value="30" max="100"></progress>
            </section>


            {/* --------------------------------- Leadership Speaks---------- */}

            <section className="bg-[#2f2649] h-[73vh] relative flex items-end justify-center text-white">

                <div className=" w-9/12  flex justify-evenly items-center  ">
                    <div className="font-semibold">
                        <h2 className="text-xl">Leadership Speaks</h2>
                        <h1 className="text-3xl mt-5 mb-3">Mr. Sanjiv Puri</h1>
                        <p className="text-sm">Chairman & Md</p>
                    </div>
                    <img src="https://www.itcportal.com/assets/images/sanjiv-puri.png" className="h-[65vh]" />

                    <div className="w-96 mt-10 ml-10">
                        <div className="carousel flex gap-5 items-end ">
                            {
                                leadershipSpeaks.map((items, index) => {
                                    return (
                                        <LeadershipSpeaksCard items={items} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </section>

            {/* ----------------------------------ITC Businesses------------------ */}

            <section className=" my-20 ">

                <div className="w-2/3 m-auto">
                    <h1 className="text-3xl text-[#1b2355] text-center">ITC <span className="font-semibold"> Businesses</span></h1>

                    <div className="grid grid-cols-3 gap-4 my-14">
                        {ItcBussinesses.map((items, index) => {
                            return (
                                <div>
                                    {
                                        index < 6 &&
                                        <ItcBussinessesCard key={index} items={items} />
                                    }
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ----------------------------------ITC Brand World------------- */}

            <section className="my-10 px-6">
                <h1 className="text-3xl text-[#1b2355] text-center">ITC <span className="font-semibold"> Brand World</span></h1>
                <div className="my-14 flex carousel gap-3">
                    {
                        ItcBrands.map((items, index) => {
                            return (
                                <BrandCard key={index} item={items} />
                            )
                        })
                    }
                </div>
            </section>


            {/* -----------------------------Sustainability at ITC------------------------- */}

            <section className="my-10 px-5">
                <h1 className="text-3xl text-[#1b2355] text-center"><span className="font-semibold">Sustainability</span> at ITC</h1>
                <div className="my-14 flex carousel gap-3">
                    {
                        Sustainability.map((items, index) => {
                            return (
                                <SustainabilityCard key={index} item={items} />
                            )
                        })
                    }
                </div>
            </section>


            <section className="my-24 px-5 text-black">
                <div className="w-1/2  m-auto flex justify-around px-5">
                    <div className="flex gap-10">
                        <img src="https://www.itcportal.com/assets/images/itc-report-ac-home-2023.png" className=" w-20 h-20" />
                        <div className="flex flex-col gap-8">
                            <h2 className="font-bold text-sm">ITC Report And Accounts 2023</h2>
                            <p className="text-xs">PDF 22.5 MB</p>
                            <MdOutlineFileDownload />
                        </div>
                    </div>
                    <div className="flex gap-12 border-l border-dashed border-gray-400 px-10">
                        <img src="https://www.itcportal.com/assets/images/pdf2.png" className=" w-20 h-20" />
                        <div className="flex flex-col justify-between">
                            <h2 className="font-bold text-sm">ITC Sustainability Report 2023 </h2>
                            <p className="text-xs">PDF 24 MB</p>
                            <MdOutlineFileDownload />
                        </div>
                    </div>
                </div>


            </section>


        </HomeLayout>

    )
}

function SustainabilityCard({ item }) {
    return (
        <div>
            <div className="relative w-72  shadow-xl text-center text-white font-bold">
                <figure><img src={item.img} alt="Shoes" className=" object-contain  rounded-lg " /></figure>
                <div className=" absolute top-0 right-0 bottom-0 left-0 flex items-end justify-between p-4">
                    <p className="text-xs w-2/3 text-left">{item.title}</p>
                    <FaArrowRight className="text-lg p-1 bg-white text-black rounded-full" />
                </div>
            </div>
        </div>
    )
}


function BrandCard({ item }) {
    return (
        <div>
            <div className="relative rounded-lg overflow-hidden group w-64">
                <img src={item.img} className="w-full" />
                <div className="hidden bg-transparent transition-all group-hover:bg-[#CCC] absolute top-0 left-0 right-0 bottom-0 group-hover:block">
                    <div className=" w-full h-full flex justify-center items-center text-[#3f3f3f] text-center px-5">
                        {item.description}
                    </div>
                </div>
            </div>
        </div>
    )
}


function LeadershipSpeaksCard({ items }) {
    return (
        <div>
            <div className=" w-96 font-semibold text-left ">
                <h1 className="text-xl font-bold">{items.title}</h1>
                <h2 className="text-[10px] my-1">{items.subTitle}</h2>
                <p className="text-sm mt-5 opacity-30">{items.description}</p>
                <button className="flex justify-between text-[10px] font-thin items-center w-32 bg-white text-black py-2 px-5 my-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
            </div>
        </div>
    )
}





export default HomePage;