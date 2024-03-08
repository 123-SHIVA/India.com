import { IoMdSearch, IoIosMail } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { IoLocationSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import linkedin from "../images/linkedin.png";
import insta from "../images/insta.png";
import twitter from "../images/x.png";
import { useState } from "react";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import ItcLogo from "../images/itc-online-high-resolution-logo-transparent.png";
import "../App.css";
import './Navbar.css';


function Navbar() {
  const [serachEnable, setSearchEnable] = useState(false);

  return (
    <>
      {/* --------------first navbar---------------- */}
      <div>
        <div className=" bg-stone-200 text-black text-sm  flex justify-between py-2 px-8 ">
          <div className="flex items-center gap-3 ">
            <div className="flex text-2xl gap-2">
              <a href="https://www.linkedin.com/">
                {" "}
                <img className="w-7" src={linkedin} />
              </a>
              <a href="https://twitter.com/">
                {" "}
                <img className="w-7" src={twitter} />
              </a>
              <a href="https://www.instagram.com/">
                {" "}
                <img className="w-7" src={insta} />
              </a>
            </div>
            <div className="h-full border-r-2 border-gray-800"></div>
            <div className="flex text-2xl gap-1">
              <Link to="/contact-us" >
                <IoIosMail className="p-1 rounded-full bg-blue-950 text-white" />
              </Link>
              <a>
                {" "}
                <IoLocationSharp className="p-1 rounded-full bg-blue-950 text-white" />
              </a>
              <a>
                <FaShoppingCart className="p-1 rounded-full bg-blue-950 text-white" />
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-3 font-semibold cursor-pointer">
            <div className="flex gap-2" onClick={() => setSearchEnable(true)}>
              <IoMdSearch className="text-gray-800 text-2xl" />
              <span>search site</span>
            </div>
            <button className="px-3 py-2 rounded-2xl text-white text-xs  bg-[#E21818]">
              Fraud Alert
            </button>
          </div>
        </div>
      </div>

      {/* --------------second navbar---------------- */}

      <div className="navbar shadow-md bg-white text-black px-8 sticky top-0 z-50 justify-between ">
        {serachEnable ? (
          <div className="w-4/12 m-auto border-b border-gray-400 p-2 ">
            <input
              type="text"
              placeholder=" Type your search query here"
              className="w-full text-lg bg-transparent outline-none placeholder:text-black placeholder:font-semibold "
            />
            <BsArrowRight className="text-3xl " />
            <RxCross1
              className="text-2xl absolute right-10"
              onClick={() => setSearchEnable(false)}
            />
          </div>
        ) : (
          <>
            <div className="flex " >
              <Link to="/" className=" text-xl"><img className="w-20" src={ItcLogo} /></Link>
            </div>


            <div className="hidden lg:block">
              <ul className="flex gap-5 px-1 text-sm font-bold text-blue-900 ">
                <NavbarElement />
              </ul>
            </div>


            <div className="lg:hidden">

              <div className="drawer drawer-end ">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">

                  <label htmlFor="my-drawer-4" className="drawer-button "><GiHamburgerMenu /></label>
                </div>
                <div className="drawer-side">
                  <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                  <ul className="menu  p-4  min-h-full bg-white gap-5  text-sm font-bold text-blue-900 w-[60vw]">
                    <NavbarElement />
                  </ul>
                </div>
              </div>
            </div>


          </>
        )}
      </div>
    </>
  );
}


function NavbarElement() {
  return (
    <>

      <li className="dropdown dropdown-hover static z-0 ">
        <Link to="/about"
          tabIndex={0}
          role="button"
          className="flex gap-1 items-center"
        >
          About ITC Online
          <MdKeyboardArrowDown className="hidden lg:block" />
        </Link>
        <ul
          tabIndex={0}
          className="dropdown-content  z-10 menu bg-white  text-black left-0 right-0 p-16 h-[60vh] hidden lg:block"
        >
          <DropDown componentFor={"about"} />
        </ul>
      </li>

      <li className="dropdown dropdown-hover static">
        <Link to="/business"
          tabIndex={0}
          role="button"
          className="flex gap-1 items-center"
        >
          Business
          <MdKeyboardArrowDown className="hidden lg:block" />
        </Link>
        <ul
          tabIndex={0}
          className="dropdown-content  z-[1] menu bg-white  text-black left-0 right-0 p-16 h-[60vh] hidden lg:block"
        >
          <DropDown componentFor={"Business"} />
        </ul>
      </li>

      <li className="dropdown dropdown-hover static">
        <Link
          to="/brands"
          tabIndex={0}
          role="button"
          className="flex gap-1 items-center"
        >
          Brand
          <MdKeyboardArrowDown className="hidden lg:block" />
        </Link>
        <ul
          tabIndex={0}
          className="dropdown-content  z-[1] menu bg-white  text-black left-0 right-0 p-16 h-[60vh] hidden lg:block"
        >
          <DropDown componentFor={"Brand"} />
        </ul>
      </li>

      <li className="dropdown dropdown-hover static">
        <Link to="/Sustainability"
          tabIndex={0}
          role="button"
          className="flex gap-1 items-center"
        >
          Sustainability
          <MdKeyboardArrowDown className="hidden lg:block" />
        </Link>
        <ul
          tabIndex={0}
          className="dropdown-content  z-[1] menu bg-white  text-black left-0 right-0 p-16 h-[60vh] hidden lg:block "
        >
          <DropDown componentFor={"Sustainability"} />
        </ul>
      </li>

      <li className="dropdown dropdown-hover static">
        <Link
          to="/media-centre"
          tabIndex={0}
          role="button"
          className="flex gap-1 items-center"
        >
          Media Center
          <MdKeyboardArrowDown className="hidden lg:block" />
        </Link>
        <ul
          tabIndex={0}
          className="dropdown-content  z-[1] menu bg-white  text-black left-0 right-0 p-16 h-[60vh] hidden lg:block "
        >
          <DropDown componentFor={"Media Center"} />
        </ul>
      </li>



      <li className="dropdown dropdown-hover static">
        <Link
          to="/investor"
          tabIndex={0}
          role="button"
          className="flex gap-1 items-center"
        >
          Investor Relation
        </Link>
      </li>
      <li className="dropdown dropdown-hover static">
        <Link
          to="/career"
          tabIndex={0}
          role="button"
          className="flex gap-1 items-center"
        >
          Career
          <MdKeyboardArrowDown className="hidden lg:block" />
        </Link>
        <ul
          tabIndex={0}
          className="dropdown-content  z-[1] menu bg-white  text-black left-0 right-0 p-16 h-[60vh] hidden lg:block "
        >
          <DropDown componentFor={"Media Center"} />
        </ul>
      </li>
      <li className="dropdown dropdown-hover static">
        <Link
          to="/ITC-Resources"
          tabIndex={0}
          role="button"
          className="flex gap-1 items-center"
        >
          ITC online Resources
        </Link>
        
      </li>





    </>
  )
}

export default Navbar;
