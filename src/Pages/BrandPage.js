import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";
import { TfiViewListAlt, TfiViewGrid } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

import './BrandPage.css'



const brandsData = [
    {
        color: "bg-[#ef0000]",
        products: [
            { name: "Aashirvaad Organic Whole Wheat Atta", img: "https://www.itcportal.com/brands-microsite/images/aashirvaad_home/whole-wheat-atta-home-171023.png" },
            { name: "Aashirvaad Svasti Paneer Slice", img: "https://www.itcportal.com/brands-microsite/images/aashirvaad/svasti-paneer-slice-111023.png" },
            { name: "Ashirvaad Mithaas peda", img: "https://www.itcportal.com/brands-microsite/images/aashirvaad/mithaas-peda-22124.png" }
        ],
        title: "Atta, Vermicelli, Ghee, Salt, Spices, Ready To Eat Meals & Instant Mixes",
        logo: "https://www.itcportal.com/brands-microsite/images/aashirvaad_home/aashirvaad_home_logo.png"
    },
    {
        color: "bg-[#C32030]",
        products: [
            { name: "Sunfeast Farmlite Super Millets", img: "https://www.itcportal.com/brands-microsite/images/sunfeast_home/sunfeast39.png" },
            { name: "Sunfeast Mom's Magic Butter fills", img: "https://www.itcportal.com/brands-microsite/images/sunfeast_home/sunfeast42.png" },
            { name: "Sunfeast thin Arrowroot", img: "https://www.itcportal.com/brands-microsite/images/sunfeast_home/sunfeast40.png" }
        ],
        title: "Biscuits, Cookies & Cakes",
        logo: "https://www.itcportal.com/brands-microsite/images/sunfeast_home/sunfeast.jpg"
    },
    {
        color: "bg-[#FFD202]",
        products: [
            { name: "Tedhe medhe Allo Bhujia", img: "https://www.itcportal.com/brands-microsite/images/bingo_home/bingo18.png" },
            { name: "Bingo! No Rulz Mix Puffs Tomato", img: "https://www.itcportal.com/brands-microsite/images/bingo_home/bingo19.png" },
            { name: "Bingo! Cheese Nachos", img: "https://www.itcportal.com/brands-microsite/images/bingo_home/bingo20.png" }
        ],
        title: "Potato Chips & Finger Snacks",
        logo: "https://www.itcportal.com/brands-microsite/images/bingo_home/bingo.jpg"
    },
    {
        color: "bg-[#74271C]",
        products: [
            { name: "Ready to Dine- Daily Treats", img: "https://www.itcportal.com/brands-microsite/images/kitchen_india_home/kitchens-of-india15.png" },
            { name: "Ready to Dine - Fourmet Delight", img: "https://www.itcportal.com/brands-microsite/images/kitchen_india_home/kitchens-of-india16.png" }
        ],
        title: "Ready To Eat Gourmet Cuisine, Masala Mixes, Chutneys & Conserves",
        logo: "https://www.itcportal.com/brands-microsite/images/kitchen_india_home/koi-logo.png"
    },
    {
        color: "bg-[#FEED24]",
        products: [
            { name: "Quick Mealz Chicken Delight", img: "https://www.itcportal.com/brands-microsite/images/yippee_home/yippee09.png" },
            { name: "Yippee! Saucy Masala", img: "https://www.itcportal.com/brands-microsite/images/yippee_home/yippee01b.png" },
            { name: "Tricolor Pasta", img: "https://www.itcportal.com/brands-microsite/images/yippee/yippee02.png" }
        ],
        title: "Instant Noodles & Pasta",
        logo: "https://www.itcportal.com/brands-microsite/images/yippee_home/yippee2.jpg"
    },
    {
        color: "bg-[#077F39]",
        products: [
            { name: "Chatpata Jamum", img: "https://www.itcportal.com/brands-microsite/images/bnatural/bnatural-chatpata-jamun-111023.png" },
            { name: "Fruite N Bits Mixed  Fruite", img: "https://www.itcportal.com/brands-microsite/images/bnatural_home/bnatural19.png" },
            { name: "Coconut Water", img: "https://www.itcportal.com/brands-microsite/images/bnatural_home/bnatural22.png" }
        ],
        title: "Juices & Beverages",
        logo: "https://www.itcportal.com/brands-microsite/images/bnatural_home/bnatural-logo.png"
    },
    {
        color: "bg-[#19468D]",
        products: [
            { name: "Mint-o GOL Orange Chew", img: "https://www.itcportal.com/brands-microsite/images/minto_home/minto03.png" },
            { name: "Mint-o Fresh max", img: "https://www.itcportal.com/brands-microsite/images/minto_home/minto05.png" }
        ],
        title: "Confectionery",
        logo: "https://www.itcportal.com/brands-microsite/images/minto_home/minto-logo.png"

    },
    {
        color: "bg-[#213970]",
        products: [
            { name: "Candyman Choco Double Eclairs", img: "https://www.itcportal.com/brands-microsite/images/candyman/candyman-new-04.png" },
            { name: "Candyman Tadka", img: "https://www.itcportal.com/brands-microsite/images/candyman/candyman-new-05.png" },
            { name: "Candyman Toffichoo", img: "https://www.itcportal.com/brands-microsite/images/candyman/candyman-new-06.png" }
        ],
        title: "Confectionery",
        logo: "https://www.itcportal.com/brands-microsite/images/candyman_home/candyman-logo.png"
    },
    {
        color: "bg-[#E13D31]",
        products: [
            { name: "Jelimals- Space Runner", img: "https://www.itcportal.com/brands-microsite/images/jelimals/jelimals-new05.png" },
            { name: "Jelimals- Tasty Sparkles", img: "https://www.itcportal.com/brands-microsite/images/jelimals/jelimals-new02.png" },
            { name: "Jelimals - Space jellu -Strawberry", img: "https://www.itcportal.com/brands-microsite/images/jelimals/jelimals-new03.png" }
        ],
        title: "Confectionery",
        logo: "https://www.itcportal.com/brands-microsite/images/jelimals/jelimals-home-logo.png"
    },
    {
        color: "bg-[#32251C]",
        products: [
            { name: "Fabelle Finesse", img: "https://www.itcportal.com/brands-microsite/images/fabelle_home/fabelle-finesse-thumb-180723.png" },
            { name: "Boxed Chocolate", img: "https://www.itcportal.com/brands-microsite/images/fabelle_home/fabelle04.png" },
            { name: "Luxury Chocolate Bar", img: "https://www.itcportal.com/brands-microsite/images/fabelle_home/fabelle21home.png" }
        ],
        title: "Luxury Chocolate",
        logo: "https://www.itcportal.com/brands-microsite/images/fabelle_home/fabelle-logo.png"

    },

    {
        color: "bg-[#3E2B2F]",
        products: [
            { name: "Nicamalai", img: "https://www.itcportal.com/brands-microsite/images/sunbean_home/sunbean-nicamalai3.png" },
            { name: "Panagiri", img: "https://www.itcportal.com/brands-microsite/images/sunbean_home/sunbean-nicamalai2.png" },
            { name: "Sunbean Beater  Caffe", img: "https://www.itcportal.com/brands-microsite/images/sunbean_home/sunbean-01.png" }
        ],
        title: "Gourmet Coffee & Beaten Coffee",
        logo: "https://www.itcportal.com/brands-microsite/images/sunbean_home/sunbean-logo.png"
    },

    {
        color: "bg-[#ED62A3]",
        products: [
            { name: "Anti Acne", img: "https://www.itcportal.com/brands-microsite/images/charmis/charmis-face-serum-01.png" },
            { name: "Cold cream", img: "https://www.itcportal.com/brands-microsite/images/charmis_home/charmis_home.png" },
            { name: "face wash", img: "https://www.itcportal.com/brands-microsite/images/charmis_home/charmis_home_facew.png" }
        ],
        title: "Cream",
        logo: "https://www.itcportal.com/brands-microsite/images/charmis_home/charmis-logo_home.jpg"
    },

    {
        color: "bg-[#000000]",
        products: [
            { name: "Classmate Ar Notebooks", img: "https://www.itcportal.com/brands-microsite/images/classmate_home/ar-notebooks.png" },
            { name: "Classmate Interaktiv origami craftbooks", img: "https://www.itcportal.com/brands-microsite/images/classmate_home/interaktiv-origami-craftbooks.png" },
            { name: "pulse 3D Notebooks", img: "https://www.itcportal.com/brands-microsite/images/classmate_home/pulse-3d-notebooks.png" }
        ],
        title: "Notebooks, Pens, Pencils, Art Stationery, Geometry Boxes & Scholastic Products",
        logo: "https://www.itcportal.com/brands-microsite/images/classmate_home/classmate-logo.png"
    },

    {
        color: "bg-[#282828]",
        products: [
            { name: "Notepads", img: "https://www.itcportal.com/brands-microsite/images/paperkraft_home/notepads.png" },
            { name: "Beethoven Pen Silver", img: "https://www.itcportal.com/brands-microsite/images/paperkraft_home/pens.png" },
            { name: "Green Impression Series", img: "https://www.itcportal.com/brands-microsite/images/paperkraft_home/green-impression.png" }
        ],
        title: "Premium Notebooks, Diaries, Notepads & Pens",
        logo: "https://www.itcportal.com/brands-microsite/images/paperkraft_home/paperkraft-logo.png"
    },

    {
        color: "bg-[#943C3C]",
        products: [
            { name: "Homelites matches", img: "https://www.itcportal.com/brands-microsite/images/homelite-home/homelite-pack.png" }
        ],
        title: "Homelites matches",
        logo: "https://www.itcportal.com/brands-microsite/images/homelite-home/homelite-ligo.png"
    },

]

