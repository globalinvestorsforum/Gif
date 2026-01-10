import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Faq from './Faq';
import AIIntegrationAward from '../../assets/AwardPage/AIIntegrationAward.jpg'
import BestUseAward from "../../assets/AwardPage/BestUseAward.jpg";
import InnovativeAward from "../../assets/AwardPage/InnovativeAward.jpg";
import EcosystemAward from "../../assets/AwardPage/EcosystemAward.jpg";
import BannerLayout2 from "../../assets/AwardPage/BannerLayout2.jpg";
import RecognitionPointer from "../../assets/AwardPage/RecognitionPointer.png";
import InnovationPointer from "../../assets/AwardPage/InnovationPointer.png";
import EthicalPointer from "../../assets/AwardPage/EthicalPointer.png";
import CollaborationPointer from "../../assets/AwardPage/CollaborationPointer.png";
import AwardLogo from "../../assets/AwardPage/Award.png";
import industry from "../../assets/AwardPage/industry.jpg";
import boostReason from "../../assets/AwardPage/Boost.jpg";
import gathering from "../../assets/AwardPage/gathering.jpg";
import inspireReason from "../../assets/AwardPage/Inspire.jpeg";
import { Link, Navigate, useNavigate } from "react-router-dom";
import AwardCategories from "./AwardCategories";
import Timelines from "./Timelines";
import AllAwardCategories from "./AllAwardCategories/AllAwardCategories";
import GAIEA from "./GAIEA_Intro.jsx"
import SEO from '../../components/SEO'
gsap.registerPlugin(ScrollTrigger);

