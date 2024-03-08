

function LatestUpdateCard({ item }) {
    return (
        <div className="card w-64 h-72 bg-white text-black shadow-lg rounded-md overflow-hidden">
            <img src={item.img} alt="Shoes" className="h-[60%] object-cover" />
            <div className="card-body p-5">
                <p className="text-sm">{item.description}</p>
                <p className=" mt-5 text-[10px] px-2">{item.date}</p>
            </div>
        </div>
    )
}

export default LatestUpdateCard;