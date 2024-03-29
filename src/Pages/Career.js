import HomeLayout from "../Layouts/HomeLayout";
import '../App.css'



const careersData = [
  {
    color: 'bg-[#6b1871] bg-opacity-90 ',
    logo: "https://www.itcportal.com/images/careers-icon1.png",
    title: "Know ITC ONLINE",
    description:
      <ul>
        <li>ITC ONLINE</li>
        <li>ITC ONLINE Today</li>
        <li>Core Values</li>
        <li>Corporate Governance</li>
        <li>ITC ONLINE Brands</li>
        <li>ITC ONLINE Businesses</li>
        <li>Sustainability</li>
      </ul>,

  },{
    color: 'bg-[#6b1871] bg-opacity-90 ',
    logo: "https://www.itcportal.com/images/careers-icon1.png",
    title: "Know ITC ONLINE",
    description:
      <ul>
        <li>ITC ONLINE</li>
        <li>ITC ONLINE Today</li>
        <li>Core Values</li>
        <li>Corporate Governance</li>
        <li>ITC ONLINE Brands</li>
        <li>ITC ONLINE Businesses</li>
        <li>Sustainability</li>
      </ul>,

  }
  ,{
    color: 'bg-[#6b1871] bg-opacity-90 ',
    logo: "https://www.itcportal.com/images/careers-icon1.png",
    title: "Know ITC ONLINE",
    description:
      <ul>
        <li>ITC ONLINE</li>
        <li>ITC ONLINE Today</li>
        <li>Core Values</li>
        <li>Corporate Governance</li>
        <li>ITC ONLINE Brands</li>
        <li>ITC ONLINE Businesses</li>
        <li>Sustainability</li>
      </ul>,

  }
  ,{
    color: 'bg-[#6b1871] bg-opacity-90 ',
    logo: "https://www.itcportal.com/images/careers-icon1.png",
    title: "Know ITC ONLINE",
    description:
      <ul>
        <li>ITC ONLINE</li>
        <li>ITC ONLINE Today</li>
        <li>Core Values</li>
        <li>Corporate Governance</li>
        <li>ITC ONLINE Brands</li>
        <li>ITC ONLINE Businesses</li>
        <li>Sustainability</li>
      </ul>,

  }
  ,{
    color: 'bg-[#6c1871] bg-opacity-90 ',
    logo: "https://www.itcportal.com/images/careers-icon1.png",
    title: "Know ITC ONLINE",
    description:
      <ul>
        <li>ITC ONLINE</li>
        <li>ITC ONLINE Today</li>
        <li>Core Values</li>
        <li>Corporate Governance</li>
        <li>ITC Brands</li>
        <li>ITC Businesses</li>
        <li>Sustainability</li>
      </ul>,

  }
]

function Career() {





  return (
    <HomeLayout>

      <div id="item1" className="carousel-item  relative">

        <img src="https://www.itcportal.com/images/carrer_bg.jpg" className=" hidden lg:block" />

        <div className="lg:absolute top-0 left-0 right-0  lg:w-full lg:h-full bg-orange-700  lg:bg-transparent flex lg:flex-row flex-col text-white font-bold  ">
          <div>
            <img src="https://i.postimg.cc/Wtc27fWh/generate-a-similar-image-like-this-to-remove-the-owner-rights-6.jpg" alt="Career Image" className="sm:w-full sm:h-full" />
          </div>
          <div className="my-10 flex flex-col justify-center items-center px-10 font-[350]">
            <div className="flex gap-5">
              <h1 className="lg:text-4xl text-2xl">Career</h1>
              <p className="border-x  text-xs sm:text-sm lg:px-10 px-4">Building winning businesses.<br />Building business leaders.<br />Creating value for India.</p>
              <img src="https://th.bing.com/th/id/OIP.yLQD9RDEocvSfP9jf0kb4QAAAA?rs=1&pid=ImgDetMain" alt="Hub Image" className="" />
            </div>

            <div className="mt-10 flex flex-col gap-5 justify-center items-center text-lg leading-5">
              <p className="sm:w-1/2 text-center" >If Innovation and creativity pushes the adrenalin in you, then ITC ONLINE is the kind of orgainsation that should satisfy your quest. </p>
              <div className="text-center font-semibold text-xs">
               
                <h5>Marketing</h5>
              </div>
            </div>

          </div>

        </div>
      </div>




      {/* section --2 */}
      <div className="flex justify-center gap-10 m-10">
        {
          careersData.map((item, index) => {
            return (
              <CareersCard item={item} key={index} />
            )
          })
        }
      </div>



    </HomeLayout>
  )

}


function CareersCard({item}) {
  console.log('------------ ',item)
  return (

    <div className="careerCardBg">
      <div className={item.color}>
        <div className="p-5  relative shadow-xl text-center text-white font-bold flex flex-col gap-3">
          <div className="flex gap-4">
            <img src={item.logo} />
            <p>{item.title}</p>
          </div>

          <div className="border-y text-left text-xs leading-5 py-5">

          {item.description}
          </div>

          <div className="flex gap-5 text-xs"> 
            <p>Click to Know nore</p>
            <img src="https://www.itcportal.com/images/cr-arrow.png"/>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Career;