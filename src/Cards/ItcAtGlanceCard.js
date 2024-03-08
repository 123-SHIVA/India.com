function ItcAtGlanceCard({ item }) {
    return (
        <div className="min-w-full lg:min-w-[23%] text-center flex flex-col ">
            <div className="m-auto text-white bg-orange-600 p-5 text-3xl rounded-full " >{item.logo}</div>
            <div className="mt-5 flex h-[60%]  flex-col  items-center">
                <h1 className="text-2xl w-2/3">{item.title}</h1>
                <p className="w-2/3">{item.subTitle}</p>
            </div>
        </div>
    )
}

export default ItcAtGlanceCard;