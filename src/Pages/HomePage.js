import Carosal from "../Components/Carosal";
import ItcVectorGrowthCard from "../Components/ItcVectorGrowthCard";
import HomeLayout from "../Layouts/HomeLayout";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack, IoIosAdd, IoIosArrowForward } from "react-icons/io";
import { LuBedDouble, LuMonitorPlay } from "react-icons/lu";
import { GrBasket } from "react-icons/gr";
import { LiaToiletPaperSolid } from "react-icons/lia";
import { GiWheat } from "react-icons/gi";
import { TfiPackage } from "react-icons/tfi";
import { MdOutlineFileDownload } from "react-icons/md";


const vectorOfGrowth = [
    {
        title: "ITCMAARS",
        description: "Ushering in NExtgen Agriculture",
        img: "https://www.itcportal.com/assets/images/vector-mar_thumb.jpg"
    },
    {
        title: "ITC FOODTECH",
        description: "A New vector of Growth",
        img: "https://www.itcportal.com/assets/images/vector-food_thumb.jpg"
    },
    {
        title: "SUSTAINABLE PACKAGING",
        description: "Solution for the future",
        img: "https://www.itcportal.com/assets/images/vector-sus_thumb.jpg"
    },
    {
        title: "CLIMATE SMART AGRICULTURE",
        description: "Building resilience in india's agriculture sector",
        img: "https://www.itcportal.com/assets/images/vector-cli_thumb.jpg"
    }, {
        title: "DIGITAL TRANSFORM AT ITC",
        description: "For a Future Tech Organisation",
        img: "https://www.itcportal.com/assets/images/vector-digi_thumb.jpg"
    }

]


const leadershipSpeaks = [
    {
        title: "'Focus is on sustainable and inclusive growth': Sanjiv Puri",
        subTitle: "The Week",
        description: "In an interview with THE WEEK, ITC Chairman Sanjiv Puri talks about the 'ITC Next' vectors of growth - Digital and Sustainability, pillars of ITC's competitiveness",
    },
    {
        title: "Plateful of vision: Sanjiv Puri takes us through ITC's ambitious menu",
        subTitle: "Business Standard",
        description: "ITC Chairman Sanjiv Puri and Business Standard journalist Ishita Ayan Dutt had an in-depth conversation a day after ITC's third-quarter results were declared",
    },

    {
        title: "As India gallops, so will FMCG industry: Sanjiv Puri, ITC CMD",
        subTitle: "The Economic Times",
        description: "The key driver to unleashing FMCG growth through a virtuous cycle of consumption, investment and income lies in creating gainful livelihood opportunities...",
    },
    {
        title: "Mr. Sanjiv Puri in Conversation with Ms. Shereen Bhan, CNBCTV18",
        subTitle: " CNBCTV18",
        description: "Mr Sanjiv Puri, Chairman ITC, was recently interviewed by Ms Shereen Bhan, Managing Editor, CNBCTV18. In this candid conversation, Mr Puri shared...",
    },
    {



        title: "ITC: Nation First Transforming for our Shared TomorrowsS",
        subTitle: "",
        description: "CMD's Address at 112th AGM.",
    },
    {
        title: "Corporates need to be responsibly competitive and lead in climate action: ITC chairman Sanjiv Puri",
        subTitle: "The Times of India",
        description: "In his message in ITC's Sustainability and Integrated Report 2023, 'Shaping The Future', ITC Chairman Sanjiv Puri reiterated the significant....",
    },
    {
        title: "Sustainability, digitalisation key components of ITC's future: Sanjiv Puri",
        subTitle: "Hindu Businessline",
        description: "ITC Chairman Sanjiv Puri, gave a disaggregated view of the company's plans in a recent conversation with journalists, discussing new...",
    }
]



const ItcBussinesses = [
    {
        title: "FMCG",
        icon: <GrBasket className="text-5xl" />,
        color: "orange"
    },
    {
        title: "Hotels",
        icon: <LuBedDouble className="text-5xl" />,
        color: "purple"
    },
    {
        title: "Paperboards & Speciality Papers",
        icon: <LiaToiletPaperSolid className="text-5xl" />,
        color: "red"
    },
    {
        title: "Packaging",
        icon: <TfiPackage className="text-5xl" />,
        color: "yellow"
    },
    {
        title: "Agri Business",
        icon: <GiWheat className="text-5xl" />,
        color: "green"
    },
    {
        title: "Information Technology",
        icon: <LuMonitorPlay className="text-5xl" />,
        color: "sky"
    },
]


