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
import "../App.css";
import DropDown from "./DropDown";
import {Link} from "react-router-dom"

const navElemnts = [
  "About ITC",
  "Business",
  "Brand",
  "Sustainability",
  "Media Center",
];

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
              <a>
                <IoIosMail className="p-1 rounded-full bg-blue-950 text-white" />
              </a>
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

      <div className="navbar shadow-md bg-white text-black px-8 sticky top-0 z-50  ">
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
            <div className="flex-1  " >
              <Link to="/" className=" text-xl"><img src="https://www.itcportal.com/images/logo_itc.png"/></Link>
            </div>
            <div>
              <ul className="flex gap-5 px-1 text-sm font-bold text-blue-900 ">

                <li className="dropdown dropdown-hover static z-0 ">
                  <Link to="/about"
                    tabIndex={0}
                    role="button"
                    className="flex gap-1 items-center"
                  >
                    About ITC
                    <MdKeyboardArrowDown />
                  </Link>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  z-10 menu bg-white  text-black left-0 right-0 p-16 h-[60vh] "
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
                    <MdKeyboardArrowDown />
                  </Link>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  z-[1] menu bg-white  text-black left-0 right-0 p-16 h-[60vh] "
                  >
                    <DropDown componentFor={"Business"} />
                  </ul>
                </li>

                <li className="dropdown dropdown-hover static">
                <Link to="/brand"
                    tabIndex={0}
                    role="button"
                    className="flex gap-1 items-center"
                  >
                    Brand
                    <MdKeyboardArrowDown />
                  </Link>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  z-[1] menu bg-white  text-black left-0 right-0 p-16 h-[60vh] "
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
                    <MdKeyboardArrowDown />
                  </Link>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  z-[1] menu bg-white  text-black left-0 right-0 p-16 h-[60vh] "
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
                    <MdKeyboardArrowDown />
                  </Link>
                  <ul
                    tabIndex={0}
                    className="dropdown-content  z-[1] menu bg-white  text-black left-0 right-0 p-16 h-[60vh] "
                  >
                    <DropDown componentFor={"Media Center"} />
                  </ul>
                </li>

                

                <li className="dropdown dropdown-hover static">
                  <a>Investor Relations</a>
                </li>
                <li className="dropdown dropdown-hover static">
                  <a>Careers</a>
                </li>
                <li className="dropdown dropdown-hover static">
                  <a>ITC Resource</a>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Navbar;
