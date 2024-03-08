import HomeLayout from "../Layouts/HomeLayout";
import { FaArrowRight } from "react-icons/fa6";
import { socialInvestmentData } from '../Data/Data.js'

function Sustainability() {

  return (
    <HomeLayout>

      <section >
        <img
          className="w-full h-96"
          src="https://cdn.thewire.in/wp-content/uploads/2019/12/23172649/WhatsApp-Image-2019-12-18-at-12.43.49-1024x417.jpeg"
        />
        <div className="relative lg:bottom-24 bottom-16 lg:w-[80%] text-white font-bold  m-auto  ">

          <div className=" bg-[#265d1b] flex justify-between items-center lg:mx-4 ">

            <div className="lg:text-3xl font-[350] px-16  ">
              <h1>Transforming lives and landscapes in India</h1>
              <hr className="w-9 mt-3 border-b-2 border-white"></hr>
            </div>
            <div className="flex flex-col gap-4 items-center bg-[#253722] px-16 lg:py-8  py-2">
              <img 
                src="https://ezop.com/wp-content/uploads/2021/02/save.png"
                className="w-16"
                alt="Sustainability Icon"
              />
              <div className="flex flex-col items-center">
                <h3>Sustainability</h3>
                <div className="text-xs font-thin flex gap-2 items-center">at a glance. <FaArrowRight /> </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --------------------------Why is sustainability important? */}


      <section className=" subpixel-antialiased text-[15px] font-[300]  text-[#231f20] w-[80%] lg:w-[70%] m-auto leading-6 tracking-tight ">
        <h1 className="text-3xl mb-2 font-[400] ">
          Why is sustainability important?
        </h1>
        <p className="p-1">
          For over a century, the world has witnessed remarkable material
          progress. However, this progress has come at a tremendous price,
          creating some of the most serious challenges facing the world today,
          including that of poverty, growing inequity and increasing
          joblessness. Compounding these challenges are the threats of global
          warming and environmental degradation. The model of industrial growth
          pursued since the Industrial Revolution has paid scant attention to
          the planet and its resources. The debilitating impact on air, water,
          soil and bio-diversity not only threatens the present but also the
          socio-economic security of future generations as well.
        </p>
        <p className="p-1">
          India mirrors these challenges. The country is home to 17% of the
          world's population, but has only 2.4% of its arable land, 4% of water
          and 1% of forest resources. India is poised to become the world's most
          populous nation by 2025. To ensure food, water, energy and livelihood
          security to the teeming millions is a daunting task. Addressing social
          challenges like multi-dimensional poverty and job creation has also
          become crying priorities.
        </p>

        <p className="p-1">
          Unstable societies cannot foster sustainable economic growth. The need
          of the hour is a new model of development that will simultaneously
          fuel economic growth, create sustainable livelihoods and replenish the
          environment.
        </p>
      </section>

      {/* -----------------------Sustainability as a driving force for ITC */}

      <section className="flex flex-col lg:flex-row gap-8 lg:text-[#282828] text-white font-[400] my-10">
        <div className="lg:w-1/2 py-16 lg:pl-48 px-10 pr-6 lg:bg-[#7ad0d8] bg-[#265d1b] text-sm tracking-wide font-[350] flex flex-col gap-3 ">
          <hr className="w-7 mt-3 border-b-2 border-[#282828]"></hr>
          <h3 className="text-2xl mb-4">
            Sustainability as a driving force for ITC ONLINE
          </h3>
          <p className="mb-4">
            Any sustainable solution to addressing the grave challenges facing
            the world today requires the concerted efforts of all sections of
            society - policymakers, regulators, business, NGOs and civil
            society. At ITC ONLINE, we believe that with their immense managerial and
            innovative capacity, businesses can contribute significantly towards
            making a transformational change in society.
          </p>
          <p >
            Inspired by this opportunity to serve larger societal purposes, we
            articulated a Vision two decades ago to make the Company a National
            Champion by adopting the credo of 'Putting India First' ' keeping
            Country before Corporation and the Institution before Individual.
            This resolve to build an exemplary Indian enterprise led to the
            creation of innovative business models that synergised the creation
            of economic wealth with the formation of ecological and social
            capital as a unified strategy.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center">
          <img
            src="https://corus3d.org/site/img/icon.png"
            alt="Driving Force Image"
            className="w-80"
          />
        </div>
      </section>

      {/* ------------------------------------Sustainability in Action */}
      <section className="lg:w-[80%] w-[90%] p-5 m-auto text-[#282828] font-[400]">
        <h1 className="text-3xl mb-3 ">
          Sustainability in Action
        </h1>

        <p className="subpixel-antialiased text-sm tracking-wide leading-5">
          Our focus has been on spurring innovative strategies that would enable
          us to make a growing contribution along the triple bottom lines of
          building economic, environmental and social capital. Matching internal
          competencies with the emerging opportunities in a fast growing and
          rapidly evolving economy, we created multiple drivers of growth for
          the Indian economy through a carefully chosen diversified portfolio of
          businesses. Efforts were made to create world-class Indian brands that
          would help in capturing and retaining more value for the Indian
          economy. The vitality of such brands also serve as market anchors to
          enhance the competitiveness of the entire value chain, including that
          of farmers and rural communities. To ensure a positive environmental
          footprint, we adopted a low-carbon growth strategy which focused on
          enhanced use of renewable energy sources as well as reduction in
          specific energy consumption. Efforts to reduce specific water
          consumption at our units and augment rainwater harvesting activities
          contributed to the imperative need to ensure water security. Focused
          waste management initiatives like our flagship WoW (Well-being Out of
          Waste) programme contribute to addressing yet another national
          priority.
        </p>
      </section>


      <section className="lg:w-[80%] w-[90%] m-auto text-[#282828] text-base font-[350] tracking-tight flex flex-row p-5 ">
        <div className=" w-1/2 mx-4 lg:m-4 flex flex-col lg:flex-row items-center">
          <img
            src="https://imaggeo.egu.eu/media/thumbs/previews/2021/03/17/15931.jpg.800x600_q85.jpg"
            alt="Card Image"
            className="lg:w-1/2" />

          <div className=" bg-[#265d1b] h-full text-white lg:w-1/2 p-5">
            <h1>Renewable Energy</h1>
            <h1 className="my-4">
              - About 43% of energy consumption at ITC ONLINE is from renewable sources
            </h1>

          </div>
        </div>

        <div className=" w-1/2 mx-4 lg:m-4 flex flex-col lg:flex-row items-center">
          <img
            src="https://www.destinasian.com/travel/wp-content/uploads/Four-Seasons-Macao-Grand-Suites-665x998.jpg"
            alt="Card Image"
            className="lg:w-1/2" />

          <div className=" bg-[#265d1b] h-full text-white lg:w-1/2 p-5">
          <h1>Responsible luxury</h1>
            <h1 className="my-4">- ITC ONLINE Hotels: Trailblazer in Responsible Luxury</h1>
            <h1>
              - All ITC ONLINE's Premium Luxury Hotels are LEED Platinium Certified
            </h1>

          </div>
        </div>

      
      </section>

      {/* ----------------------------ITC ONLINE's ESG Credentials */}

      <section className="lg:w-[80%] w-[90%] p-5 m-auto text-[#282828] font-[400] text-sm ">
        <h1 className="text-lg f ">ITC ONLINE's ESG Credentials</h1>

        <div className="flex justify-evenly items-center">
          <div className="max-w-sm rounded overflow-hidden ">
            <img
              className="w-full"
              src="https://th.bing.com/th/id/OIP.1FR2wFMLmjfPDIqtaHcKoAHaDt?rs=1&pid=ImgDetMain"
              alt="Image 1"
            />
          </div>
          <div className="max-w-sm rounded overflow-hidden">
            <img
              className="w-full"
              src="https://resource.logitech.com/w_1206,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/sustainability/reports-and-resources/dow-jones.png?v=1"
              alt="Image 2"
            />
          </div>
          <div className="max-w-sm rounded overflow-hidden ">
            <img
              className="w-full"
              src="https://cdn.dorik.com/608882822958b5001128fae9/608882b82958b5001128faeb/images/blog---What-the-IPCC-2022-Mitigation-of-Climate-Change-report-says_m6pfuzbm.png"
              alt="Image 3"
            />
          </div>
        </div>
      </section>

      {/* ----------------------ITC's Social Investment Initiatives */}

      <section className="lg:w-[80%] w-[90%] p-5 m-auto text-[#282828] font-[400] text-sm">
        <div >
          <h1 className="mb-4 font-semibold text-lg">
            ITC ONLINE's Social Investment Initiatives
          </h1>

          <p className="subpixel-antialiased leading-6 tracking-wide">
            To create sustainable livelihoods, we designed interventions that
            respond to the unique challenges of our stakeholder communities. Our
            e-Choupal, watershed development, afforestation and sustainable
            agriculture interventions strengthen agriculture, while programmes
            for economically empowering women and livestock development expand
            rural income streams. Support for primary education, health and
            sanitation as well as skilling and vocational training are helping
            to develop community infrastructure and create better opportunities
            for disadvantaged communities.
          </p>
        </div>
      </section>

      <section className="lg:w-[80%] w-[95%]  p-5 m-auto text-[#282828] font-[400] text-sm">
        <div className="grid lg:grid-cols-4 grid-cols-2 justify-between gap-2">
          {socialInvestmentData.map((item, index) => (
            <div className="overflow-hidden card rounded-none " key={index}>
              <img src={item.image} alt="Card" className="object-contain " />
              <div className="text-white bg-[#68aa94] min-h-24 mt-1 flex flex-wrap justify-center items-center ">
                <p className="w-[60%]">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------ITC's Sustainability Impact */}

      <section className="lg:w-[80%] w-[90%]  p-5 m-auto text-[#282828] font-[350] text-sm">
        <div>
          <h1 className="mb-4 font-semibold text-xl">
            ITC ONLINE's Sustainability Impact
          </h1>

          <p className="subpixel-antialiased leading-6 tracking-wide">
            At ITC ONLINE, we take immense pride in the fact that we are a global
            exemplar in sustainability. Our businesses and value chains today
            support over 60 lakh sustainable livelihoods. We are the only
            company in the world to have achieved the rare distinction of being
            water, carbon and solid waste recycling positive for over a decade,
            despite our expanding manufacturing base. Nearly 43% of our
            Company's energy consumption is today met from renewable sources.
            Our growing green building footprint encompasses factories, hotels,
            offices and employee housing. 41 such buildings have been certified
            at the highest LEED Platinum level. All properties of ITC ONLINE Hotels are
            certified at the highest LEED Platinum level.
          </p>
        </div>
      </section>

      <section className=" flex flex-col lg:flex-row  text-[#282828] font-[350] text-sm">
        <div className="lg:w-1/2 py-16  pr-5 lg:pl-40 px-14 subpixel-antialiased  text-white  bg-[#265d1b] leading-5 tracking-wide ">

          <h3 className="text-2xl  mb-2">
            <hr className="w-7 mt-3 border-b-2 mb-3 border-white"></hr>
            ITC ONLINE's Corporate Social Responsibility
          </h3>
          <p>
            Our commitment to creating societal value is manifest in our CSR
            interventions, implemented under the Company's Social Investments
            Programme, that embraces the most disadvantaged sections of society,
            especially in rural India, through economic empowerment based on
            grassroots capacity building. The footprint of our CSR projects is
            spread over 25 States/Union Territories covering 200 districts.
          </p>
          <button className=" mt-10 text-[10px] font-thin  w-32  text-blue py-1 px-5 border border-white">
            Know more
          </button>
        </div>
        <div className="lg:w-1/2 flex justify-center items-start">
          <img
            src="https://i.ytimg.com/vi/Nz7gkqGGn6w/maxresdefault.jpg"
            alt="Driving Force Image"
            className="w-full h-96 "
          />
        </div>
      </section>

      <section className="lg:w-[80%] w-[95%] p-5 m-auto text-[#282828] font-[350] text-sm tracking-wide leading-6">
        <div className=" p-10">
          <h1 className="text-2xl mb-4 ">ITC ONLINE EHS</h1>

          <p className="subpixel-antialiased  mb-2">
            {" "}
            ITC ONLINE's goal is to achieve the greenest and safest operations across
            all its operations.
          </p>

          <p className="subpixel-antialiased">
            In terms of environmental performance, ITC ONLINE aims to minimise impact
            and create a positive footprint wherever possible. The company also
            ensures a safe and healthy workplace for the wellbeing of its
            employees. All ITC ONLINE facilities are continually ahead of national
            legislation and benchmarked to the best international standards and
            practices in terms of design and infrastructure.
          </p>

          <div className="text-center">
            <button className=" mt-10 text-[10px] w-32  text-blue py-2 text-sm px-5 border border-gray-500 ">
              Know more
            </button>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}



export default Sustainability;