const drawerDate = [
    {
        img: "https://www.itcportal.com/brands-microsite/images/food_icon.png",
        title: "FOODS",
        products: ["Aashirvaad", "Sunfeast", "Bingo", "Kitechens of India", "SunFeast Yippee", "B Naturals", "SunFeaset Milkshake", "mint-o", "Candyman", "Jelimals", "GumOn", "Fabelle", "Sunbean", "ITC Master Chef", "Farmland", "Sunrise"]
    },
    {
        img: "https://www.itcportal.com/brands-microsite/images/personal_care_icon.png",
        title: "PERSONAL CARE",
        products: ["EDW Essenza", "Dermafique", "Fiama", "Vivel", "Engage", "Superia", "Nimyle", "Nimwash", "Savlon", "Shower to Shower", "Charmis"]
    },
    {
        img: "https://www.itcportal.com/brands-microsite/images/education_icon.png",
        title: "EDUCATION",
        products: ["Classmate", "Paperkraft"]
    },
    {
        img: "https://www.itcportal.com/brands-microsite/images/matches_icon.png",
        title: "MATCHES & AGARBATTI",
        products: ["AIM, Mangledeep", "Homelites"]
    }
]

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
                                <BrandCards key={indexedDB} item={item} />
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
                                    <div className={item.color}>
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

function BrandCards({ item, className }) {
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
                                <div>
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
                                <DrawerItems item={item} key={index} />
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

                            <li>{li}</li>
                        )
                    })
                }
            </ul>

        </div>
    )
}


export default BrandPage;