import { FaArrowRight } from "react-icons/fa6";

function Carosal() {
    return (
        <div>
        <div className="carousel w-full ">


            <div id="item1" className="carousel-item w-full relative h-[70vh]">
                <img src="https://i.postimg.cc/k4BYGmtT/Welcome-to-ITC-SHOP.png" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-32 bottom-0 flex flex-col justify-center gap-5 text-black font-bold  ">
                    <h1 className="text-5xl">Adopting renewable energy</h1>
                    <p>Paving a path to a Sustainable Future</p>
                    <button className="flex justify-between text-xs font-thin items-center w-40 bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
                </div>
            </div>


            <div id="item2" className="carousel-item w-full relative h-[70vh]">
                <img src="https://i.postimg.cc/vHHgVZm8/Welcome-to-ITC-SHOP-1.png" className="w-full h-96 object-cover" />
                <div className="absolute top-0 left-32 bottom-0 flex flex-col justify-center gap-5 text-white font-bold  ">
                    <h1 className="text-5xl">ITC FoodTech</h1>
                    <p>A new vector of growth</p>
                    <button className="flex justify-between text-xs font-thin items-center w-40 bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
                </div>
            </div>


            <div id="item3" className="carousel-item w-full relative h-[70vh]">
                <img src="" />
                <div className="absolute top-0 left-32 bottom-0 flex flex-col justify-center gap-5 text-white font-bold  ">
                    <h1 className="text-5xl">Innovation at ITC</h1>
                    <p>A Fulcrum of growth</p>
                    <button className="flex justify-between text-xs font-thin items-center w-40 bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
                </div>
            </div>


            <div id="item4" className="carousel-item w-full relative h-[70vh]">
                <img src="https://www.itcportal.com/assets/images/home-itcmaars-web.jpg" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-32 bottom-0 flex flex-col justify-center gap-5 text-white font-bold  ">
                    <h1 className="text-5xl">ITCMAARS</h1>
                    <p>Usering in nextgen Agriculture</p>
                    <button className="flex justify-between text-xs font-thin items-center w-40 bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
                </div>
            </div>


            <div id="item5" className="carousel-item w-full relative h-[70vh]">
                <img src="https://www.itcportal.com/assets/images/home-mission-millets-web.jpg" className="w-full h-full object-cover" />
                <div className="absolute top-0 left-32 bottom-0 flex flex-col justify-center gap-5 text-white font-bold  ">
                    <h1 className="text-5xl">ITC Mission Millets</h1>
                    <p>Towards a nutritious and sustainable future</p>
                    <button className="flex justify-between text-xs font-thin items-center w-40 bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
                </div>
            </div>

        </div>


        <div className="flex justify-center w-full py-2 gap-2">
            <a href="#item1" className="btn btn-xs">1</a>
            <a href="#item2" className="btn btn-xs">2</a>
            <a href="#item3" className="btn btn-xs">3</a>
            <a href="#item4" className="btn btn-xs">4</a>
            <a href="#item5" className="btn btn-xs">5</a>
        </div>
    </div>
    )
}


export default Carosal;