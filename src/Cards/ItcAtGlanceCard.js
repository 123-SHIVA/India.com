function ItcAtGlanceCard({ item }) {
    return (
        <div className="min-w-full lg:min-w-[23%] text-center  ">
            <img src={item.logo} className="m-auto" />
            <div className="mt-5 flex  flex-col  items-center">
                <h1 className="text-2xl w-2/3">{item.title}</h1>
                <p className="w-2/3">{item.subTitle}</p>
            </div>
        </div>
    )
}

export default ItcAtGlanceCard;