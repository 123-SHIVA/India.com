import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { LuClock} from "react-icons/lu";
import {itcAtGlanceData, ItcBussinesses, bigStories, ItcStories, ItcNews} from '../Data/Data.js'
import ItcAtGlanceCard from "../Cards/ItcAtGlanceCard";
import ItcBussinessesCard from "../Cards/ItcBussinessesCard.js";
import '../App.css';


function MediaCentre() {
    return (
        <HomeLayout>

            <section >
                <div className="text-[11px] text-white bg-gradient-to-r from-[#000080de] to-blue-700 p-3 shadow-lg px-10">
                    <Link to="/" className="">
                        Home
                    </Link>
                    / Media Centre
                </div>
            </section>

            {/* ---------------------------- Media center Big Stories----------------------- */}
            <section className="media-centre p-8 pb-36  w-full  text-black ">

                <div className="mb-20 ">
                    <div className="flex justify-between items-end ">
                        <div className="text-white  font-bold">
                            <h1 className=" text-5xl">Media Centre</h1>
                            <p className="text-2xl mt-5">Big Stories</p>
                        </div>
                        <div className="flex items-center gap-2  text-gray-800 ">
                            <button className="flex justify-between text-[11px] font-thin items-center w-32 bg-white py-2 px-5 rounded-2xl">View more <FaArrowRight className="text-[8px]" /></button>
                            <IoIosArrowBack className="bg-white rounded-full p-1 text-2xl" />
                            <IoIosArrowForward className=" bg-white rounded-full p-1 text-2xl" />
                        </div>
                    </div>


                    <div className=" flex gap-7 carousel my-10 ">

                        {
                            bigStories.map((items, index) => {
                                return (
                                    <div className="carousel-item">
                                        <BigStoriesCard item={items} key={index} />
                                    </div>
                                )
                            })
                        }

                    </div>

                </div>

                <div className="relative ">

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


            {/* ----------------------------- ITC Businesses----------------------- */}
            <section className=" my-40 ">

                <div className="w-2/3 m-auto">
                    <h1 className="text-3xl text-[#1b2355] text-center">ITC <span className="font-semibold"> Businesses</span></h1>

                    <div className="grid grid-cols-3 gap-4 my-14">
                        {ItcBussinesses.map((items, index) => {
                            return (
                                <div>
                                    <ItcBussinessesCard key={index} items={items} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


            {/* ---------------------Press Releases----------------------- */}

            <section className="bg-[#0f0544]  px-10 py-14 text-white flex gap-24">
                <div className="w-1/4 ">
                    <h1 className="text-3xl font-bold mb-10">Press Releases</h1>
                    <div className="text-xs text-[#f3f0f0] flex flex-col gap-10 ">
                        <div>
                            <p>Media Statement - Financial Results for the Quarter ended 31st December, 2023</p>
                            <span className="flex items-center gap-2 mt-4"><LuClock />  January 29, 2024</span>
                        </div>
                        <div>
                            <p>Media Statement - Financial Results for the Quarter ended 30th September, 2023</p>
                            <span className="flex items-center gap-2 mt-4"><LuClock /> October 19, 2023</span>
                        </div>
                        <button className="flex justify-between text-[11px] font-thin items-center w-28 bg-white py-2 px-5 rounded-2xl text-black">View all<FaArrowRight className="text-[8px]" /></button>
                    </div>
                </div>

                <div className="w-[100%]">
                    <h1 className="text-3xl font-bold mb-10">Everyday stories from ITC</h1>
                    <div className="grid grid-cols-3 gap-5 ">
                        {
                            ItcStories.map((item, index) => {
                                return (
                                    <ItcStoriesCard key={index} item={item} />
                                )
                            })
                        }
                    </div>
                </div>

            </section>


            {/* ------------------ ITC in the News-------------- */}
            <section className="text-[#3a3a3a] mx-8 my-16 ">
                <h1 className="text-4xl">ITC in <b>the News</b></h1>

                <div className=" grid grid-cols-4 gap-5 my-10">

                    {
                        ItcNews.map((items, index) => {
                            return (
                                <ItcNewsCard item={items} key={index} />
                            )
                        })
                    }

                </div>
                <button className="px-6 py-2 text-center text-sm shadow-xl border rounded-full" >More Media Reports</button>
            </section>

        </HomeLayout>
    )
}




function BigStoriesCard({ item }) {
    return (
        <div className="card  bg-white text-[#272727]  flex-row rounded-md overflow-hidden">
            <figure><img src={item.img} alt="Shoes" className="max-w-64 rounded-md" /></figure>
            <div className="card-body p-8 flex flex-col  max-w-72">
                <h1 className="font-bold text-sm text-[#1b2355]">{item.title}</h1>
                <p className="text-xs leading-5 mt-3 ">{item.description}</p>
                <div className=" mt-5 text-[10px] px-2 flex justify-between  text-[#1b2355]">
                    <p >{item.date}</p>
                    <p>{item.tag} </p>
                </div>
            </div>
        </div>
    )
}



function ItcStoriesCard({ item }) {
    return (
        <div className="card bg-white text-black overflow-hidden w-72 rounded-md">
            <img src={item.img} className="h-[50%]" />
            <div className="p-5 flex flex-col  ">
                <h1 className="font-bold text-xs pb-5">{item.title}</h1>
                <div className="flex justify-between text-xs  absolute bottom-5  left-5 right-5 ">
                    <span className="flex items-center gap-2 mt-4 "><LuClock />{item.date}</span>
                    <div className="flex items-center gap-2 mt-4">read more <img src="https://www.itcportal.com/assets/images/mediacentre/read_moreic.png" /></div>
                </div>
            </div>
        </div>
    )
}



function ItcNewsCard({ item }) {
    return (
        <div className="card  bg-white text-black shadow-lg rounded-md">
            <figure><img src={item.img} alt="Shoes" className="w-full" /></figure>
            <div className="card-body p-5">
                <p className="text-sm">{item.description}</p>
                <p className=" mt-5 text-[10px] px-2">{item.date}</p>
            </div>
        </div>
    )
}


export default MediaCentre;