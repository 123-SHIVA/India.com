import { Link } from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import CaptchaImage from "./CaptchaImage";
import { useState } from "react";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { countary, moreCardData } from '../Data/Data.js'
import './ContactUs.css';

function ContactUsPage() {

    const [captchaStatus, setCaptchaStatus] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        if (!captchaStatus) {
            alert('Incorrect');
        }
        else {


            emailjs
                .sendForm('service_jo93pjm', 'template_aursd0j', form.current, {
                    publicKey: 'sDXNB0DgK2-eTioGZ',
                })
                .then(
                    () => { },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
        e.target.reset();
    };


    return (
        <HomeLayout>

            <section className="bg-stone-100 text-[#282828] text-sm">

                <div className="w-[80%] m-auto flex justify-between items-center  ">
                    <div className=" p-3   text-red-700 font-thin ">
                        <Link to="/" className="text-[#282828]">
                            <hr className="w-6 mt-3  border-b-2 mb-1 border-[#282828]"></hr>
                            Home /
                        </Link>
                        Contact Us
                    </div>
                    <div className=" text-[#002c7f] text-2xl font-[350] ">
                        CONTACT US
                    </div>
                    <div></div>
                    <div></div>

                </div>

            </section>

            <section className="w-[75%] m-auto text-black text-xl my-10">
                <h1>Write to us <hr className="w-16 mt-2  border-b mb-1 border-[#282828]"></hr></h1>

                <div className="my-6 flex justify-between">


                    {/* -----------------form------------------- */}

                    <div className="w-[70%]  text-sm text-[#282828] font-thin  ">
                        <form ref={form} onSubmit={sendEmail} key={"contac_us_page"}>
                            <p className="font-thin text-[10px] text-right text-rose-700">Fields marked with * are compulsory</p>
                            <div className="grid grid-cols-2 items-end gap-3 tracking-tighter text-xs">
                                <div className="">
                                    <label htmlFor="first-name"> * NAME</label>
                                    <input type="text" id="first-name" required name="first-name" placeholder=" First Name" className="block w-full bg-transparent outline-none p-3 border mt-2" />
                                </div>
                                <div className="">
                                    <label htmlFor="last-name">   </label>
                                    <input type="text" id="last-name" name="last-name" placeholder=" Last Name" className="block w-full bg-transparent outline-none p-3 border mt-2" />
                                </div>
                                <div className="">
                                    <label htmlFor="organisation">ORGANISATION</label>
                                    <input type="text" id="oganisation" name="organisation" className="block w-full bg-transparent outline-none p-3 border mt-2" />
                                </div>
                                <div className="">
                                    <label htmlFor="email"> * EMAIL</label>
                                    <input type="text" id="email" required name="email" placeholder="name@gmail.com" className="block w-full bg-transparent outline-none p-3 border mt-2" />
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="address"> ADDRESS</label>
                                    <textarea rows="5" cols="20" id="address" name="address" placeholder="" className="block w-full bg-transparent outline-none p-3 border mt-2 resize-none" />
                                </div>

                                <div className="">
                                    <label htmlFor="country"> * COUNTRY</label>
                                    <select id="country" required name="country" className="block w-full bg-transparent outline-none p-3 border mt-2">
                                        <option >select</option>
                                        {
                                            countary.map((item, index) => {
                                                return (
                                                    <option key={index} value={item}  >{item}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>

                                <div className="">
                                    <label htmlFor="phone"> * PHONE</label>
                                    <input type="text" id="phone" required name="phone" className="block w-full bg-transparent outline-none p-3 border mt-2" />
                                </div>

                                <div className="">
                                    <label htmlFor="state"> * STATE</label>
                                    <input type="text" id="state" required name="state" placeholder="state" className="block w-full bg-transparent outline-none p-3 border mt-2" />
                                </div>

                                <div className="">
                                    <label htmlFor="role">* I AM HERE FOR</label>
                                    <select name="role" id="role" className="block w-full bg-transparent outline-none p-3 border mt-2" >
                                        <option value="">Select</option>
                                        <option value="Other~Y~Trade Enquiries~T">Trade Enquiries</option>
                                        <option value="Investor~N~Investor Information~I">Shareholder Information</option>
                                        <option value="Other~N~Feedback / Suggestion~F">Feedback / Suggestion</option>
                                        <option value="Other~N~General Information~G">General Information</option>
                                        <option value="Student Academia~N~Careers/Internships~C">Careers / Internships</option>

                                    </select>
                                </div>

                                <div className="">
                                    <label htmlFor="city"> * CITY</label>
                                    <input type="text" id="city" required name="city" placeholder="city" className="block w-full bg-transparent outline-none p-3 border mt-2" />
                                </div>


                                <div className="">
                                    <label htmlFor="business">*BUSINESS</label>
                                    <select name="business" id="business" className="block w-full bg-transparent outline-none p-3 border mt-2">
                                        <option value="">Select</option>
                                        <option value="Cigarettes">Cigarettes</option>
                                        <option value="Foods">Foods</option>
                                        <option value="Personal Care">Personal Care</option>
                                        <option value="Education and Stationery">Education and Stationery</option>
                                        <option value="Safety Matches">Safety Matches</option>
                                        <option value="Agarbattis">Agarbattis</option>
                                        <option value="Hotels">Hotels</option>
                                        <option value="Paperboards and Specialty Papers">Paperboards and Specialty Papers</option>
                                        <option value="Packaging">Packaging</option>
                                        <option value="Agri Business">Agri Business</option>
                                        <option value="Leaf Tobacco">Leaf Tobacco</option>
                                        <option value="Information Technology">Information Technology</option>

                                    </select>
                                </div>

                                <div className="col-span-2">
                                    <label htmlFor="comment">* COMMENTS (maximum 500 character)</label>
                                    <textarea rows="5" cols="20" id="comment" name="comment" className="block w-full bg-transparent outline-none p-3 border mt-2 resize-none" />
                                </div>

                                <div className="col-span-2">

                                    <CaptchaImage setCaptchaStatus={setCaptchaStatus} />
                                </div>

                                <div className="col-span-2">
                                    <input id="submit-button"
                                        className='bg-[#001e56] w-full text-base font-[300] text-white py-3 rounded-sm mt-5 hover:bg-[#004ea6] transition-colors'
                                        type="submit" value='Submit' />
                                </div>

                            </div>

                        </form>

                    </div>

                    {/* -------------------more cards ------------------------- */}

                    <div className="w-[25%] text-white">
                        {
                            moreCardData.map((item, index) => {
                                return (
                                    <div ky={index} className={`${item.color} py-5 px-8 text-sm m-2`}>
                                        <div className="text-3xl mb-6">
                                            {item.icon}
                                        </div>
                                        <p>{item.title}</p>
                                        <p className="text-xs mt-3">{item.description}</p>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>

            </section >




        </HomeLayout >
    )
}


export default ContactUsPage;