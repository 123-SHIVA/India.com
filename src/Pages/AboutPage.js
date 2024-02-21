import {Link} from "react-router-dom";
import aboutImg from "../Images/bannerbg1.jpg";

function AboutPage()
{
    return (
        <div className="bg-white">
            <section className=" ">

             <div className="text-base text-white bg-blue-900 p-3"><Link to="/" className="">Home</Link>/About</div>
            </section>
            <section className="about-banner">
              <img src={aboutImg} className="h-96"/>
            </section>
            <section>
                <div className="left text-blue-800">
                   <h1 className=" text-50xl Font-extrabold">About ITC</h1>
                   <div className="w-1/2 text-lg">
                    <p>ITC is a leading multi-business Indian enterprise with presence in <b>FMCG, Paper, Packaging, Agribusiness, Hotels and IT</b>, and is a global Sustainability exemplar.</p>
                   </div>
                </div>


            </section>
        </div>
    )
}

export default AboutPage;