import { GrBasket } from "react-icons/gr";
import { LiaToiletPaperSolid } from "react-icons/lia";
import { GiWheat, GiMatchHead } from "react-icons/gi";
import { TfiPackage } from "react-icons/tfi";
import { FaHandHoldingWater,FaHotel } from "react-icons/fa";
import { LuBedDouble, LuMonitorPlay, LuBookOpenCheck,LuArrowUpRightFromCircle } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { TbFileCv } from "react-icons/tb";
import { FiFileText } from "react-icons/fi";
import { BsBuildings } from "react-icons/bs";
import { TbRelationManyToMany } from "react-icons/tb";
import { GiWaterRecycling } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import itcLogo from "../images/itc-online-high-resolution-logo-transparent.png"




export const itcAtGlanceData = [
    {
      logo: <LuArrowUpRightFromCircle />,
      title: "40L-50L",
      subTitle: "figures as on 31.03.2023"
    },
    {
      logo: <BsBuildings />,
      title: "40",
      subTitle: "Sliver Rated Green Building"
    },
    {
      logo: "https://www.itcportal.com/assets/images/glace_ic16.png",
      title: "10 Hotels, 2 Data Centers",
      logo: <FaHotel />,
      title: "12 Hotels, 1 Data Center",
      subTitle: "LEED Zero Carbon"
    },
    {
      logo: <FaHotel />,
      title: "2 Hotels",
      subTitle: "LEED Zero Water"
    }
]


export const ItcBussinesses = [
    {
        title: "FMCG",
        icon: <GrBasket className="text-5xl" />
    },
    {
        title: "Hotels",
        icon: <LuBedDouble className="text-5xl" />
    },
    {
        title: "Paperboards & Speciality Papers",
        icon: <LiaToiletPaperSolid className="text-5xl" />
    },
    {
        title: "Packaging",
        icon: <TfiPackage className="text-5xl" />
    },
    {
        title: "Agri Business",
        icon: <GiWheat className="text-5xl" />
    },
    {
        title: "Information Technology",
        icon: <LuMonitorPlay className="text-5xl" />
    },
    {
        title: "Education and Stationary",
        icon: <LuBookOpenCheck className="text-5xl" />
    },
    {
        title: "Agarbattis & Safety Matches",
        icon: <GiMatchHead className="text-5xl" />
    },
    {
        title: "Personal Care",
        icon: <FaHandHoldingWater className="text-5xl" />
    }

]


export const LatestUpdate = [
    {
        img: "https://thumbs.dreamstime.com/b/building-industrial-complex-apartments-workers-engineers-work-concreting-construction-buildings-demolition-production-272543479.jpg",
        description: "Pioneering  the Green Building Movement in india",
        date: ""
    },
    {
        img: "https://images.pexels.com/photos/2131967/pexels-photo-2131967.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description: "Towards Water Security for All",
        date: ""
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd44QWCcTqlrAuddKufx93vLe8MBzrpXIHcdoZM0garv8Q950C5b_i58OHd2wU5lHuHkc&usqp=CAU",
        description: "ITC's Biodiversity conversation programme",
        date: ""
    },
    {
        img: "https://i.pinimg.com/474x/9c/d0/e0/9cd0e0013428014698f084a584d35892.jpg",
        description: "Focus is on sustainable and inclusive growth' Sanjiv puri  ",
        date: "11 feb 2024"
    },
    {
        img: "https://prevenko.com/wp-content/uploads/2021/06/photo-blank-.png",
        description: "Plateful of vision 'Sanjiv puri",
        date: "03 feb 2024"
    },
    {
        img: "https://t4.ftcdn.net/jpg/05/88/68/59/360_F_588685904_GV8YCwcUm8wCFW4cY1HYsCqTdbV3bRVq.jpg",
        description: "ITC and a business case for Diversity, Equity and inclusion",
        date: "13 jan 2024"
    },
    {
        img: "https://t3.ftcdn.net/jpg/05/07/88/96/360_F_507889611_vdbjUXkBQIfEqdyb5qNtTxCR6jm47wSS.jpg",
        description: "Financial Results for the Quarter Ended December",
        date: "29 jan 2024"
    },
    {
        img: itcLogo,
        description: "ITC Institutional Investors & Financial Analysts Day",
        date: "12 dec 2023"
    }
]



 export const bigStories = [
    {


        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-solologues-080224.jpg",
        title: "ITC and a business case for Diversity, Equity and Inclusion: Saturday Solologues",
        description: "What happens when an enterprise links its Diversity, Equity and Inclusivity #DEI goals with business objectives? Innovation is...",
        date: "13 jan 2024",
        tag: "The Economic times BrandEquity"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-plateful-070224.jpg",
        title: "Plateful of vision: Sanjiv Puri takes us through ITC's ambitious menu",
        description: "ITC Chairman Sanjiv Puri and Business Standard journalist Ishita Ayan Dutt had an in-depth conversation a day after ITC's thir....",
        date: "03 Feb 2024",
        tag: "Business Standard"
    },
    {
        img: "https://i.postimg.cc/G2sxn2R8/generate-a-similar-image-like-this-to-remove-the-owner-rights-8.jpg",
        title: "Focus is on sustainable and inclusive growth': Sanjiv Puri",
        description: "In an interview with THE WEEK, ITC Chairman Sanjiv Puri talks about the 'ITC Next' vectors of growth - Digital and Sustainability; pillars of..",
        date: "11 Feb 2024",
        tag: "The Week"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-next-201223.jpg",
        title: "ITC Next: How do you turn around an elephant and make it dance?",
        description: "In an in-depth interview with ET Online, ITC Chairman Sanjiv Puri highlighted the key tenets of ITC's diversification into FMCG includin...",
        date: "10 Dec 2023",
        tag: "The Economic Times"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-climate-171123.jpg",
        title: "As India gallops, so will FMCG industry: Sanjiv Puri, ITC CMD",
        description: "The key driver to unleashing FMCG growth through a virtuous cycle of consumtion, investment and income lies in creating gainful...",
        date: "01 Jan 2024",
        tag: "The Economic Times"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/big-story-thumb-dairy-240124.jpg",
        title: "Leveraging Al in dairy and beverage manufacturing to ensure product quality: Sanjay Singal...",
        description: "In an interview with ET Digital, Sanjay Singal, Chief Operating Officer, Dairy & Beverages, ITC Foods, said that digital...",
        date: "04 Jan 2024",
        tag: "The Economic Times"
    }
]


