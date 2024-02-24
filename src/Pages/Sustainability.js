import { useState } from "react";
import HomeLayout from "../Layouts/HomeLayout";
import { FaArrowRight } from "react-icons/fa6";

function Sustainability() {
  const data = [
    {
      image: "https://www.itcportal.com/images/icon1-sustainability.jpg",
      description: "e-Choupal Ecosystem",
    },
    {
      image: "https://www.itcportal.com/images/icon2-sustainability.jpg",
      description: "Afforestation Programme",
    },
    {
      image: "https://www.itcportal.com/images/icon3-sustainability.jpg",
      description: "Wateshed development Programme",
    },
    {
      image: "https://www.itcportal.com/images/icon4-sustainability.jpg",
      description: "Sustainable Agriculture",
    },
    {
      image: "https://www.itcportal.com/images/icon5-sustainability.jpg",
      description: "Livestock Development",
    },
    {
      image: "https://www.itcportal.com/images/icon6-sustainability.jpg",
      description: "Women Empowerment",
    },
    {
      image: "https://www.itcportal.com/images/icon7-sustainability.jpg",
      description: "Primary Education",
    },
    {
      image: "https://www.itcportal.com/images/icon8-sustainability.jpg",
      description: "Skillin & Vocational Training",
    },
    {
      image: "https://www.itcportal.com/images/icon9-sustainability.jpg",
      description: "Health & Sanitation",
    },
    {
      image: "https://www.itcportal.com/images/icon10-sustainability.jpg",
      description: "Solid Waste Management",
    },
  ];

  return (
    <HomeLayout>
      <div>
        <img
          className="w-full h-96"
          src="https://www.itcportal.com/images/sus_introbanner.jpg"
        />
        <div className="absolute top-84 left-28 bottom-0 flex flex-col justify-center gap-5 text-white font-bold  ">

          <div class="h-40 w-screen border border-black bg-[#265d1b] flex justify-center items-center">

            <div className="text-3xl items-end ">
              <h1>Transforming lives and landscapes in India</h1>
            </div>
            <div class="m-5 h-40 w-3/2 justify-end items-center ">
              <img
                src="https://www.itcportal.com/images/sus_key_ic_in.png"
                class="mr-2"
                alt="Sustainability Icon"
              />
              <div class="text-white">
                <h3>Sustainability</h3>
                <p>at a glance.</p>
              </div>
              <img
                src="https://www.itcportal.com/images/arrow_brand.png"
                class="ml-2"
                alt="Arrow Icon"
              />
            </div>
          </div>
        </div>
      </div>

      <div className=" subpixel-antialiased text-xl   text-[#231f20] p-20  h-1/3">
        <h1 className="text-3xl mb-5" text-6xl>
          Why is sustainability important?
        </h1>
        <p>
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
        <br></br>

        <p>
          India mirrors these challenges. The country is home to 17% of the
          world's population, but has only 2.4% of its arable land, 4% of water
          and 1% of forest resources. India is poised to become the world's most
          populous nation by 2025. To ensure food, water, energy and livelihood
          security to the teeming millions is a daunting task. Addressing social
          challenges like multi-dimensional poverty and job creation has also
          become crying priorities.
        </p>
        <br></br>

        <p>
          Unstable societies cannot foster sustainable economic growth. The need
          of the hour is a new model of development that will simultaneously
          fuel economic growth, create sustainable livelihoods and replenish the
          environment.
        </p>
      </div>

      <section class="flex flex-col lg:flex-row gap-8 h-screen">
        <div class="lg:w-1/2 p-20 bg-[#265d1b]">
          <h3 class="text-2xl text-black font-bold mb-2">
            Sustainability as a driving force for ITC
          </h3>
          <p class="mb-4 text-black">
            Any sustainable solution to addressing the grave challenges facing
            the world today requires the concerted efforts of all sections of
            society - policymakers, regulators, business, NGOs and civil
            society. At ITC, we believe that with their immense managerial and
            innovative capacity, businesses can contribute significantly towards
            making a transformational change in society.
          </p>
          <p className=" text-black" text-black>
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
        <div class="lg:w-1/2 flex justify-center items-start">
          <img
            src="https://www.itcportal.com/images/driving_force.png"
            alt="Driving Force Image"
            class="w-96 h-68 mt-2"
          />
        </div>
      </section>

      <div className=" p-10">
        <h1 className="text-2xl mb-4 text-black">
          Why is sustainability important?
        </h1>

        <p className="subpixel-antialiased text-xl text-[#6e6164]">
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
      </div>

      <div class="flex flex-row p-5">
        <div class="  m-4 flex items-center">
          <div>
            <img
              src="https://www.itcportal.com/images/images1.jpg"
              alt="Card Image"
              class="w-full h-auto "
            />
          </div>
          <div className=" bg-[#265d1b] h-60 text-white w-1/2 align-right text-xl p-5">
            <h1>Renewable Energy</h1>
            <h1>
              - About 43% of energy consumption at ITC is from renewable sources
            </h1>
            <img
              src="https://www.itcportal.com/images/arrow_brand.png"
              class="ml-2"
              alt="Arrow Icon"
            />
          </div>
        </div>

        <div class=" m-4 flex items-center">
          <div>
            <img
              src="https://www.itcportal.com/images/images2.jpg"
              alt="Card Image"
              class="w-full h-auto "
            />
          </div>
          <div className=" bg-[#265d1b] h-60 text-white w-1/2 align-right text-xl p-5">
            <h1>Responsible luxury</h1>
            <h1>- ITC Hotels: Trailblazer in Responsible Luxury</h1>
            <h1>
              - All ITC's Premium Luxury Hotels are LEED Platinium Certified
            </h1>
            <img
              src="https://www.itcportal.com/images/arrow_brand.png"
              class="ml-2"
              alt="Arrow Icon"
            />
          </div>
        </div>
      </div>

      <section className="p-10">
        <h1 className="text-black text-2xl text-bold">ITC's ESG Credentials</h1>

        <div class="flex justify-around items-center">
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://www.itcportal.com/images/esg-credential-01.jpg"
              alt="Image 1"
            />
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://www.itcportal.com/images/esg-credential-02.jpg"
              alt="Image 2"
            />
          </div>
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              class="w-full"
              src="https://www.itcportal.com/images/esg-credential-03.jpg"
              alt="Image 3"
            />
          </div>
        </div>
      </section>

      <section>
        <div className=" p-10">
          <h1 className="text-2xl mb-4 text-black">
            ITC's Social Investment Initiatives
          </h1>

          <p className="subpixel-antialiased text-xl text-[#6e6164]">
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

      <section>
        <div className="flex justify-center flex-wrap">
          {data.map((item, index) => (
            <div className="flex flex-col items-center m-2 border border-gray-300 rounded-md p-4 max-w-xs">
              <img src={item.image} alt="Card" className="w-full mb-4" />
              <div className="text-white bg-[#11abb0] h-32 w-48 p-4">
                <p>{item.description}</p>
                <img
                  src="https://www.itcportal.com/images/arrow_brand.png"
                  className=""
                  alt="Arrow Icon"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className=" p-10">
          <h1 className="text-2xl mb-4 text-black">
            ITC's Sustainability Impact
          </h1>

          <p className="subpixel-antialiased text-xl text-[#6e6164]">
            At ITC, we take immense pride in the fact that we are a global
            exemplar in sustainability. Our businesses and value chains today
            support over 60 lakh sustainable livelihoods. We are the only
            company in the world to have achieved the rare distinction of being
            water, carbon and solid waste recycling positive for over a decade,
            despite our expanding manufacturing base. Nearly 43% of our
            Company's energy consumption is today met from renewable sources.
            Our growing green building footprint encompasses factories, hotels,
            offices and employee housing. 41 such buildings have been certified
            at the highest LEED Platinum level. All properties of ITC Hotels are
            certified at the highest LEED Platinum level.
          </p>
        </div>
      </section>

      <section class="flex flex-col lg:flex-row  h-1/2">
        <div class="lg:w-1/2 p-20 subpixel-antialiased  text-white text-xl bg-[#265d1b] ">
          _
          <h3 class="text-2xl font-bold mb-2">
            ITC's Corporate Social Responsibility
          </h3>
          <p class="mb-4 ">
            Our commitment to creating societal value is manifest in our CSR
            interventions, implemented under the Company's Social Investments
            Programme, that embraces the most disadvantaged sections of society,
            especially in rural India, through economic empowerment based on
            grassroots capacity building. The footprint of our CSR projects is
            spread over 25 States/Union Territories covering 200 districts.
          </p>
          <button className=" mt-10 flex justify-between text-[10px] font-thin items-center w-40  text-blue py-2 px-5 border border-white rounded-2xl">
            Know more <FaArrowRight className="text-[8px]" />
          </button>
        </div>
        <div class="lg:w-1/2 flex justify-center items-start">
          <img
            src="https://www.itcportal.com/images/corporate.jpg"
            alt="Driving Force Image"
            class="w-full h-96 "
          />
        </div>
      </section>

      <section>
        <div className=" p-10">
          <h1 className="text-2xl mb-4 text-black">ITC EHS</h1>

          <p className="subpixel-antialiased text-xl text-[#6e6164] mb-2">
            {" "}
            ITC's goal is to achieve the greenest and safest operations across
            all its operations.
          </p>

          <p className="subpixel-antialiased text-xl text-[#6e6164]">
            In terms of environmental performance, ITC aims to minimise impact
            and create a positive footprint wherever possible. The company also
            ensures a safe and healthy workplace for the wellbeing of its
            employees. All ITC facilities are continually ahead of national
            legislation and benchmarked to the best international standards and
            practices in terms of design and infrastructure.
          </p>

          <div className="text-center">
            <button className=" mt-10 flex justify-between  text-[10px] font-thin items-center w-40  text-blue py-2 px-5 border border-black rounded-2xl">
              Know more <FaArrowRight className="text-[8px]" />
            </button>
          </div>
        </div>
      </section>
    </HomeLayout>
  );
}

export default Sustainability;