const ItcBrands = [
    {
        img: "https://www.itcportal.com/assets/images/mint-o.jpg",
        description: "Confectionary"
    },
    {
        img: "https://www.itcportal.com/assets/images/bnatural.jpg",
        description: "Juices and Beverages"
    },
    {
        img: "https://www.itcportal.com/assets/images/jelimals-logo.jpg",
        description: "Confectionary"
    },
    {
        img: "https://www.itcportal.com/assets/images/fabelle.jpg",
        description: "Luxury Chocolate"
    },
    {
        img: "https://www.itcportal.com/assets/images/gumon.jpg",
        description: "Gums"
    },
    {
        img: "https://www.itcportal.com/assets/images/sunbean.jpg",
        description: "Gourment Coffe and Beaten Coffee"
    },
    {
        img: "https://www.itcportal.com/assets/images/itc-master-chef.jpg",
        description: "Blended Spices, Frozen Prawns, Snacks and Kababs"
    },
    {
        img: "https://www.itcportal.com/assets/images/superia.jpg",
        description: "Soaps & Shampoos"
    },
    {
        img: "https://www.itcportal.com/assets/images/savlon.jpg",
        description: "Antiseptic Liquid, Soap and handwashes "
    },
    {
        img: "https://www.itcportal.com/assets/images/farmland.jpg",
        description: "Freah Potatoes, Frozen vegetables and Tomato puree"
    },
    {
        img: "https://www.itcportal.com/assets/images/shower-to-shower.jpg",
        description: "Prickely Heat Powder"
    },
    {
        img: "https://www.itcportal.com/assets/images/homelites.jpg",
        description: "Homelites matches"
    },
    {
        img: "https://www.itcportal.com/assets/images/aashirvaad.jpg",
        description: "Att, Vermicelli, Gree, Salt, Spices, Ready to eat Meals and instant mixes"
    },
    {
        img: "https://www.itcportal.com/assets/images/yippee.jpg",
        description: "Instant Noodles and Pasta"
    },
    {
        img: "https://www.itcportal.com/assets/images/itc-sunrise.jpg",
        description: "Sunrise Pure! A lagacy of inovation for over 100 years!"
    },
    {
        img: "https://www.itcportal.com/assets/images/fiama.jpg",
        description: "Shower Gel, Bathing bars, Handwashes, Essential oils, body oils and  bathing Accessories"
    },
]


const Sustainability = [
    {
        img: "https://www.itcportal.com/assets/images/icon4-sustainability.jpg",
        title: "E-Choupal Ecosystem"
    },
    {
        img: "https://www.itcportal.com/assets/images/icon9-sustainability.jpg",
        title: "Afforestation Programme"
    },
    {
        img: "https://www.itcportal.com/assets/images/icon3-sustainability.jpg",
        title: "Watershed Developement Programme"
    },
    {
        img: "https://www.itcportal.com/assets/images/icon10-sustainability.jpg",
        title: "Sustainable Agriculture"
    },
    {
        img: "https://www.itcportal.com/assets/images/icon2-sustainability.jpg",
        title: "LiveStock Development"
    },
    {
        img: "https://www.itcportal.com/assets/images/icon1-sustainability.jpg",
        title: "Women Empowerment"
    },
    {
        img: "https://www.itcportal.com/assets/images/icon5-sustainability.jpg",
        title: "Primary Education"
    },
    {
        img: "https://www.itcportal.com/assets/images/icon6-sustainability.jpg",
        title: "Skilling & Vocational Training"
    },
    {
        img: "https://www.itcportal.com/assets/images/icon8-sustainability.jpg",
        title: "Sotid Waste Management"
    }
]

const LatestUpdate = [
    {
        img: "https://www.itcportal.com/assets/images/latest-updates-11.jpg",
        description: "Pioneering  the Green Building Movement in india",
        date: ""
    },
    {
        img: "https://www.itcportal.com/assets/images/latest-updates-12.jpg",
        description: "Towards Water Security for All",
        date: ""
    },
    {
        img: "https://www.itcportal.com/assets/images/latest-updates-13.jpg",
        description: "ITC's Biodiversity conversation programme",
        date: ""
    },
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
    {
        img: "https://www.itcportal.com/assets/images/home-latest-updates-141223.jpg",
        description: "ITC Institutional Investors & Financial Analysts Day",
        date: "12 dec 2023"
    }
]


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

                            <div className=" flex justify-evenly  text-sm relative -top-6 ">
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
                                    <ItcBussinesseCard key={index} items={items} />
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


function LatestUpdateCard({item}) {
    return (
        <div className="card w-64 bg-white text-black shadow-lg rounded-md">
            <figure><img src={item.img} alt="Shoes" /></figure>
            <div className="card-body p-5">
                <p className="text-sm">{item.description}</p>
                <p className=" mt-5 text-[10px] px-2">{item.date}</p>
            </div>
        </div>
    )
}

export default HomePage;