export  const ItcStories = [
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/everyday-stories-thumb-bhadrachalam-greenco-240124.jpg",
        title: "ITC's Bhadrachalam Unit Gets Prestigious GreenCo Platinum+ Certification",
        date: "05 Jan 2024"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/everyday-stories-thumb-leed-zero-water-050124.jpg",
        title: "3 ITC Hotels are LEED Zero Water Certified!",
        date: "28 Dec 2023"
    },
    {
        img: "https://www.itcportal.com/assets/images/mediacentre/everyday-stories-thumb-idc-050124.jpg",
        title: "ITC's Paperboards and Specialty Papers Business is the Asia-Pacific winner of IDC Future Enterprise Awards 2023",
        date: "08 Dec 2023"
    },
]


export const ItcNews = [

    {
        img: "https://www.itcportal.com/assets/images/latest-updates-080224.jpg",
        description: "Focus is on sustainable and inclusive growth' Sanjiv puri  ",
        date: "11 feb 2024"
    },
    {
        img: "https://www.itcportal.com/assets/images/latest-updates-080224-1.jpg",
        description: "Plateful of vision 'Sanjiv puri",
        date: "03 feb 2024"
    },
    {
        img: "https://www.itcportal.com/assets/images/latest-updates-080224-2.jpg",
        description: "ITC and a business case for Diversity, Equity and inclusion",
        date: "13 jan 2024"
    },
    {
        img: "https://www.itcportal.com/assets/images/quarterly-result-thumb.jpg",
        description: "Financial Results for the Quarter Ended December",
        date: "29 jan 2024"
    },
]


export const ItcPerspective = [
    {
      img: "https://menskexpressgloballtd.com/img/vission.png",
      Title: <h1>The ITC ONLINE Vision</h1>,
      description: (
        <p>
          Sustain ITC ONLINE's position as one of India's most valuable corporations
          through world class performance, creating growing value for the Indian
          economy and the Company's stakeholders
        </p>
      ),
      color:"bg-[#190483]"
      
    },
    {
      img: "https://support.engagerm.com/Get-Answers-Icon.png",
      Title: <h1>The ITC ONLINE Mission</h1>,
      description: (
        <p>
          To enhance the wealth generating capability of the enterprise in a
          globalising environment, delivering superior and sustainable stakeholder
          values
        </p>
      ),
      color:"bg-[#150371]"
    },
    {
      img:"https://picsera.sirv.com/production/2020/12/Group-127.png",
      Title: <h1> ITC ONLINE Values</h1>,
      description: (
        <p>
          ITC ONLINE believes that its core values of trusteeship, customer focus,
          respect for people, excellence, innovation and nation orientation have
          been the guiding principles behind the Company's phenomenal growth,
          helping it to become one of India's most admired and valued enterprises.
          Know more
        </p>
      ),
      color:"bg-[#13045c]"
    },
];
  

export  const globalHonours = [
  { imageUrl: "https://th.bing.com/th/id/R.74da0b22a539be7734620e679b83f289?rik=esdnbx64BF8vGg&riu=http%3a%2f%2fwww.logomark.com%2fImage%2fGroupHiRes%2fGroupHiRes120%2fca920.jpg&ehk=rkQSBDj8KKDrOGlugTe1krH9ig0%2bGeXZev4l%2fT0D0QY%3d&risl=&pid=ImgRaw&r=0", description: "World Business And Development Awards 2012" },
  { imageUrl: "https://wallstreetgifts.com/pub/media/catalog/product/cache/6517c62f5899ad6aa0ba23ceb3eeff97/o/c/oc2745_1.jpg", description: "The Development Gateway Award 2005" },
  { imageUrl: "https://ak1.ostkcdn.com/images/products/is/images/direct/a214c270379bb36c5915ef5b1b60f5479d84a1ea/Himalayan-Salt-Lamp-Halite-with-Led-Base.jpg?impolicy=medium&imwidth=200", description: "SAM/SPG Sustainability Leadership Award 2007" },
  { imageUrl: "https://personalized-awards-prod-images.s3-us-west-2.amazonaws.com/product_image_sm/category/5832440660ff9.jpg", description: "The Stockholm Challenge Award 2006" },
  { imageUrl: "https://www.iran-fruit.com/wp-content/uploads/2020/12/certifications-1.png", description: "ICSI National Award 2006" }
];

export const moreAboutItc = [
  {
    img: "https://www.itcportal.com/assets/images/about/about_btm_bg1.jpg",
    icon: <TbRelationManyToMany/>,
    title: "Investor Relations",
    description: ""
  },
  {
    img: "https://www.itcportal.com/assets/images/about/about_btm_bg2.jpg",
    icon: <GiWaterRecycling/>,
    title: "Exemplar in Sustainability",
    description: "Only company in the world to be carbon positive, water positive and solid waste recycling positive."
  },
  {
    img: "https://www.itcportal.com/assets/images/about/about_btm_bg3.jpg",
    icon: <GiArchiveResearch/>,
    title: "ITC ONLINE Research and  Development",
    description: ""
  },

]


