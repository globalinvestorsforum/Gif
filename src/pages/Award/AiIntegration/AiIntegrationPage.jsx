import React, { useRef, useEffect } from "react";
import ZeroCostNominationOpen from "../../../assets/AllAwardPages/ZeroCostNominationOpen.png";
import PaidNominationOpen from "../../../assets/AllAwardPages/PaidNominationOpen.png";
import NominationDeadline from "../../../assets/AllAwardPages/NominationDeadline.png";
import ShortlistAnnounced from "../../../assets/AllAwardPages/ShortlistAnnounced.png";
import WinnersAnnouncement from "../../../assets/AllAwardPages/WinnersAnnouncement.png";
import Winning from "../../../assets/AllAwardPages/Winning.jpg";
import AwardLogo from "../../../assets/AwardPage/Award.png";
import AIIntegrationFormBannar from "../../../assets/AllAwardPages/AIIntegrationFormBannar.jpg";
import AIIntegrationAward from "../../../assets/AwardPage/AIIntegrationAward.jpg";
import Elegibility from "../../../assets/AllAwardPages/ElegibilityNobg.png";
import Showcase from "../../../assets/AllAwardPages/Showcase.png";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AiIntegrationPage = () => {
  const containerRef = useRef(null);

  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // General fade-in effect for all sections
      gsap.utils.toArray(".fade-in").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
            },
          }
        );
      });

      // Slide from the left for headers
      gsap.utils.toArray(".slide-header").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });

      // Slide from the right for images
      gsap.utils.toArray(".slide-image").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, x: 100 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });

      // Scale effect for highlight sections
      gsap.utils.toArray(".scale-in").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });

      // Rotate effect for icons
      gsap.utils.toArray(".rotate-in").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, rotation: 30 },
          {
            opacity: 1,
            rotation: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });

      // Custom animation for timelines
      gsap.utils.toArray(".timeline-item").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up GSAP context on component unmount
  }, []);

  const InfoData = {
    title: "The AI Integration Excellence Award 2025",
    introduction: {
      content:
        "Artificial intelligence (AI) has rapidly emerged as a driving force behind innovation and progress across various industries. Its transformative potential is reshaping the way we live, work, and interact with the world. From healthcare and finance to manufacturing and transportation, AI is revolutionizing how businesses operate and delivering unprecedented value. Recognizing the profound impact of AI, we are proud to introduce The AI Integration Excellence Award at the Global AI Summit, the world's largest AI event.",
      focus_areas: [
        {
          title: "Successful AI Integration",
          description:
            "Successfully incorporated AI into their daily operations, products, or services.",
        },
        {
          title: "Created AI-Driven Solutions",
          description:
            "Developed groundbreaking AI-powered tools that solve real-world problems.",
        },
        {
          title: "AI Adoption Promotion",
          description:
            "Actively promoted the use of AI through their work, initiatives, or advocacy.",
        },
      ],
    },
    eligibility: {
      awardName: "The AI Integration Excellence Award",
      criteria: [
        {
          title: "AI Integration",
          description:
            ": The nominee must have successfully integrated AI into their business operations, models, or offerings. This could include developing AI-powered products, services, or solutions, or using AI to enhance existing processes.",
        },
        {
          title: "Demonstrated Impact",
          description:
            ": The nominee must be able to demonstrate a significant positive impact of their AI integration. This could include increased efficiency, cost savings, improved customer satisfaction, or contributions to social or environmental goals.",
        },
        {
          title: "Innovation",
          description:
            ": The nominee must have demonstrated a high level of innovation in their AI integration. This could involve pioneering new AI applications, developing unique AI algorithms, or adopting cutting-edge AI technologies.",
        },
        {
          title: "Ethical Considerations",
          description:
            ": The nominee must have demonstrated a commitment to ethical AI practices. This could include adhering to AI principles, ensuring fairness and transparency, and mitigating potential biases.",
        },
        {
          title: "Data Privacy and Security",
          description:
            ": The company must prioritize data privacy and security in the development and deployment of their AI solution.",
        },
        {
          imgSrc: Elegibility,
        },
      ],
    },
    categories: {
      description:
        "Our comprehensive list of categories encompasses a wide range of industries and applications, ensuring that every AI-powered company has a chance to be recognized for their exceptional contributions.",
      core_industries: [
        "Healthcare",
        "Pharmaceutical",
        "Energy",
        "BFSI",
        "Education",
        "Agriculture",
        "Foodtech",
        "Retail",
        "E-commerce",
        "Transportation",
        "Automobile",
        "Manufacturing",
        "Generative AI",
        "Customer Service",
        "Marketing",
        "Human Resources",
        "Logistics",
        "Supply Chain",
        "Government",
        "Cybersecurity",
        "Robotics",
        "Space",
        "Environment",
        "Maritime",
        "Media & Communication",
        "Others",
      ],
      emerging_fields: [
        "AI for Social Good",
        "AI for Sustainability",
        "AI for Ethics and Governance",
        "AI for Startups and Entrepreneurs",
        "AI for General Innovation",
      ],
      additional_info:
        "We are continuously expanding our categories to reflect the dynamic nature of the AI landscape. Our team is dedicated to identifying emerging trends and specialized areas within the industry to ensure that every AI-powered company has the opportunity to be recognized. By participating in The AI Integration Excellence Award, you are not only vying for recognition but also contributing to a vibrant ecosystem of AI innovation and progress.",
      example: "The AI Integration Excellence in Healthcare - Award",
    },
    required_information: {
      description:
        "To ensure a comprehensive evaluation of your organization's AI initiatives, please provide the following information:",
      details: [
        {
          title: "Organization Profile : ",
          description:
            "A brief overview of the organization, its mission, and its core business activities.",
        },
        {
          title: "AI Integration Initiatives : ",
          description:
            "A detailed description of the organization's AI initiatives, including specific projects, products, or services that leverage AI.",
        },
        {
          title: "Industry Impact : ",
          description:
            "Explain how your AI-integrated solutions contribute positively to a specific industry or sector. Highlight measurable improvements—such as enhanced operational efficiency, cost savings, environmental sustainability, or improved customer outcomes—resulting from your AI applications.",
        },
        {
          title: "Ethical Considerations : ",
          description:
            "Evidence of the organization's commitment to ethical AI practices, including data privacy, fairness, and transparency.",
        },
      ],
    },
    supporting_documentation: {
      description:
        "Along with the completed nomination form, please submit any relevant supporting documentation, such as:",
      examples: [
        "White papers, case studies, or technical reports detailing the organization's AI projects.",
        "Press releases, news articles, or media coverage highlighting your organization's AI achievements.",
        "Industry recognition awards, honors, or certifications received for your AI innovations.",
        "Customer testimonials or case studies highlighting the benefits of the organization's AI solutions.",
      ],
    },
    evaluation_process: {
      //   imgSrc: EvaluationProcess,
      criteria: [
        "The Global Investors Forum team will carefully evaluate all submitted nominations. The winners will be selected based on a comprehensive assessment of the provided information.",
        "To ensure a fair and transparent evaluation process, we have established an Internal Expert Committee comprised of highly qualified professionals with extensive expertise in the field of AI.",
        "This committee will carefully review all nominations based on predefined criteria to select the award winners. Their decision will be final.",
        "The Awards Management team reserves the right to modify these criteria to maintain fairness and accuracy.",
      ],
    },
    fees: {
      //   imgSrc: NominationFees,
      description:
        "To encourage participation and recognize the significant contributions of AI innovators, we are offering 0% nomination fees until deadline. However, to maintain the sustainability and quality of the awards program, we will be introducing a nominal nomination fee after the deadline.",
    },
    timelines: [
      {
        imgSrc: ZeroCostNominationOpen,
        event: "Zero Cost Nomination Open",
        date: "1st September, 2025",
      },
      {
        imgSrc: PaidNominationOpen,
        event: "Paid Nomination Open",
        date: "1st November, 2025",
      },
      {
        imgSrc: NominationDeadline,
        event: "Nomination Deadline",
        date: "21st January, 2026",
      },
      {
        imgSrc: ShortlistAnnounced,
        event: "Shortlist Announced",
        date: "1st March, 2026",
      },
      {
        imgSrc: WinnersAnnouncement,
        event: "Winners Announcement",
        date: "19th March, 2026",
      },
    ],
    winning: {
      description:
        "Should your nomination be selected as a winner, you will receive:",
      imgSrc : Winning,
      benefits: [
        {
          title: "Award Announcement",
          description:
            "The winners of The AI Integration Excellence award will be announced during the prestigious awards ceremony at the Global AI Summit.",
        },
        {
          title: "A Personalized Trophy",
          description:
            "A unique trophy recognizing your organization’s outstanding achievement in AI integration.",
        },
        {
          title: "Digital Logo",
          description:
            "A high-resolution digital logo for royalty-free use in online and print materials.",
        },
        {
          title: "Press Release",
          description:
            "A professionally written press release announcing your win, issued by the Global Investors Forum.",
        },
        {
          title: "Press Release Template",
          description:
            "A customizable press release template for your organization to share the news with your audience.",
        },
        {
          title: "Community Recognition",
          description:
            "Recognition on the Global Investors Forum’s website and social media channels, reaching a global audience of 80,000+ AI enthusiasts and industry leaders.",
        },
        {
          title: "Exclusive Opportunities",
          description:
            "Special opportunities to connect with industry peers, investors, and potential partners.",
        },
      ],
    },
    tips: [
      {
        title: "Clear and Concise :",
        description: " Use simple language and avoid technical jargon.",
      },
      {
        title: "Strong Writing :",
        description: " Ensure correct grammar and spelling.",
      },
      {
        title: "Relatable Content :",
        description: " Present ideas in a way that's easy to understand.",
      },
    ],

    Showcases: {
      imgSrc: Showcase,
      showcase: [
        {
          title: "User-Friendly Website :",
          description:
            " Ensure ease of navigation and highlight key achievements.",
        },
        {
          title: "Engaging Content : ",
          description: "Use videos, infographics, or other visual aids.",
        },
        {
          title: "Clear Messaging :",
          description:
            " Clearly communicate your nomination's purpose and value proposition.",
        },
      ],
    },
  };

  const {
    title,
    introduction,
    eligibility,
    categories,
    required_information,
    supporting_documentation,
    evaluation_process,
    fees,
    timelines,
    winning,
    tips,
    Showcases,
  } = InfoData;
  return (
    <div
      ref={containerRef}
      className="overflow-hidden text-base lg:text-lg font-Archivo text-black bg-gradient-to-r from-[#c80065]  to-[#01004e]"
    >
      {/* Header */}
      <section className="fade-in flex flex-col ">
        <div className="flex flex-col lg:flex-row">
          <div className=" fall-In flex flex-col items-start justify-end flex-1 ">
            {/* <img
              className=" h-full object-cover bg-center "
              src={AIIntegrationFormBannar}
              alt="AIIntegrationFormBannar"
            /> */}
            {/* Image for small screens */}
            <img
              class=" h-full w-full object-cover lg:hidden"
              src={AIIntegrationAward}
              alt="Small Screen"
            />
            {/* Image for large screens */}

            <img
              class="fade-in relative h-full w-full object-cover hidden lg:block"
              src={AIIntegrationFormBannar}
              alt="Large Screen"
            />
            <div className="slide-header hidden lg:block absolute  lg:left-[2%]  ">
              <div className="flex justify-center flex-1 p-10 ">
                <div
                  className={`relative border-2 border-spacing-1 flex items-end pb-4 w-60 h-44 bg-gradient-to-r from-[#c80065]  to-[#01004e] text-left `}
                >
                  <p className="pl-4 mr-4 pb-2 text-2xl leading-none font-spartan uppercase  text-white font-bold">
                    The <br />
                    AI-Integration Excellence Award
                  </p>
                  <div className=" brightness-120 absolute -top-[70px] -left-12 w-24">
                    <img src={AwardLogo} alt="Award logo" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className=" w-full lg:w-3/5 p-6 lg:p-20 flex-col py-12 ">
            <h2 className="slide-header fall-In text-3xl lg:text-5xl font-Antonio uppercase font-semibold text-yellow-500 mb-4">
              Introduction
            </h2>
            <p className="slide-image fall-In pt-2 text-base lg:text-lg font-Archivo text-white mb-6 ">
              {introduction.content}
            </p>
            <p className="slide-image text-base lg:text-lg font-Archivo text-white mb-6 ">
              The AI Integration Excellence Award will be bestowed upon
              organizations that have demonstrated exceptional achievements in
              the following areas:
            </p>
            <ul className="text-lg font-Archivo text-white space-y-2 list-disc pl-5 pb-6">
              {introduction.focus_areas.map((goal, index) => (
                <li key={index} className="slide-image text-base lg:text-lg">
                  <span className=" font-bold ">{goal.title} : </span>
                  {goal.description}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-yellow-400 z-10 flex flex-col items-center">
          <h2 className="timeline-item text-5xl lg:text-7xl -my-8 p-6 rounded-xl bg-yellow-400 font-Antonio uppercase pb-6 font-semibold text-[#0000d1] text-center">
            Timelines
          </h2>
          <div className="flex w-full p-12 flex-wrap gap-4">
            {timelines.map((timeline, index) => (
              <ul
                key={index}
                className="fade-in flex flex-col flex-1 sm:items-center px-4 "
              >
                <li className="rotate-in flex justify-center">
                  <img src={timeline.imgSrc} className="h-20 " alt="" />
                </li>
                <li className="font-bold text-center">{timeline.event}</li>
                <li className="text-center">{timeline.date}</li>
              </ul>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="fade-in bg-gray-100 pt-8 px-6 lg:px-20">
        <h2 className="slide-header text-5xl lg:text-7xl font-Antonio uppercase font-semibold text-yellow-500 mb-4">
          Eligibility
        </h2>
        <p className="  text-gray-800 mb-6">
          To be considered for{" "}
          <span className="text-yellow-500 font-bold">
            The AI Integration Excellence Award,
          </span>
          applicants must meet the following criteria:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eligibility.criteria.map((item, index) => (
            <ul key={index} className=" flex flex-col pl-4">
              {item.description && (
                <li className="fade-in  list-disc text-gray-700">
                  <span className=" font-bold text-gray-900">{item.title}</span>
                  {item.description}
                </li>
              )}

              {item.imgSrc && (
                <div className="rounded-t-full overflow-hidden">
                  <img
                    src={item.imgSrc}
                    alt={item.title}
                    className="slide-image h-full max-h-30 pr-4 z-10 object-cover object-left bg-gradient-to-r from-blue-100 to-red-100  "
                  />
                </div>
              )}
            </ul>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="fade-in py-8 mx-6 lg:ml-20">
        <h2 className="slide-header text-5xl underline-animated lg:text-7xl font-Antonio uppercase font-semibold text-yellow-500 mb-6">
          Categories
        </h2>
        <p className="text-white max-w-2xl mb-8">
          Our comprehensive list of categories encompasses a wide range of
          industries and applications, ensuring that every AI-powered company
          has a chance to be recognized for their exceptional contributions.
          Some of our core industries are:
        </p>

        <div className="flex flex-wrap  justify-between ">
          <div className="slide-header flex flex-wrap gap-4 max-w-4xl">
            {categories.core_industries.map((category) => (
              <div
                key={category}
                className="rotate-in bg-white shadow-lg rounded-lg py-2 px-4 text-center text-gray-700 font-medium hover:bg-yellow-500 hover:text-white transition"
              >
                {category}
              </div>
            ))}
          </div>

          <div className="w-full pt-8 lg:w-auto flex flex-col gap-4">
            <h3 className="slide-image text-4xl font-bold text-white text-center md:text-left">
              Emerging Fields
            </h3>
            <ul className="list-disc rounded-lg pl-4">
              {categories.emerging_fields.map((category) => (
                <li
                  key={category}
                  className="fade-in text-white font-medium py-1  last:border-none hover:text-gray-100"
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 max-w-4xl text-white">
          <p className="mb-4">
            <span className="slide-header font-bold text-white">Example:</span>{" "}
            {categories.example}
          </p>
          <p className="slide-header">{categories.additional_info}</p>
        </div>
      </section>

      {/* Nomination Process */}
      <section className="fade-in flex flex-col bg-gray-100 lg:flex-row ">
        <div className="slide-image min-h-80 bg-[url('https://www.madisonlogic.com/wp-content/uploads/2022/07/Blog-Image48.png')] bg-cover bg-bottom flex flex-1 items-end ">
          <div className="w-full h-full flex flex-row items-end bg-gradient-to-b from-black/0 to-black/100">
            <h2 className="fade-in text-5xl lg:text-7xl font-Antonio uppercase font-semibold text-yellow-500 pt-40 p-6 lg:pl-20 lg:pb-20  ">
              The Nomination Process
            </h2>
          </div>
        </div>
        <div className="slide-header text-base lg:text-lg my-auto flex-1 py-8 px-6 lg:px-12">
          <p className=" lg:px-8 pt-4">
            All information submitted as part of the nomination process will be
            treated with the utmost{" "}
            <span className="font-bold">confidentiality.</span> Neither the
            nomination itself nor any of its content will be shared with anyone
            outside of our staff and the expert panel. This ensures the privacy
            and integrity of all submissions. We understand that you may have
            sensitive information within your nomination. Rest assured that your
            data will be handled securely and used solely for the purpose of
            evaluating your nomination and selecting award winners.
          </p>
          <ul className="pl-4 list-disc mt-4 ">
            <li className="lg:mx-8">
              Visit our official website or you can submit your nomination via
              email to{" "}
              <span className="text-yellow-500 font-semibold">
                {" "}
                info@global-investors-forum.com{" "}
              </span>{" "}
              for initial screening.
            </li>
            <li className="lg:mx-8">
              Submit required documentation and supporting materials.
            </li>
            <li className=" lg:mx-8">
              Ensure submission is received by the deadline.
            </li>
          </ul>
        </div>
      </section>
      <section className="fade-in grid gap-12 py-8 px-6 text-white lg:grid-cols-2 lg:gap-20 lg:px-20">
        {/* Required Information */}
        <div className="flex flex-col gap-4">
          <h2 className="slide-header text-3xl lg:text-5xl font-Antonio uppercase text-yellow-500">
            Required Information
          </h2>
          <p>{required_information.description}</p>
          <div>
            {required_information.details.map((detail, index) => (
              <ul key={index} className="py-1 pl-4">
                <li className="list-disc">
                  <span className="font-bold">{detail.title}</span>{" "}
                  {detail.description}
                </li>
              </ul>
            ))}
          </div>
        </div>

        {/* Supporting Documentation */}
        <div className="fade-in flex flex-col gap-4">
          <h2 className="slide-header text-3xl lg:text-5xl font-Antonio uppercase text-yellow-500">
            Supporting Documentation
          </h2>
          <p>{supporting_documentation.description}</p>
          <div>
            {supporting_documentation.examples.map((example, index) => (
              <ul key={index} className="py-1 pl-4">
                <li className="list-disc">{example}</li>
              </ul>
            ))}
          </div>
        </div>

        {/* Evaluation Process */}
        <div className="fade-in flex flex-col gap-4">
          <h2 className="slide-header text-3xl lg:text-5xl font-Antonio uppercase text-yellow-500">
            Evaluation Process
          </h2>
          {evaluation_process.criteria.map((list, index) => (
            <ul key={index} className="pl-4">
              <li className="list-disc lg:text-xl">{list}</li>
            </ul>
          ))}
        </div>

        {/* Nomination Fees */}
        <div className="fade-in flex flex-col gap-4">
          <h2 className="slide-header text-3xl lg:text-5xl font-Antonio uppercase text-yellow-500">
            Nomination Fees
          </h2>
          <p className="slide-image lg:text-xl">{fees.description}</p>
        </div>
      </section>

      {/* Winning */}
      <section className="fade-in flex flex-col text-black bg-gray-100  lg:flex-row ">
        <div className="flex flex-col py-8 flex-1 gap-4">
          <h2 className="slide-header text-5xl pl-6 lg:text-7xl lg:pl-20 font-Antonio uppercase text-yellow-500 ">
            Winning
          </h2>

          <p className=" text-base lg:text-lg pl-6 lg:pl-20">
            Should your{" "}
            <span className="text-yellow-500 font-bold">
              nomination be selected as a winner,
            </span>{" "}
            you will receive:
          </p>
          <div className="flex px-6 flex-col gap-2 lg:px-20">
            {winning.benefits.map((benefit, index) => (
              <ul key={index} className=" list-disc pl-4">
                <li>
                  <span className="font-bold">{benefit.title} : </span>
                  {benefit.description}
                </li>
              </ul>
            ))}
          </div>
        </div>
        <img
          className="slide-image lg:w-1/3 object-cover object-right border-yellow-500 border-l-8 sm:hidden lg:block"
          src={winning.imgSrc}
          alt="cover-image"
        />
      </section>

      {/* Tips and Showcases */}
      <section className="fade-in flex flex-col gap-8 text-white py-12 ">
        <h2 className="slide-header text-3xl px-6 lg:text-5xl lg:px-20 font-Antonio uppercase text-yellow-500">
          Tips to Submit a Winning Profile
        </h2>

        {/* First Section */}
        <div className="flex flex-col md:flex-row-reverse gap-8 justify-between">
          <img
            src="https://propulsionquebec.com/wp-content/uploads/2023/06/image-ambition-atouts-580x435.jpg"
            className="slide-image  w-full max-w-md rounded-l-3xl shadow-lg lg:w-1/2 "
            alt="Winning Profile Tips"
          />
          <div className="fade-in flex flex-col gap-4 px-6 lg:pl-20 ">
            <h3 className="slide-header font-Antonio text-xl lg:text-3xl uppercase text-yellow-500">
              Tell a Compelling Story:
            </h3>
            <div>
              {tips.map((tip, index) => (
                <ul className="text-base lg:text-lg" key={index}>
                  <li className="mb-2">
                    <span className="font-bold">{tip.title}</span>{" "}
                    {tip.description}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <img
            src={Showcases.imgSrc}
            className="slide-image w-full max-w-md rounded-r-3xl shadow-lg lg:w-1/2 object-cover"
            alt="Showcase Image"
          />
          <div className="fade-in flex flex-col gap-4 px-6 lg:px-20 lg:w-1/2">
            <h3 className="slide-header font-Antonio text-xl lg:text-3xl uppercase text-yellow-500">
              Showcase Your Work:
            </h3>
            <div>
              {Showcases.showcase.map((cases, index) => (
                <ul className="text-base lg:text-lg" key={index}>
                  <li className="mb-2">
                    <span className="font-bold">{cases.title}</span>{" "}
                    {cases.description}
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-6 mt-4 lg:mx-20 text-center text-white">
        <div className="bg-white/10 backdrop-blur-lg  rounded-t-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h1 className="text-4xl md:text-6xl font-bold font-Antonio  mb-6 text-yellow-500">
            NOMINATE NOW
          </h1>
          <p className="text-xl pb-4 max-w-2xl mx-auto leading-relaxed">
            Don't miss your chance to showcase your AI innovations on the world
            stage. Submit your nominations today and join us at the award
            ceremony celebrating the brightest minds in AI.
          </p>
          <Link to='/gais/award/Ai-Integration-Form'>
          <button
            className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-purple-600 via-purple-400 to-red-400  rounded-full hover:from-purple-600 hover:to-red-400 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            // onClick={() => console.log('Navigate to application form')}
          >
            Submit Your Application
          </button>{" "}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AiIntegrationPage;
