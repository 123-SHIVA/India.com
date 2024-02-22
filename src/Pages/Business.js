import HomeLayout from "../Layouts/HomeLayout";
import { Link } from "react-router-dom";

function Business() {
  return (
    <HomeLayout>
      <section className=" ">
        <div className="text-base text-white bg-blue-900 p-2">
          <Link to="/" className="">
            Home
          </Link>
          /About
        </div>
      </section>

  <section>
    <div  >
  
        <img className="w-full h-96" src="https://www.itcportal.com/assets/images/bluebg.jpg"/>
        <div className="absolute top-4 left-28 bottom-0 flex flex-col justify-center gap-5 text-white font-bold  ">
            <h1 className="text-5xl">ITC Businesses</h1>

        
          </div>
    </div>
  </section>


    
    </HomeLayout>
  );
}

export default Business;
