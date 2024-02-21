import Card from "../Components/Card";
import Carosal from "../Components/Carosal";
import HomeLayout from "../Layouts/HomeLayout";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


function HomePage() {
    return (
        <HomeLayout>

            {/* --------------------------- - Carosal--------------------- */}

            <Carosal />


            {/* ----------------------------Lates Update --------------------- */}

            <section className="px-20 py-8 my-20 w-full bg-gradient-to-r from-green-600 to-yellow-400 text-black">

            <div>


                <div className="my-5 flex justify-between ">

                    <h1 className=" text-3xl text-white font-bold">Latest Updates</h1>
                    <div className="flex items-center gap-2  text-gray-800 ">
                        <button className="flex justify-between text-[11px] font-thin items-center w-32 bg-white py-2 px-5 rounded-2xl">View more <FaArrowRight className="text-[8px]" /></button>
                        <IoIosArrowBack   className="bg-white rounded-full p-1 text-2xl"/>
                        <IoIosArrowForward className=" bg-white rounded-full p-1 text-2xl" />
                    </div>
                </div>


                <div className=" flex gap-7 carousel rounded-box my-10">
                    <div className="carousel-item">
                        <Card/>
                    </div>
                    <div className="carousel-item">
                        <Card/>
                    </div>
                    <div className="carousel-item">
                        
                        <Card/>
                    </div>
                    <div className="carousel-item">
                        <Card/>
                    </div>
                    <div className="carousel-item">
                        <Card/>
                    </div>
                    <div className="carousel-item">
                        <Card/>
                    </div>
                   
                </div>

            </div>

            <div className="relative -bottom-32"> 
                <h1 className=" text-3xl text-white font-bold ">ITC at a Glance</h1>
                
                <div className="bg-white border border-red-500  rounded-lg my-10  ">

                <div className=" flex justify-evenly  text-sm relative -top-6 ">
                    <div className="text-center">
                        <img src="https://www.itcportal.com/assets/images/glace_ic14.png"  className="m-auto"/>
                        <div className="mt-5">
                            <h1 className="text-2xl">43%</h1>
                            <p>of Total energy <br/> is renewable</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <img src="https://www.itcportal.com/assets/images/glace_ic15.png"  className="m-auto"/>
                        <div className="mt-5">
                            <h1 className="text-2xl">40</h1>
                            <p>Platinum Rated <br/> Green Building </p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <img src="https://www.itcportal.com/assets/images/glace_ic16.png"  className="m-auto"/>
                        <div className="mt-5">
                            <h1 className="text-2xl">12 Hotels, <br/> 1 Data Center</h1>
                            <p>LEED Zero Carbon</p>
                        </div>
                    </div>
                    
                    <div className="text-center">
                        <img src="https://www.itcportal.com/assets/images/glace_ic16.png"  className="m-auto"/>
                        <div className="mt-5">
                            <h1 className="text-2xl">2 Hotels</h1>
                            <p>LEED Zero Water</p>
                        </div>
                    </div>
                   
                </div>
                </div>
            </div>
            </section>
        </HomeLayout>

    )
}


export default HomePage;