export const vectorOfGrowth = [
    {
        title: "ITCMAARS",
        description: "Ushering in NExtgen Agriculture",
        img: "https://img.lovepik.com/background/20211030/medium/lovepik-rice-ear-mobile-phone-wallpaper-background-image_400426969.jpg"
    },
    {
        title: "ITC FOODTECH",
        description: "A New vector of Growth",
        img: "https://png.pngtree.com/thumb_back/fw800/background/20230902/pngtree-book-with-coffee-cake-cake-on-the-table-image_13183240.jpg"
    },
    {
        title: "SUSTAINABLE PACKAGING",
        description: "Solution for the future",
        img: "https://images.unsplash.com/photo-1605615923013-f26c14fe7155?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VzdGFpbmFibGUlMjBwYWNrYWdpbmd8ZW58MHx8MHx8fDA%3D"
    },
    {
        title: "CLIMATE SMART AGRICULTURE",
        description: "Building resilience in india's agriculture sector",
        img: "https://sanremcrsp.cired.vt.edu/wp-content/uploads/2014/12/Climate_SmartAgriculture.jpg"
    }, {
        title: "DIGITAL TRANSFORM AT ITC",
        description: "For a Future Tech Organisation",
        img: "https://i.pinimg.com/474x/15/86/3e/15863efffea395bf09bb6ff8c89f035c.jpg"
    }

]

export const leadershipSpeaks = [
    {
        title: "'Focus is on sustainable and inclusive growth'",
        subTitle: "The Week",
        description: "In an interview with THE WEEK, ITC Chairman Sanjiv Puri talks about the 'ITC Next' vectors of growth - Digital and Sustainability, pillars of ITC's competitiveness",
    },
    {
        title: "Plateful of vision:  takes us through ITC's ambitious menu",
        subTitle: "Business Standard",
        description: "ITC Chairman Sanjiv Puri and Business Standard journalist Ishita Ayan Dutt had an in-depth conversation a day after ITC's third-quarter results were declared",
    },

    {
        title: "As India gallops, so will FMCG industry, ITC CMD",
        subTitle: "The Economic Times",
        description: "The key driver to unleashing FMCG growth through a virtuous cycle of consumption, investment and income lies in creating gainful livelihood opportunities...",
    },
    {
        title: " in Conversation with Ms. Shereen Bhan, CNBCTV18",
        subTitle: " CNBCTV18",
        description: " Chairman ITC, was recently interviewed by Ms Shereen Bhan, Managing Editor, CNBCTV18. In this candid conversation, Mr Puri shared...",
    },
    {



        title: "ITC: Nation First Transforming for our Shared TomorrowsS",
        subTitle: "",
        description: "CMD's Address at 112th AGM.",
    },
    {
        title: "Corporates need to be responsibly competitive and lead in climate action: ITC chairman Sanjiv Puri",
        subTitle: "The Times of India",
        description: "In his message in ITC's Sustainability and Integrated Report 2023, 'Shaping The Future', ITC Chairman Sanjiv Puri reiterated the significant....",
    },
    {
        title: "Sustainability, digitalisation key components of ITC's future: Sanjiv Puri",
        subTitle: "Hindu Businessline",
        description: "ITC Chairman Sanjiv Puri, gave a disaggregated view of the company's plans in a recent conversation with journalists, discussing new...",
    }
]

