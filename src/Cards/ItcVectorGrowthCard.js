function ItcVectorGrowthCard({value}) {
    return (
        <div>
            <div className="relative lg:w-64  w-32  shadow-xl text-center text-white font-bold overflow-hidden bg-black rounded-lg">
                <figure><img src={value.img} alt="Shoes" className=" object-cover  w-full h-96 opacity-70" /></figure>
                <div className=" absolute top-0 right-0 bottom-0 left-0 flex flex-col items-center justify-between py-5">
                    <div>
                        <h2 className="lg:text-2xl  ">{value.title}</h2>
                        <p className="lg:text-xs text-[10px]">{value.description}</p>
                    </div>
                    
                    <img src="https://www.itcportal.com/assets/images/vector_ic_link.png" />
                   
                </div>
            </div>
        </div>
    ) 
}

export default ItcVectorGrowthCard;