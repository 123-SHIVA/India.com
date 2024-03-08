import { FaArrowRight } from "react-icons/fa6";

function Carosal() {
    return (
        <div>
        <div className="carousel w-full text-white ">


            <div id="item1" className="carousel-item w-full relative h-[70vh] bg-black">
                <img src="https://www.repsol.com/content/dam/repsol-corporate/es/energia-e-innovacion/Que-es-huerto-solar.jpg.transform/rp-rendition-md/image.jpg" className="w-full h-full object-cover opacity-70 " />
                <div className="absolute top-0 left-32 bottom-0 flex flex-col justify-center gap-5 font-bold  ">
                    <h1 className="text-5xl">Adopting renewable energy</h1>
                    <p>Paving a path to a Sustainable Future</p>
                    <button className="flex justify-between text-xs font-thin items-center w-40 bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
                </div>
            </div>


            <div id="item2" className="carousel-item w-full relative h-[70vh] bg-black">
                <img src="https://aarkayfoods.in/images/products/dairy-powder/banner.jpg" className="w-full h-full object-cover opacity-70 " />
                <div className="absolute top-0 left-32 bottom-0 flex flex-col justify-center gap-5 text-white font-bold  ">
                    <h1 className="text-5xl">ITC FoodTech</h1>
                    <p>A new vector of growth</p>
                    <button className="flex justify-between text-xs font-thin items-center w-40 bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
                </div>
            </div>


            <div id="item3" className="carousel-item w-full relative h-[70vh] bg-black">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmtXXGPn4IIYM_rXW4Yu8F6oQxoJ2-Gprqyw&usqp=CAU"  className="w-full h-full object-cover opacity-70 " />
                <div className="absolute top-0 left-32 bottom-0 flex flex-col justify-center gap-5 text-white font-bold  ">
                    <h1 className="text-5xl">Innovation at ITC</h1>
                    <p>A Fulcrum of growth</p>
                    <button className="flex justify-between text-xs font-thin items-center w-40 bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
                </div>
            </div>


            <div id="item4" className="carousel-item w-full relative h-[70vh] bg-black">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWlzuCx0_IZg-38rmbTS6H6P00IZX04z_zxQ&usqp=CAU" className="w-full h-full object-cover  opacity-70 " />
                <div className="absolute top-0 left-32 bottom-0 flex flex-col justify-center gap-5 text-white font-bold  ">
                    <h1 className="text-5xl">ITCMAARS</h1>
                    <p>Usering in nextgen Agriculture</p>
                    <button className="flex justify-between text-xs font-thin items-center w-40 bg-white text-black py-2 px-5 rounded-2xl">Read more <FaArrowRight className="text-[8px]" /></button>
                </div>
            </div>


            <div id="item5" className="carousel-item w-full relative h-[70vh] bg-black">
                <img src="https://c.ndtvimg.com/2022-03/brodu8s_noodles_625x300_02_March_22.jpg" className="w-full h-full object-cover  opacity-70 " />
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