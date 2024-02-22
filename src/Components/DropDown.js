

const about = {
    title: "About ITC",
    description: "ITC is one of India's foremost private sector companies with a Gross Revenue of ₹ 69,481 crores and Net Profit of ₹ 18,753.31 crores (as on 31.03.2023) with presence in FMCG, Hotels, Packaging, Paperboards & Specialty Papers, Agri & IT Businesses.",
    button: "Explore About ITC",
    ourProfile: ["History and Evolution"],

}



function DropDown({ componentFor }) {
    return (
        <>
            {/* {componentFor === "about" && */}
                <div className="flex font-semibold gap-10 ">

                    <div className="text-[#39A7FF] w-5/12">
                        <h1 className="text-3xl">About ITC</h1>
                        <p className="my-10">ITC is one of India's foremost private sector companies with a Gross Revenue of ₹ 69,481 crores and Net Profit of ₹ 18,753.31 crores (as on 31.03.2023) with presence in FMCG, Hotels, Packaging, Paperboards & Specialty Papers, Agri & IT Businesses.</p>
                        <button className="py-2 px-5 border border-[#39A7FF] rounded-2xl">Explore About ITC</button>
                    </div>
                    <div className="flex justify-evenly w-7/12">

                        <div className="text-gray-700 flex flex-col gap-6 ">
                            <ul className="font-thin text-xs">
                                <li className="font-semibold">Our Profile</li>
                                <li>History and Evolution</li>
                            </ul>
                            <ul className="font-thin text-xs">
                                <li className="font-semibold">Our Value</li>
                                <li>Vision & Mission</li>
                                <li>Core Values</li>
                                <li>Corporate Strategies</li>
                                <li>Corporate Governance</li>
                                <li>Code of Conduct</li>
                            </ul>
                            <ul className="font-thin text-xs">
                                <li className="font-semibold">ITC Research and Development</li>
                            </ul>
                        </div>
                        <div className="text-gray-700 flex flex-col gap-6 ">

                            <ul className="font-thin text-xs">
                                <li className="font-semibold">ITC Leadership</li>
                                <li>Board of Directors</li>
                                <li>CMC</li>
                                <li>Business Heads</li>
                            </ul>

                            <ul className="font-thin text-xs">
                                <li className="font-semibold">Leadership Speaks</li>
                            </ul>
                        </div>
                        <div className="text-gray-700 flex flex-col gap-6 ">

                            <ul className="font-thin text-xs">
                                <li className="font-semibold">Our Policies</li>
                                <li>Investor Relations</li>
                                <li>Awards & Recognitions</li>
                            </ul>
                        </div>
                    </div>
                </div>

            {/* } */}
        </>
    )
}

export default DropDown;