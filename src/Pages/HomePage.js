import Card from "../Components/Card";
import Carosal from "../Components/Carosal";
import ItcVectorGrowthCard from "../Components/ItcVectorGrowthCard";
import HomeLayout from "../Layouts/HomeLayout";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


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


                    <div className=" flex gap-7 carousel rounded-box my-10">
                        <div className="carousel-item">
                            <Card />
                        </div>
                        <div className="carousel-item">
                            <Card />
                        </div>
                        <div className="carousel-item">

                            <Card />
                        </div>
                        <div className="carousel-item">
                            <Card />
                        </div>
                        <div className="carousel-item">
                            <Card />
                        </div>
                        <div className="carousel-item">
                            <Card />
                        </div>

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
                                   <LeadershipSpeaksCard items={items}/>
                                )
                                })
                            }
                        </div>
                    </div>
                </div>

            </section>


            <section className="h-[50vh] my-10 text-center">
                <h1 className="text-4xl text-[#1b2355] font-semibold">ITC Businesses</h1>

            </section>


        </HomeLayout>

    )
}


function LeadershipSpeaksCard({items}) {
    return (
        <div>
            <div className=" w-96 font-semibold ">
                <h1 className="text-xl font-bold">{items.title}</h1>
                <h2 className="text-[10px] my-1">{items.subTitle}</h2>
                <p className="text-sm mt-5 opacity-30">{items.description}</p>
                <button className="flex justify-between text-[10px] font-thin items-center w-32 bg-white text-black py-2 px-5 my-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
            </div>
        </div>
    )
}

export default HomePage;