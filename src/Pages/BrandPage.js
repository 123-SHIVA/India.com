import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { TfiViewListAlt, TfiViewGrid } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import {brandsData, drawerDate} from '../Data/Data.js'
import './BrandPage.css'



function BrandPage() {

    const [tab, setTab] = useState(true);

    return (
        <div className="text-[#282828] bg-white top-0">



            <section className="bg-white" >
                <div className="bg-[#071952] h-80 text-white">

                    <div className="w-[85vw] m-auto">
                        <div className="flex justify-between items-center">
                            <div className="p-5 border-x border-gray-700 h-28 flex items-center" >
                                <Link to="/" target="_blank"><img src="https://www.itcportal.com/brands-microsite/images/logo.png" className="w-[90%]" /></Link>
                            </div>
                            <div className="flex items-center gap-10 text-sm">
                                <div>
                                    <img className="inline px-2 w-11" src="https://www.itcportal.com/brands-microsite/images/cart_ic.png" />
                                    <p className="inline">Store Locator</p>
                                </div>
                                <div>
                                    <img className="inline px-2 w-11" src="https://www.itcportal.com/brands-microsite/images/cart_cart.png" />
                                    <p className="inline">Order online</p>
                                </div>
                                <div className="px-5 h-28  border-x border-gray-700 flex items-center">
                                    <Drawer />



                                </div>
                            </div>
                        </div>

                        <div className="px-10 h-80 bg-[#0080ff] flex flex-col justify-center font-[400] shadow-lg shadow-gray-400 " >
                            <h1 className="text-4xl mb-5">ITC Brands. <br />Touching your life. Everyday.</h1>
                            <p className="text-sm">ITC Brands are designed and customized to delight your diverse tastes, needs and lifestyles. With quality and innovation at the core along with contemporary packaging, customer insights and a formidable nationwide distribution network, it is our unwavering commitment to exceed your expectations, everyday.</p>
                        </div>

                    </div>


                </div>
                <div className="h-36"></div>


            </section>


            {/* -----------navbar---------- */}
            <div className="px-24 sticky top-0 z-20 bg-white text-2xl font-thin pt-2 pb-5 flex justify-between items-center">
                <div>ITC's World class Indian Brands. <span className="inline text-red-600">Delighting 230 million households in India.</span></div>
                <div className="flex items-center gap-2 px-5 ">
                    <TfiViewListAlt onClick={() => setTab(true)} className="text-red-600 hover:text-gray-400 opacity-30" />
                    <TfiViewGrid onClick={() => setTab(false)} className="text-gray-400 hover:text-red-600 opacity-30" />
                </div>

            </div>

            {
                tab &&

                <section className="">

                    {

                        brandsData.map((item, index) => {
                            return (
                                <BrandCards key={index} item={item} />
                            )
                        })
                    }

                </section>
            }


            {
                !tab &&
                <section className="px-24">
                    <div className="grid grid-cols-3 gap-2">
                        {
                            brandsData.map((item, index) => {
                                return (
                                    <div key={index+item} className={item.color}>
                                        <div className="py-8 flex justify-center items-center">
                                            <img src={item.logo} className="" />
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            }



            <footer className="text-xs text-center py-10">
                @ 2024 ITC Limited - All Rights Reserved.

            </footer>



        </div>
    )
}

function BrandCards({ item }) {
    return (
        <div className={item.color}>

            <div className="h-80 w-[80%] m-auto text-white flex text-center ">
                <div className="w-[20%] py-10 px-5 text-sm">
                    <img src={item.logo} />
                    <div className="font-bold">{item.title}</div>
                </div>
                <div className=" border-x text-xs  border-opacity-20 border-gray-200  flex justify-between items-center w-[70%] p-10">
                    {
                        item.products.map((prod, index) => {
                            return (
                                <div key={index+prod}>
                                    <img src={prod.img} />
                                    <div className="shadow-xl h-5 rounded-full"></div>
                                    <div>{prod.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="my-10 ml-10">
                    <button className="flex justify-between text-xs  items-center w-24 bg-white text-red-500 py-2 px-5 font-semibold rounded-2xl">View All<IoIosArrowForward /></button>
                </div>
            </div>
        </div>
    )
}


function Drawer() {
    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">

                <label htmlFor="my-drawer" className=" drawer-button"><GiHamburgerMenu className="text-3xl m-auto" /></label>
            </div>
            <div className="drawer-side z-50 ">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>

                <div className="px-4 w-[100vw] min-h-full bg-[#0a1b38] text-white" >
                    <div className="flex w-[45%] m-auto ">

                    {
                        drawerDate.map((item, index)=>{
                            return(
                                <DrawerItems item={item} key={index+item} />
                            )
                        })
                    }

                    </div>
                    <div className="fixed top-5 right-10">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"> <RxCross1 className="text-4xl" /></label>

                    </div>
                </div>
            </div>
        </div>
    )
}

function DrawerItems({item}) {

    return (
        <div className="pt-24 px-4 h-[100vh] border-x border-opacity-10 border-gray-300" >
            <img src={item.img}  />
            <h1 className="font-semibold my-4 text-sm ">{item.title}</h1>
            <ul className="text-xs font-thin leading-6 text-gray-400">
                {
                    item.products.map((li,i)=>{
                        return(

                            <li key={i+li}>{li}</li>
                        )
                    })
                }
            </ul>

        </div>
    )
}


export default BrandPage;