export const ItcBrands = [
    {
        img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEUAAAD///95eXnp6el0dHTc3NwrKyvZ2dlfX1+8vLz29vbJycmtra0jIyMoKCiGhoaWlpZqamqPj4/Ozs7w8PBGRkZkZGSfn5/h4eGDg4NXV1cdHR34+PimpqbDw8O2trZMTEwUFBQ/Pz82NjY4ODhDVUo5AAADzklEQVR4nO3d63KiMACGYQGreOgqiqIWFdve/zWukgNJQFemYVg77/OrJETyCSQBZ3YH4W83AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/0yHLipZN3ofZqouudGMSXM3btPgaX1vsuuqPd4ug1OIfvovLBm/ddcmzN5Fw/XyL4MUSRqLD0dMNli+acPJ0g9mLJvx6usH41RJOy2u0eL7ByyXcFEXx3abByyVs7f9JmOzDxCn6DvfhtsVHHML9sHALHyXcXg+QXFocoZ2PubC4/r2QA0i61NXv81z2rTa7b1ZnuajJxEccr3/GctAMThu9Y7JcrtT0slreVF/iYZLKBvmpzdfYwihQk3cyDbRc9mFZFQWRNXLGaTUfyk7mg4+1sf9Z7XoOXKqqeLOKI/fy8ZrwtLI7UZ6esV1mdCAUXRIb6tSP7N2jy72EmaiY1CpaLJJaJ0zdgx1rAYMgVq0+goaEee7sHt1LeDCbWabPT7FtE9bFx1pRrlotmxLWTZoTls0u06YWQdBqEvpZwtpZDaobaPxcQnGyagnLQajp42/yjy4Trucz90pLZ3PzYn23MjUk3J0nxmZ5X9m3W3oa3QpPZtHOjOt7zjQSivs/NDOm4o6p+rh6nHBWDi6bnS5Qh5Hf0lhtJ1UgMQ0Nq2F40VXCpFZSPR3pWWP9MOFR7a9ngaGdUJ8f3WSvezJURfpu95ww00VbnbAa2NQ3bGdyEo6rj3UzOwl1mmpdoAdofaH4TmiUqR6fqqLC3q05YVztr8Zh9QTpJFRf2HBgOthfoyfVmqYyr11B8nnpcULz6oofJ5S1M6czatT1OpyOGg62qJ8TfZ6sLTvh1Nj9z8OE6j4wr9Gbd1nu9b926CWhHLjSWm/kINzqNeW/9JJQ3gbGfS6d71X8QFNCtQjvLKEMch64MlHhdQHeS8K5XVn5NQmP1pZh8luu0tD6MINcnx5rFT/Qy0jzKWvNCfdGTflen/V7SajWD2aLm511EE86Sqjm7jsJ5061oJZ6ft9l9JNQXabW3K7fFPl9IdVPQvVLzbXkU3VEPyB6/hm1p4T6Sel6Ta7iTbwy3kO6q9XXTDjYB/dkA7/6StjwjlGeUs8B+0vY8D64k4A9JlSLUIvX5yahx4SDwn3ROu3ix5mmtxgqoXk89UbT2kqb6kpqTaPW0HK14k4EezNj5Pk1onQJhyXzfH2KsnBklCVit6G1lTTVWR97kNtbsVk/R5tsHE3zaTQ+Fv5CAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoFPhb/cXgvsuHGT1Mt8AAAAASUVORK5CYII=",
        description: "Confectionary"
    },
    {
        img: "https://sancus.co.in/wp-content/uploads/2014/10/logo-BNatural.jpg",
        description: "Juices and Beverages"
    },
    {
        img: "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/c/AmazonStores/A21TJRUUN4KGV/e2b779011a00a570f960121102e279c6.w400.h400.png",
        description: "Confectionary"
    },
    {
        img: "https://pbs.twimg.com/profile_images/1543844689765314561/-xnse9SR_400x400.jpg",
        description: "Luxury Chocolate"
    },
    {
        img: "https://pbs.twimg.com/profile_images/797019671211819009/JhWE2jBm_400x400.jpg",
        description: "Gums"
    },
    {
        img: "https://media.licdn.com/dms/image/C5603AQF1myU_GqrcLQ/profile-displayphoto-shrink_400_400/0/1517018421469?e=2147483647&v=beta&t=rqwJmoNURwA00c-bWsY66yokL-IazqgLeCrR7yMVKco",
        description: "Gourment Coffe and Beaten Coffee"
    },
    {
        img: "https://img.freepik.com/premium-vector/yellow-chef-logo-with-chef-hat-yellow-background_25572-235.jpg",
        description: "Blended Spices, Frozen Prawns, Snacks and Kababs"
    },
    {
        img: "https://i1.sndcdn.com/artworks-000109726909-kxny4y-t500x500.jpg",
        description: "Soaps & Shampoos"
    },
    {
        img: "https://adn-static2.nykaa.com/media/wysiwyg/8901725973155p1.jpg?tr=w-400,pr-true",
        description: "Antiseptic Liquid, Soap and handwashes "
    },
    {
        img: "https://images.thdstatic.com/productImages/bd2eda92-87ff-4907-afe0-b8363be7ec59/svn/homelite-cordless-hedge-trimmers-homht10-e1_600.jpg",
        description: "Homelites matches"
    },
    {
        img: "https://m.media-amazon.com/images/S/stores-image-uploads-eu-prod/8/AmazonStores/A21TJRUUN4KGV/4ba62de6fa4103a0c4a7e0f7f34afff9.w800.h800.png",
        description: "Att, Vermicelli, Gree, Salt, Spices, Ready to eat Meals and instant mixes"
    },
    {
        img: "https://tyroo.com/wp-content/uploads/2022/11/yipee-2-1.jpg",
        description: "Instant Noodles and Pasta"
    },
    {
        img: "https://img.freepik.com/premium-vector/sunrise-view-logo-design-illustration-inspiration_340145-158.jpg",
        description: "Sunrise Pure! A lagacy of inovation for over 100 years!"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShxDmXWEPL60fdN6PavPGTeUpss4AZO2reiQ&usqp=CAU",
        description: "Shower Gel, Bathing bars, Handwashes, Essential oils, body oils and  bathing Accessories"
    },
]

export const Sustainability = [
    {
        img: "https://pmagy.gov.in/admin/gallery_image/615a8e7189fab.jpg",
        title: "E-Choupal Ecosystem"
    },
    {
        img: "https://c1.wallpaperflare.com/preview/720/634/562/lady-street-photography-woman.jpg",
        title: "Afforestation Programme"
    },
    {
        img: "https://thumbs.dreamstime.com/b/indian-man-bathing-ganges-river-10522874.jpg",
        title: "Watershed Developement Programme"
    },
    {
        img: "https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2022/06/14/1182558-mahila-panchayt.jpg?itok=Mq8ezZ1a",
        title: "Sustainable Agriculture"
    },
    {
        img: "https://ak.picdn.net/offset/photos/533aed188e5b3dd8a2ce1af0/medium/offset_91598.jpg",
        title: "LiveStock Development"
    },
    {
        img: "https://images.livemint.com/rf/Image-621x414/LiveMint/Period2/2016/10/06/Photos/Processed/mahila-kOfD--621x414@LiveMint.jpg",
        title: "Women Empowerment"
    },
    {
        img: "https://t3.ftcdn.net/jpg/05/01/74/62/360_F_501746213_H7NXW6EpSdWPQST1hN7bjkmG1ncTDIyx.jpg",
        title: "Primary Education"
    }
]