const Award = () => {
  const containerRef = useRef(null);
  
  // page SEO
  const defaultUrl = typeof window !== 'undefined' ? window.location.href : 'https://www.global-investors-forum.com';

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.utils.toArray(".title").forEach((title) => {
        gsap.fromTo(
          title,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            stagger: 0.2,

            ease: "power3.out",
            scrollTrigger: {
              trigger: ".title",
              start: "top 90%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      });

      // Goal items animation
      gsap.utils.toArray(".goal").forEach((goal) => {
        gsap.fromTo(
          goal,
          { opacity: 0, x: -50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: goal,
              start: "top 90%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      });

      // Reasons to apply animation
      gsap.utils.toArray(".reason").forEach((reason) => {
        gsap.fromTo(
          reason,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: reason,
              start: "top 90%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      });

      // Award cards animation
      gsap.utils.toArray(".award-card").forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none none",
              // markers: true,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const aiSummitData = {
    title: "Honoring the Excellence within AI Ecosystem",
    summitDetails: {
      description: `Artificial Intelligence is reshaping our world at breathtaking speed. From life-saving medical breakthroughs to smart manufacturing, from personalized education to sustainable agriculture-AI isn't just transforming industries, it's redefining human potential. This technological renaissance has sparked innovations that were once confined to science fiction: autonomous systems that enhance human decision-making, algorithms that predict and prevent diseases, and solutions that tackle climate change head-on. `,
      goals: [
        {
          title: "Inspire Innovation",
          imgSrc: InnovationPointer,
          description:
            "Highlight groundbreaking AI solutions that are pushing the boundaries of what is possible.",
        },
        {
          title: "Recognize Excellence",
          imgSrc: RecognitionPointer,
          description:
            "Celebrate the dedication and hard work of the individuals and teams behind these remarkable achievements.",
        },
        {
          title: "Foster Collaboration",
          imgSrc: CollaborationPointer,
          description:
            "Create a platform for industry leaders to connect, share knowledge, and drive collective progress.",
        },
        {
          title: "Promote Ethical AI",
          imgSrc: EthicalPointer,
          description:
            "Recognize organizations committed to responsible and ethical AI development.",
        },
      ],
    },
    reasonsToApply: [
      {
        imgSrc: "https://kuber.ventures/wp-content/uploads/2024/09/1.jpg",
        title: "Celebrate and Acknowledge Team Effort",
        description:
          "Show appreciation for the relentless efforts of your team, recognizing their hard work to innovate with AI.",
      },
      {
        imgSrc: inspireReason,
        title: "Inspire and Motivate",
        description:
          "Enhance team morale and attract top talent by showcasing your dedication to transformative innovation.",
      },
      {
        imgSrc: boostReason,
        title: "Boost Credibility and Brand Value",
        description:
          "Demonstrate your commitment to cutting-edge technology, solidifying your brand's reputation as a leader in AI integration.",
      },

      {
        imgSrc: gathering,
        title: "Get Recognition at the World's Largest AI Gathering",
        description:
          "Be recognized as an AI innovator and stand shoulder-to-shoulder with industry leaders as a finalist at the world's premier AI event.",
      },
      {
        imgSrc:
          "https://naiknaik.com/wp-content/uploads/2023/11/pexels-eduardo-romero-3649407-1024x683.jpg",
        title: "Global Promotion Package",
        description:
          "Winners receive extensive media exposure, an award logo, and a prestigious trophy to showcase your success.",
      },
    ],
    awards: [
      {
        title: "The Global AI Excellence Award (GAIEA)",
        description:
        "The Global AI Excellence Award (GAIEA) Initiative is a premier global recognition platform honoring organizations at the forefront of artificial intelligence innovation, integration, and impact. Hosted by the Global Investors Forum at the world's largest AI summit, this prestigious award celebrates pioneers who are shaping the future of AI across industries. With carefully curated award categories, this prestigious global recognition honors outstanding organizations making a significant impact within the AI ecosystem—whether by integrating AI into business operations, offering AI-powered solutions, enabling AI adoption through infrastructure and platforms, advancing AI research, or fostering ethical and responsible AI development.",
        imgSrc: "",
        btn1: "",
        btn2: "",
        link1: '',
        link2: '',
      },
      {
        title: "The AI Integration Excellence Award",
        description:
          "In the symphony of digital transformation, some companies conduct their AI integration with unprecedented mastery. This award celebrates those virtuosos who have not just adopted AI—they've transformed it into their competitive edge. We're seeking the bold innovators who have woven AI into their organizational DNA, creating a tapestry of efficiency, innovation, and market leadership. Your story could be the next chapter in the evolution of AI excellence.",
        imgSrc: AIIntegrationAward,
        btn1: "Find Details",
        btn2: "Nominate Now",
        link1: '/gais/award/Ai-Integration-Award',
        link2: '/gais/award/Ai-Integration-Form',
      },
      {
        title: "Best Use of AI in Industry Award",
        description:
          "Every industry has its pioneers—those who dare to reimagine the possible. This award shines a spotlight on the organizations that have orchestrated AI's transformative power to revolutionize their sector. We're searching for the game-changers who haven't just implemented AI but have unleashed its full potential to create ripples of innovation across their industry. Share with us how you're writing the future of your sector.",
        imgSrc: BestUseAward,
        btn1: "Share your Impact",
        btn2: "",
      },
      {
        title: "The Innovative AI-Powered Startup Award",
        description:
          "This award salutes the bold and brilliant minds of the AI startup ecosystem. We are looking for young companies that have successfully incorporated AI into their business model while bringing fresh, innovative solutions to the market. This is your stage to shine. Nominate your company or startup today and let the world witness your AI-powered excellence.",
        imgSrc: InnovativeAward,
        btn1: "Showcase your Vision",
        btn2: "",
      },

      {
        title: "The AI-Ecosystem Accelerator Award",
        description:
          "The AI-Ecosystem Accelerator Award recognizes organizations that excel in fostering and nurturing the growth of AI ecosystems. This award honors entities that provide comprehensive support, resources, and mentorship to AI startups and innovators, driving innovation and economic development in the field of artificial intelligence.",
        imgSrc: EcosystemAward,
        btn1: "Accelerate Together",
        btn2: "",
      },
    ],
  };

  const gradients = [
    "from-purple-500 via-pink-500 to-red-500",
    "from-red-500 to-orange-400",
    "from-pink-500 via-purple-500 to-indigo-500",
    "from-orange-500 to-red-500",
  ];


  const { title, summitDetails, reasonsToApply, awards } = aiSummitData;

  const navigate = useNavigate();
  return (

    <>
      <SEO
        title="GAIEA — Global AI Excellence Awards"
        description="GAIEA celebrates excellence in AI across industries. Learn about categories, timelines, and how to nominate." 
        url="https://www.global-investors-forum.com/gais/award"
      />
      <div ref={containerRef} className="text-black">
      <GAIEA/>
      <section className="lg:px-12 bg-white flex flex-col md:flex-col">
        <div
          className=" flex justify-start items-top bg-cover bg-center  "
          // style={{
          //   backgroundImage:
          //     "url('https://media.licdn.com/dms/image/v2/C4D12AQHRdpT3XD12CQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1649787353589?e=1738195200&v=beta&t=QZQxCP6MyIA_UiT9Dpv9z4GcvWlmQTaNoXQInZWMbNs')",
          // }}
        >
          <div className=" ">
            <h1 className="title w-[325px] lg:w-[500px] ml-4 title uppercase pt-24 pb-8 text-5xl lg:text-7xl font-Antonio font-semibold text-transparent bg-gradient-to-r from-purple-400 via-red-400  to-red-400 bg-clip-text ">
              {title}
            </h1>
          </div>
        </div>

        <div className="  px-6 pb-12">
          <p className="goal text-black text-base lg:text-lg font-Archivo mb-6 ">
            {summitDetails.description}
          </p>
          <h3 className="reason text-xl font-bold mb-4">Why It Matters</h3>
          <p className="goal text-black  text-base lg:text-lg font-Archivo mb-6 ">
            In this era of rapid transformation, recognizing AI excellence
            becomes crucial. It's not just about celebrating success – it's
            about illuminating the path forward. Awards create benchmarks for
            innovation, foster knowledge exchange, and build bridges between
            visionaries and investors. They inspire the next wave of pioneers
            while showcasing responsible AI implementation that benefits
            humanity.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 justify-between text-black text-sm lg:text-lg font-Archivo">
            {summitDetails.goals.map((goal, index) => (
              <div key={index} className="award-card max-w-[400px] p-6 pl-0 ">
                <div className="flex flex-row items-center justify-left h-20">
                  <img className="w-1/6 " src={goal.imgSrc} alt="" />
                </div>
                <h3 className="font-bold pb-1"> {goal.title}</h3>
                <p className="leading-tight">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row-reverse lg:justify-between">
        <div className="hidden lg:block  lg:w-1/3 ">
          <img
            className="w-full lg:h-full object-cover object-center"
            src={BannerLayout2}
            alt="BannarLayout2"
          />
        </div>
        <div className="p-6 bg-white lg:px-16 flex-1">
          <h2 className="reason w-[170px] lg:w-[350px] title uppercase lg:pt-4 pb-8 text-2xl lg:text-5xl font-Antonio font-semibold text-black">
            The World's Largest AI Awards Initiative
          </h2>
          <p className="goal text-black text-base lg:text-lg font-Archivo mb-6 ">
            Understanding the transformative power of AI and the need to
            celebrate excellence in its implementation, we've created something
            unprecedented – the{" "}
            <span className="font-bold">
              world's largest platform celebrating AI innovation.
            </span>{" "}
            Our awards transcend traditional boundaries, uniting pioneers from
            six continents who are pushing the frontiers of artificial
            intelligence. Whether you're a startup in Singapore, an enterprise
            in Estonia, or a pioneer in Peru, these awards offer an
            unprecedented global stage to showcase your AI innovations to the
            world. This initiative spans multiple categories, recognizing
            achievement across various sectors, scales, and applications of AI
            technology. From groundbreaking startups to industry titans, we
            recognize those who aren't just adopting AI – they're
            revolutionizing its possibilities.{" "}
          </p>
          <p className="goal text-black text-base lg:text-lg font-Archivo mb-6 ">
            Our unmatched scope spans every sector, every scale, and every
            corner of the globe. We've assembled the most comprehensive
            categories in the AI ecosystem, evaluated by leading global experts.
            This isn't just an awards program – it's a global movement
            celebrating excellence in artificial intelligence. Join us in
            honoring those who dare to reshape tomorrow. Your innovation
            deserves to be seen, celebrated, and amplified on the world stage.{" "}
          </p>
        </div>
      </section>

      <section className="p-6 sm:p-12 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:px-20">
          {/* Card for the Heading */}
          <div className="flex flex-col md:flex-row justify-center items-center  ">
            <div className="flex h-full reason p-4  items-center bg-black/100 backdrop:blur-md shadow-lg rounded-md">
              <h2 className="text-center px-12 text-2xl sm:text-4xl md:text-5xl uppercase font-Antonio font-bold text-transparent bg-gradient-to-r from-purple-400 via-red-400 to-red-400 bg-clip-text my-4">
                5 Reasons Why You Should Apply
              </h2>
            </div>
          </div>

          {/* Cards for Reasons */}
          {reasonsToApply.map((reason, index) => (
            <div key={index} className="flex justify-center">
              <div className="reason p-4 max-md:max-w-[320px] bg-black/100 backdrop:blur-md shadow-lg rounded-md">
                <img
                  src={reason.imgSrc}
                  className="w-full h-40 sm:h-48 object-cover rounded-md"
                  alt={reason.title}
                />

                <h3 className="text-lg leading-none xl:text-xl font-bold mt-4 mb-2 font-Archivo text-transparent bg-gradient-to-r from-teal-400 via-yellow-400 to-red-400 bg-clip-text">
                  {reason.title}
                </h3>
                <p className="text-white font-Archivo leading-tight text-sm">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-8 bg-gray-100 lg:px-32">
        <h2 className="text-center text-2xl sm:text-4xl md:text-5xl uppercase font-Antonio font-bold text-black mb-8">
          Our Featured Awards
        </h2>
        <div className="space-y-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`award-card flex flex-col ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              } items-center gap:6 md:gap-16 p-6 sm:p-12 rounded-md shadow-md`}
            >
              {
                award.imgSrc && (
                  <img
                    src={award.imgSrc}
                    // alt={award.title}
                    className="w-52 object-contain rounded-md mb-4 lg:mb-0 "
                  />
                ) 
                // : (
                //   "Award Image"
                // )
                
              }

              <div className=" text-center md:text-left lg:ml-6">
                <h3 className="text-xl lg:text-3xl font-Archivo font-bold text-transparent bg-gradient-to-r from-blue-600 via-red-500 to-yellow-600 bg-clip-text mb-4">
                  {award.title}
                </h3>
                <p className="font-Archivo text-center md:text-left text-gray-600 text-base xl:text-xl mb-4 ">
                  {award.description}
                </p>
                <div className="flex flex-row justify-center md:justify-start gap-4 lg:justify-start">
                  {award.btn1 &&(
                    <Link
                    to={
                      award.link1
                        ? award.link1
                        : "mailto:info@global-investors-forum.com"
                    }
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded text-sm uppercase md:font-Archivo font-bold flex items-center"
                    target={award.link1 ? "_self" : "_blank"}
                    rel={award.link1 ? "" : "noopener noreferrer"}
                  >
                    <span>{award.btn1}</span>
                  </Link>
                  )}
                  {award.btn2 && (
                    <Link
                    to={
                      award.link2
                        ? award.link2
                        : "info@global-investors-forum.com"
                    }
                    className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded text-sm uppercase md:font-Archivo font-bold flex items-center"
                    target={award.link2 ? "_self" : "_blank"}
                    rel={award.link2 ? "" : "noopener noreferrer"}
                  >
                    <span>{award.btn2}</span>
                  </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Timelines/>

      {/* <AwardCategories/> */}
      <section className="flex flex-col text-center items-center justify-center bg-white py-16 px-6">
        <div>
          <h1 className="text-5xl text-center md:text-6xl uppercase font-bold bg-gradient-to-r from-orange-500 via-purple-200 to-blue-400 bg-clip-text text-transparent mb-6 p-4">
            GAIEA Award Categories
          </h1>
          <p className="text-lg md:text-xl text-gray-900 max-w-3xl mx-auto">
            Celebrating innovation, ethics, and excellence in artificial intelligence across industries and research
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-3xl ">
              Join the celebration of AI excellence. Submit your nomination and be part of the future of artificial intelligence.
            </p>
        </div>
        <button
                onClick={() => navigate('/gais/all-award-categories')}
                className="px-8 py-4 cursor-pointer bg-gradient-to-r from-purple-500 to-pink-500 text-white uppercase font-semibold rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Explore More Categories
              </button>
      </section>

      <Faq/>

    </div>
    </>
  );
};

export default Award;
