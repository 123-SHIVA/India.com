import {IoIosAdd } from "react-icons/io";


function ItcBussinessesCard({ items }) {
    return (
        <div className="card shadow-md shadow-gray-200 rounded-md  overflow-hidden relative">
            <div className="group">
                {/* first div */}
                <div className="bg-[#1b2355] h-[3px] transition-all group-hover:h-48 absolute top-0 bottom-0 left-0 right-0  ">

                </div>
                {/* second div */}
                <div className=" px-5 py-8  text-gray-800 h-48 flex flex-col justify-between group-hover:bg-transparent  bg-transparent relative z-10">
                    <h2 className="w-1/2 font-semibold group-hover:text-white ">{items.title} </h2>
                    <div>
                        <div className=" flex justify-between items-center text-orange-600 group-hover:text-white ">
                            <IoIosAdd className="text-2xl group-hover:text-white " />
                            {items.icon}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default ItcBussinessesCard;