export const brandsData = [
    {
        // color: "bg-[#ef0000]",
        products: [
            { name: "Aashirvaad Organic Whole Wheat Atta", img: "https://www.aashirvaad.com/img/packet-1.png" },
            { name: "Aashirvaad Svasti Paneer Slice", img: "https://www.jiomart.com/images/product/original/493911965/aashirvaad-svasti-paneer-200-g-pack-of-5-slice-product-images-o493911965-p605034363-0-202309281942.jpg?im=Resize=(1000,1000)" },
            { name: "Ashirvaad Mithaas peda", img: "https://www.itcportal.com/brands-microsite/images/aashirvaad/mithaas-peda-22124.png" }
        ],
        title: "Atta, Vermicelli, Ghee, Salt, Spices, Ready To Eat Meals & Instant Mixes",
        logo: "https://yt3.googleusercontent.com/ytc/AIdro_nByDdLaOBv4vALKMgOx9NzHhyMPexM98Y7qvMbmg=s900-c-k-c0x00ffffff-no-rj"
    },
    {
        // color: "bg-[#C32030]",
        products: [
            { name: "Sunfeast Farmlite Super Millets", img: "https://m.media-amazon.com/images/I/81uASzBOazL.jpg" },
            { name: "Sunfeast Mom's Magic Butter fills", img: "https://m.media-amazon.com/images/I/81leTwc9BBL.jpg" },
            { name: "Sunfeast thin Arrowroot", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAr7z-hhD1COvjDp0CO6fDjLFkRuXsopZV0Q&usqp=CAU" }
        ],
        title: "Biscuits, Cookies & Cakes",
        logo: "https://fmtmagazine.in/wp-content/uploads/2021/09/1630482966855_sunfeast.jpg"
    },
    {
        products: [
            { name: "Tedhe medhe Allo Bhujia", img: "https://m.media-amazon.com/images/I/61hv6FkOVTL.jpg" },
            { name: "Bingo! No Rulz Mix Puffs Tomato", img: "https://m.media-amazon.com/images/I/61VQzSMe20L.jpg" },
            { name: "Bingo! Cheese Nachos", img: "https://www.itcportal.com/brands-microsite/images/bingo_home/bingo20.png" }
        ],
        title: "Potato Chips & Finger Snacks",
        logo: "https://images-na.ssl-images-amazon.com/images/S/stores-image-uploads-eu-prod/f/AmazonStores/A21TJRUUN4KGV/ba6512fb0d5a31d35c5fd3c655fbeed8.w400.h400.jpg"
    },
    {
        // color: "bg-[#74271C]",
        products: [
            { name: "Ready to Dine- Daily Treats", img: "https://www.financialexpress.com/wp-content/uploads/2022/10/Untitled-design-2-4.jpg?w=350" },
            { name: "Ready to Dine - Fourmet Delight", img: "https://i0.wp.com/india-direct.com/wp-content/uploads/2022/03/51JQRToehpL.jpg?fit=500%2C500&ssl=1" }
        ],
        title: "Ready To Eat Gourmet Cuisine, Masala Mixes, Chutneys & Conserves",
        logo: "https://3.bp.blogspot.com/_rPwR5Mqua4I/SYg6V9NhFrI/AAAAAAAAAFE/0rfnAB-3yh0/s320/LogoZone_KitchensOfIndia.jpg"
    },
    {
        // color: "bg-[#FEED24]",
        products: [
            { name: "Quick Mealz Chicken Delight", img: "https://www.sunfeastyippee.com/wp-content/uploads/2023/08/ChickenDelight.png" },
            { name: "Yippee! Saucy Masala", img: "https://m.media-amazon.com/images/I/81hz4y6lY8L.jpg" },
            { name: "Tricolor Pasta", img: "https://m.media-amazon.com/images/I/81T7leUDxFL._AC_UF1000,1000_QL80_.jpg" }
        ],
        title: "Instant Noodles & Pasta",
        logo: "https://i.pinimg.com/originals/a0/13/f5/a013f53482354f0e297068c4405f1859.jpg"
    },
    {
        // color: "bg-[#077F39]",
        products: [
            { name: "Chatpata Jamum", img: "https://www.jiomart.com/images/product/original/494231326/b-natural-chatpata-jamun-juice-1-l-product-images-o494231326-p605646837-0-202310181525.jpg?im=Resize=(1000,1000)" },
            { name: "Fruite N Bits Mixed  Fruite", img: "https://www.bigbasket.com/media/uploads/p/xxl/1226799-2_2-b-natural-fruits-n-bits-mixed-fruit.jpg" },
            { name: "Coconut Water", img: "https://m.media-amazon.com/images/I/711blihxkzL.jpg" }
        ],
        title: "Juices & Beverages",
        logo: "https://www.justgotochef.com/img/1527339509-B%20Natural-Mixed%20Fruit%20Merry-Logo.jpg"
    },
    {
        // color: "bg-[#19468D]",
        products: [
            { name: "Mint-o GOL Orange Chew", img: "https://www.itcportal.com/brands-microsite/images/minto/minto07.png" },
            { name: "Mint-o Fresh max", img: "https://www.itcportal.com/brands-microsite/images/minto/minto09.png" }
        ],
        title: "Confectionery",
        logo: "https://3.bp.blogspot.com/-qvn3Xci2vg8/VBW8AwjRnyI/AAAAAAAABvg/I4XgB1SgStE/s1600/1-%2Bminto-logo-big.jpg"

    },
    {
        // color: "bg-[#213970]",
        products: [
            { name: "Candyman Choco Double Eclairs", img: "https://m.media-amazon.com/images/I/713RMBZQUXL.jpg" },
            { name: "Candyman Tadka", img: "https://cdn.lowestrate.in/20220727141117/414eh6iMO6L.jpg" },
            { name: "Candyman Toffichoo", img: "https://m.media-amazon.com/images/I/61CuX0uU-vL._SL1000_.jpg" }
        ],
        title: "Confectionery",
        logo: "https://humarabazar.com/wp-content/uploads/2022/06/a24de7add52604f32245c828ff56c582.jpeg"
    },
    {
        // color: "bg-[#E13D31]",
        products: [
            { name: "Jelimals- Space Runner", img: "https://www.itcportal.com/brands-microsite/images/jelimals/jelimals-new05.png" },
            { name: "Jelimals- Tasty Sparkles", img: "https://www.itcportal.com/brands-microsite/images/jelimals/jelimals-new02.png" }
        ],
        title: "Confectionery",
        logo: "https://m.media-amazon.com/images/S/aplus-media/vc/2d5c080f-f976-4e54-a1be-5c426eec6614.__CR0,0,350,175_PT0_SX350_V1___.png"
    },
    {
        // color: "bg-[#32251C]",
        products: [
            { name: "Fabelle Finesse", img: "https://www.itcportal.com/brands-microsite/images/fabelle/fabelle13.png" },
            { name: "Boxed Chocolate", img: "https://m.media-amazon.com/images/I/81ZtM6YIwOL.jpg" },
            { name: "Luxury Chocolate Bar", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNudSUBms2rQ3BxGKKQFb8Q2uSczUqXC495leY9YvzZC9DH5DnGr1fZDP8yaBzShJP3UI&usqp=CAU" }
        ],
        title: "Luxury Chocolate",
        logo: "https://mir-s3-cdn-cf.behance.net/projects/404/56d0c0179225777.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png"

    },

    {
        // color: "bg-[#3E2B2F]",
        products: [
            { name: "Nicamalai", img: "https://m.media-amazon.com/images/I/71tuRGMPBKL.jpg" },
            { name: "Panagiri", img: "https://m.media-amazon.com/images/I/71FLsFAh27L.jpg" },
            { name: "Sunbean Beater  Caffe", img: "https://cdn.grofers.com/app/images/products/full_screen/pro_437005.jpg?ts=1701664761" }
        ],
        title: "Gourmet Coffee & Beaten Coffee",
        logo: "https://media.licdn.com/dms/image/C5603AQF1myU_GqrcLQ/profile-displayphoto-shrink_400_400/0/1517018421469?e=2147483647&v=beta&t=rqwJmoNURwA00c-bWsY66yokL-IazqgLeCrR7yMVKco"
    },

    {
        // color: "bg-[#ED62A3]",
        products: [
            { name: "Anti Acne", img: "https://images-static.nykaa.com/media/catalog/product/1/8/18c1768CHARM00000016_1.jpg" },
            { name: "Cold cream", img: "https://rukminim2.flixcart.com/image/850/1000/jnw2he80/moisturizer-cream/h/v/h/175-moisturising-cold-cream-cream-charmis-original-imafah4t2sfhtqwp.jpeg?q=90&crop=false" },
            { name: "face wash", img: "https://m.media-amazon.com/images/I/61y8rB25WDL._AC_UF1000,1000_QL80_.jpg" }
        ],
        title: "Cream",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtST2YDvlIPke-5U_Sraplxb2sIZvqwJ8zUA&usqp=CAU"
    },

    {
        // color: "bg-[#000000]",
        products: [
            { name: "Classmate Ar Notebooks", img: "https://m.media-amazon.com/images/I/81c0AU0zx0L.jpg" },
            { name: "Classmate Interaktiv origami craftbooks", img: "https://m.media-amazon.com/images/I/71ZBY03VO5L.jpg" },
            { name: "pulse 3D Notebooks", img: "https://images.jdmagicbox.com/quickquotes/images_main/classmate_pulse_6_sub_spiral_notebook_2100114__11926272_0.jpg" }
        ],
        title: "Notebooks, Pens, Pencils, Art Stationery, Geometry Boxes & Scholastic Products",
        logo: "https://pbs.twimg.com/profile_images/470815227953438720/ON_B5na6_400x400.png"
    },

    {
        // color: "bg-[#943C3C]",
        products: [
            { name: "Homelites matches", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXWktQXI27AH9JT8eE7tO6G59v83SPzwW1iZ9pMhTzKFgOUCJyCOh1iIC974LrpZErdN0&usqp=CAU" }
        ],
        title: "Homelites matches",
        logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6ijE156GZE8qfZMMQu3zVNzxYkR-9E3MvzxFP3TS3t9C_C8Gjy-fjgGAa4UMhlxWvXtk&usqp=CAU"
    },

]

import { LuMilk } from "react-icons/lu";
import { MdOutlinePerson3 } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { TbMatchstick } from "react-icons/tb";

export const drawerDate = [
    {
        img: <LuMilk />,
        title: "FOODS",
        products: ["Aashirvaad", "Sunfeast", "Bingo", "Kitechens of India", "SunFeast Yippee", "B Naturals", "SunFeaset Milkshake", "mint-o", "Candyman", "Jelimals", "GumOn", "Fabelle", "Sunbean", "ITC Master Chef", "Farmland", "Sunrise"]
    },
    {
        img: <MdOutlinePerson3 />,
        title: "PERSONAL CARE",
        products: ["EDW Essenza", "Dermafique", "Fiama", "Vivel", "Engage", "Superia", "Nimyle", "Nimwash", "Savlon", "Shower to Shower", "Charmis"]
    },
    {
        img: <TfiWrite />,
        title: "EDUCATION",
        products: ["Classmate", "Paperkraft"]
    },
    {
        img: <TbMatchstick />,
        title: "MATCHES & AGARBATTI",
        products: ["AIM, Mangledeep", "Homelites"]
    }
]


export const bussinessList =[
    {
      img:"https://www.dotactiv.com/hs-fs/hubfs/client%20banner-2.png?t=1541429225726&width=3298&name=client%20banner-2.png",
      title:"FMCG",
      discription:"ITC ONLINE's rich mix of FMCG portfolio is designed and customised to delight consumers in myriad ways."
    },
    {
      img:"https://cdn.velocityhousing.in/projects/5/medium_1667382371omaxe-india-trade-centre.jpg",
      title:"Hotels",
      discription:"Launched in 1975, ITC ONLINE Hotels, India's premier chain of luxury hotes, had become synonymous with India hospitality."
    },
    {
      img:"https://cdn.thewire.in/wp-content/uploads/2020/11/02181917/830678-farmers-in-the-fields-pti.1-1200x600.jpg",
      title:"Agri Business",
      discription:"ITC ONLINE is one of india's Largest Integrated agri business enterprises with significant presence across every node of the agri value chain."
    },
    {
      img:"https://th.bing.com/th/id/OIP.v11OiJlknOH4j7anWLlT1gHaEB?w=699&h=380&rs=1&pid=ImgDetMain",
      title:"Paperboards and Soeciality Papers",
      discription:"ITC ONLINE's Paperboards and Speciality Papers Business is India's largest, technologically advanced and most eco-friendly paper and paperboards business."
    },
    {
      img:"https://th.bing.com/th/id/OIP.LyLR_0RUxpB-YW-7_0ctDwHaEo?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      title:"Information Technology",
      discription:"ITC ONLINE infortech is a specialized global services provider, let by Business and Technology Consulting."
    },
    { img:"https://th.bing.com/th/id/OIP.X-FjrVQLCWf7XfzoDxAf9AHaEK?rs=1&pid=ImgDetMain",
      title:"Packaging",
      discription:"ITC ONLINE's Packaging Business is the largest value added converter of paperboard packaging in South Asia. It converts over 1,00,000 tonnes of paper, paperboard and laminates per annum."
    },
  ]
  
export  const countary = [
    "Afghanistan", "Albania", "Algeria", "American Samoa", "Australia", "Austria", "Bangladesh", "Bhutan", "Brazil", "Bulgaria", "Canada", "China", "Denmark",
    "Egypt", "Finland", "France", "Greece", "Greenland", "Iceland", "Iran", "Israel", "Italy", "India", "Japan", "Korea", "Malaysia", "Mexico", "Nepal", "New Zealand",
    "Russian", "Romania", "Saudi Arabia", "Singapore", "South Africa", "Spain", "Sri Lanka", "Switzerland", "Taiwan", "United States",
]


export const moreCardData = [
    {
        color: "bg-[#571845]",
        title: "STORE LOCATOR",
        icon: <IoLocationOutline />,
        description: ""
    },
    {
        color: "bg-[#900c3e]",
        title: "POST YOUR RESUME",
        icon: <TbFileCv />,
        description: ""
    },
    {
        color: "bg-[#ea0244]",
        title: "ITC ADDRESSES",
        icon: <FiFileText />,
        description: ""
    },
    {
        color: "bg-[#b66b13]",
        title: "ITC SAMBADDHA",
        icon: <FiFileText />,
        description: "ITC Food vandor Relationship Portal As a perspective vendor, you may wish to share your company details"
    }
]


export const financialReportingData = [
    {
      img: "https://www.itcportal.com/images/ir_ic1.png",
      Title: <h1> Quarterly Results</h1>,
      color: "bg-[#031f4b] shadow-lg",
      description: (
        <p>

          <p>-Media Statement</p>
          <p>-Results</p>
          <p>-Quarterly FAQs</p>
          <p>-Presentation</p>
        </p>

      ),

    },
    {
      img: "https://www.itcportal.com/images/qr_ic1.png",
      color: "bg-[#04396c]  shadow-lg",
      Title: <h1>ITC Report & Accounts</h1>,


    },
    {
      img: "https://www.itcportal.com/images/ir_ic3.png",
      Title: <h1>Press Releases</h1>,
      color: "bg-[#035b96]  shadow-lg",


    },
    {

      img: "https://www.itcportal.com/images/ir_ic4.png",
      color: "bg-[#74c0bc]  shadow-lg",
      Title: <h1> Presentation
      </h1>,





    },
  ];



export const stackHoldersInformation = [
    {
      img: "https://www.itcportal.com/images/si_ic1.png",
      color:"bg-[#00455e]",
      Title: "Disclosures under Regulation 46 of the SEBI Listing Regulations"
      
      
    },
    {
      img: "https://www.itcportal.com/images/si_ic2.png",
      color:"bg-[#01698f]",
      Title: "ITC's Shareholding Pattern"
      
      
    },
    {
      img: "https://www.itcportal.com/images/si_ic4.png",
      color:"bg-[#4c8090]",
      Title: "Unclaimed & Unpaid Dividend"
      
      
    },
    {
      
      img: "https://www.itcportal.com/images/ir_ic4.png",
      color:"bg-[#6aa2b3]",
      Title: "shareholder & AGM Information"
    },
  ];



export  const quickLinksData = [
    {
      img: "https://www.itcportal.com/images/quick_ic1.png",
      Title: "Recent News",
      color:"bg-[#ffffff]"
      
      
    },
    {
      img: "https://www.itcportal.com/images/ir_quick_ic.png",
      Title: "ITC Reports & Accounts 2023",
      color:"bg-[#ffffff]"
      
      
    },
    {
      img: "https://www.itcportal.com/images/bs_quick_ic.png",
      Title: "ITC Balance Sheet",
      color:"bg-[#ffffff]"
      
      
    },
    {
      img: "https://www.itcportal.com/images/pl_quick_ic.png",
      Title: "ITC Profit & Loss Statement",
      color:"bg-[#ffffff]"
    },
    {
      img: "https://www.itcportal.com/images/10yrs_quick_ic.png",
      color:"bg-[#ffffff]",
      Title: "10 Years at a Glance",
    },
    {
      img: "https://www.itcportal.com/images/kr_quick_ic.png",
      color:"bg-[#ffffff]",
      Title: "Key Ratios"
    },
    {
      img: "https://www.itcportal.com/images/esg_ic.png",
      color:"bg-[#ffffff]",
      Title: "ITC's ESG Credentials"
    },
    {
      img: "https://www.itcportal.com/images/demerger_hotel_ic.png",
      color:"bg-[#ffffff]",
      Title: "Proposed Demerger of Hotels Business"
    },
  ];


export const itcAtGlanceInInvestor = [
    {
      logo: "https://www.itcportal.com/images/glace_ic1.png",
      title: "₹ 69,481",
      subtitle: "Crores",
      heading: "Gross Revenue",
      para: "figures as on 31.03.2023"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic2.png",
      title: "₹ 18,753.31",
      subtitle: "crores",
      heading: "Net Profit",
      para: "figures as on 31.03.2023"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic3.png",
      title: "12",
      heading: "Businesses of Tomorrow"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic4.png",
      title: "25+",
      heading: "FMCG Mother Brands"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic19.png",
      title: "900",
      heading: "Patents filed"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic5.png",
      title: "200+",
      heading: "Manufacturing Units"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic20.png",
      title: "exports to",
      heading: "100 Countries"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic7.png",
      title: "119",
      heading: "Hotels across 80 locations"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic10.png",
      title: "18 Years",
      heading: "Carbon Positive"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic11.png",
      title: "21 Years",
      heading: "Water Positive"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic12.png",
      title: "16 Years",
      heading: "Solid Waste Recycling Positive"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic13.png",
      title: "4 Million ",
      heading: "Farmers Benefitted by e-Choupal"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic14.png",
      title: "6 Million",
      heading: "Sustainable Livelihoods"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic15.png",
      title: "43%",
      heading: "of the Total Energy is Renewable"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic16.png",
      title: "40",
      heading: "Platinum Rated Green Building"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic17.png",
      title: "12 hotels, 1 Data centre",
      heading: "LEED Zero Carbon"
    },
    {
      logo: "https://www.itcportal.com/images/glace_ic18.png",
      title: "2 Holtels",
      heading: "LEED Zero Water"
    }
  ]


export const ItcVideoGallery = [
    {

      imageSrc: 'https://th.bing.com/th/id/OIP.xYVo8mASXrCNiny6pJiYYwHaFj?rs=1&pid=ImgDetMain',
      title: 'ITC Stories of change | Chennarayappa',

    },
    {

      imageSrc: 'https://i.ytimg.com/vi/hBN1w2OlJck/maxresdefault.jpg',
      title: 'YiPPee! WOW MASALA',

    },
    {

      imageSrc: 'https://assets.techcircle.in/uploads/article-image/2023/04/images/32628-panel-discussion-1-1.jpg',
      title: 'ITC CMD Sanjiv Puri Speaks On Sustain-O-Vation: Transformation, Transition...',

    },
    {

      imageSrc: 'https://www.mapsofindia.com/ci-moi-images/my-india/2019/02/Need-to-improve-government-school-education-system-665x348.jpg',
      title: "From Slate to Sky: the story of dreams & hope | World Children's Day 2023 | The ITC Way"

    },
  ];




export  const socialInvestmentData = [
    {
      image: "https://2.imimg.com/data2/SO/FA/MY-3686445/water-shade-development-program-250x250.jpg",
      description: "e-Choupal Ecosystem",
    },
    {
      image: "https://th.bing.com/th/id/R.8ea69697f64fd6bef63e690f3e03cdf6?rik=QJeJ47q02icQQg&riu=http%3a%2f%2fkirehalli.com%2fwp-content%2fuploads%2f2018%2f04%2faraku-coffee-tribal.jpeg&ehk=LG%2frUv9DzKKiq62vWlebNDyQg6wtZxIc%2bsJ5A1gFFhM%3d&risl=&pid=ImgRaw&r=0",
      description: "Afforestation Programme",
    },
    {
      image: "https://th.bing.com/th/id/R.5cb74c8ba81052877fbba7d44d0ff1a1?rik=hdQSKXU1eVB8bg&riu=http%3a%2f%2fim.rediff.com%2f400-400%2fnews%2f2015%2fsep%2f10live-cross.jpg&ehk=21ON4Ye42TeZ7FAhubU7xolaQWOF%2bRclygQ0bwIqaBw%3d&risl=&pid=ImgRaw&r=0",
      description: "Wateshed development Programme",
    },
    {
      image: "https://www.plan-adapt.org/wp-content/uploads/2022/02/ARA-micro-grant-1-300x300.png",
      description: "Sustainable Agriculture",
    },
    {
      image: "https://www.gsma.com/mobilefordevelopment/wp-content/uploads/2013/05/Comp-Feat.jpg",
      description: "Livestock Development",
    },
    {
      image: "https://th.bing.com/th/id/OIP.lOnrsui7iG3h3EPMM38QZgAAAA?w=200&h=200&rs=1&pid=ImgDetMain",
      description: "Women Empowerment",
    },
    {
      image: "https://www-file.huawei.com/-/media/corp2020/images/tech4all/cases/education-digischool1.jpg?la=en",
      description: "Primary Education",
    },
    {
      image: "https://montagebd.com/wp-content/uploads/2022/10/Welding.jpg",
      description: "Skillin & Vocational Training",
    },
    {
      image: "https://www.gemsnewmillenniumschool-alkhail.com/-/media/project/gems/nms_gems_new_millennium_school_al_khail/_page-thumbnails/academic-performnace-tn.jpg?h=400&w=490&hash=FDC51E9478061D949EA46AAE74D8D6D5",
      description: "Health & Sanitation",
    },
    {
      image: "https://hihindia.org/wp-content/uploads/2019/12/HiHIndia-Health-Making-Health-and-Hygiene-a-Way-of-Life-2.jpg",
      description: "Solid Waste Management",
    },
  ];



