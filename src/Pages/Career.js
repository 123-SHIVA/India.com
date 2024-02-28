import HomeLayout from "../Layouts/HomeLayout";

function Career(){


return (
   <HomeLayout>
   <div className="flex  ">
    <div className="flex-item lg:w-[50%] w-[100%] m-4">
        <img src="https://www.itcportal.com/images/careers-mrigaban.jpg" alt="Career Image"/>
    </div>
    <div class="flex  w-[50%] m-4 bg-orange-500 text-white">
        <div className=" flex p-6">
            <h1 className="text-2xl font-bold">Career</h1>
            <p className="mt-4">Building winning businesses.<br/>Building business leaders.<br/>Creating value for India.</p>
            <img src="https://www.itcportal.com/images/hub.png" alt="Hub Image" className=""/>
        </div>
    </div>
</div>



   </HomeLayout>
)

}

export default  Career;