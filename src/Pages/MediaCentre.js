import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack, IoIosAdd, IoIosArrowForward } from "react-icons/io";
import { LuBedDouble, LuClock, LuMonitorPlay, LuBookOpenCheck } from "react-icons/lu";
import { GrBasket } from "react-icons/gr";
import { LiaToiletPaperSolid } from "react-icons/lia";
import { GiWheat, GiMatchHead } from "react-icons/gi";
import { TfiPackage } from "react-icons/tfi";
import { FaHandHoldingWater } from "react-icons/fa";

import '../App.css'


const LatestUpdate = [
    {


        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-solologues-080224.jpg",
        title: "ITC and a business case for Diversity, Equity and Inclusion: Saturday Solologues",
        description: "What happens when an enterprise links its Diversity, Equity and Inclusivity #DEI goals with business objectives? Innovation is...",
        date: "13 jan 2024",
        tag: "The Economic times BrandEquity"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-plateful-070224.jpg",
        title: "Plateful of vision: Sanjiv Puri takes us through ITC's ambitious menu",
        description: "ITC Chairman Sanjiv Puri and Business Standard journalist Ishita Ayan Dutt had an in-depth conversation a day after ITC's thir....",
        date: "03 Feb 2024",
        tag: "Business Standard"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-focus-070224.jpg",
        title: "Focus is on sustainable and inclusive growth': Sanjiv Puri",
        description: "In an interview with THE WEEK, ITC Chairman Sanjiv Puri talks about the 'ITC Next' vectors of growth - Digital and Sustainability; pillars of..",
        date: "11 Feb 2024",
        tag: "The Week"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-next-201223.jpg",
        title: "ITC Next: How do you turn around an elephant and make it dance?",
        description: "In an in-depth interview with ET Online, ITC Chairman Sanjiv Puri highlighted the key tenets of ITC's diversification into FMCG includin...",
        date: "10 Dec 2023",
        tag: "The Economic Times"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-climate-171123.jpg",
        title: "As India gallops, so will FMCG industry: Sanjiv Puri, ITC CMD",
        description: "The key driver to unleashing FMCG growth through a virtuous cycle of consumtion, investment and income lies in creating gainful...",
        date: "01 Jan 2024",
        tag: "The Economic Times"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-dairy-240124.jpg",
        title: "Leveraging Al in dairy and beverage manufacturing to ensure product quality: Sanjay Singal...",
        description: "In an interview with ET Digital, Sanjay Singal, Chief Operating Officer, Dairy & Beverages, ITC Foods, said that digital...",
        date: "04 Jan 2024",
        tag: "The Economic Times"
    }
]


const ItcBussinesses = [
    {
        title: "FMCG",
        icon: <GrBasket className="text-5xl" />
    },
    {
        title: "Hotels",
        icon: <LuBedDouble className="text-5xl" />
    },
    {
        title: "Paperboards & Speciality Papers",
        icon: <LiaToiletPaperSolid className="text-5xl" />
    },
    {
        title: "Packaging",
        icon: <TfiPackage className="text-5xl" />
    },
    {
        title: "Agri Business",
        icon: <GiWheat className="text-5xl" />
    },
    {
        title: "Information Technology",
        icon: <LuMonitorPlay className="text-5xl" />
    },
    {
        title: "Education and Stationary",
        icon: <LuBookOpenCheck className="text-5xl" />
    },
    {
        title: "Agarbattis & Safety Matches",
        icon: <GiMatchHead className="text-5xl" />
    },
    {
        title: "Personal Care",
        icon: <FaHandHoldingWater className="text-5xl" />
    },

]


const ItcStories = [
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/everyday-stories-thumb-bhadrachalam-greenco-240124.jpg",
        title: "ITC's Bhadrachalam Unit Gets Prestigious GreenCo Platinum+ Certification",
        date: "05 Jan 2024"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/everyday-stories-thumb-leed-zero-water-050124.jpg",
        title: "3 ITC Hotels are LEED Zero Water Certified!",
        date: "28 Dec 2023"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/everyday-stories-thumb-idc-050124.jpg",
        title: "ITC's Paperboards and Specialty Papers Business is the Asia-Pacific winner of IDC Future Enterprise Awards 2023",
        date: "08 Dec 2023"
    },
]


const ItcNews = [
    
    {
        img: "https://www.itcportal.com/assets/images/latest-updates-080224.jpg",
        description: "Focus is on sustainable and inclusive growth' Sanjiv puri  ",
        date: "11 feb 2024"
    },
    {
        img: "https://www.itcportal.com/assets/images/latest-updates-080224-1.jpg",
        description: "Plateful of vision 'Sanjiv puri",
        date: "03 feb 2024"
    },
    {
        img: "https://www.itcportal.com/assets/images/latest-updates-080224-2.jpg",
        description: "ITC and a business case for Diversity, Equity and inclusion",
        date: "13 jan 2024"
    },
    {
        img: "https://www.itcportal.com/assets/images/quarterly-result-thumb.jpg",
        description: "Financial Results for the Quarter Ended December",
        date: "29 jan 2024"
    },
]

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

                            <div className=" flex justify-around  text-sm relative -top-6 ">
                                <div className="text-center">
                                    <img src="https://www.itcportal.com/assets/images/glace_ic14.png" className="m-auto" />
                                    <div className="mt-5">
                                        <h1 className="text-2xl">43%</h1>
                                        <p>of Total energy <br /> is renewable</p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <img src="https://www.itcportal.com/assets/images/glace_ic15.png" className="m-auto" />
                                    <div className="mt-5">
                                        <h1 className="text-2xl">40</h1>
                                        <p>Platinum Rated <br /> Green Building </p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <img src="https://www.itcportal.com/assets/images/glace_ic16.png" className="m-auto" />
                                    <div className="mt-5">
                                        <h1 className="text-2xl">12 Hotels, <br /> 1 Data Center</h1>
                                        <p>LEED Zero Carbon</p>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <img src="https://www.itcportal.com/assets/images/glace_ic16.png" className="m-auto" />
                                    <div className="mt-5">
                                        <h1 className="text-2xl">2 Hotels</h1>
                                        <p>LEED Zero Water</p>
                                    </div>
                                </div>

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
                                    <ItcBussinesseCard key={index} items={items} />
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




function LatestUpdateCard({ item }) {
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


function ItcBussinesseCard({ items }) {
    return (
        <div className="card shadow-md shadow-gray-200 rounded-md  overflow-hidden relative">
            <div className="group">
                {/* first div */}
                <div className="bg-[#1b2355] h-[3px] transition-all group-hover:h-48 absolute top-0 bottom-0 left-0 right-0  ">

                </div>
                {/* second div */}
                <div className=" px-5 py-8  text-gray-800 h-48 flex flex-col justify-between group-hover:bg-transparent  bg-transparent relative z-10">
                    <h2 className="w-1/2 font-semibold group-hover:text-white ">{items.title} </h2>
                    <div>
                        <div className=" flex justify-between items-center text-orange-600 group-hover:text-white ">
                            <IoIosAdd className="text-2xl group-hover:text-white " />
                            {items.icon}
                        </div>
                    </div>
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