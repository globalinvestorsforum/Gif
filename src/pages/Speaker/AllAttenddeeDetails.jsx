
import AlexanderGunkel from '../../assets/AllAttendees/AttendeeImage/Alexander-Gunkel.jpeg';
import AlexisCrowell from '../../assets/AllAttendees/AttendeeImage/Alexis-Crowell.jpg';
import AlvaroSaezTonda from '../../assets/AllAttendees/AttendeeImage/Alvaro-Saez-Tonda.png';
import AnnaMaeYuLamentillo from '../../assets/AllAttendees/AttendeeImage/Anna-Mae-Yu-Lamentillo-2.jpg';//NightOwlGPT
import DennisTan from '../../assets/AllAttendees/AttendeeImage/Dennis-Tan.jpg';
import HichamElHafed from '../../assets/AllAttendees/AttendeeImage/Hicham-El-Hafed.jpg';//Procys
import MariaCayuela from '../../assets/AllAttendees/AttendeeImage/Maria-Cayuela.jpeg';
import SagiLahav from '../../assets/AllAttendees/AttendeeImage/Sagi.jpg';
import SamuelHazak from '../../assets/AllAttendees/AttendeeImage/Samuel-Hazak.jpg';
import StefanSchwarz from '../../assets/AllAttendees/AttendeeImage/Stefan-Schwarz.jpg';
import GeetaSham from '../../assets/AllAttendees/AttendeeImage/Geeta-Sham.png';
import NevioBuric from '../../assets/AllAttendees/AttendeeImage/NevioBuric.jpg';
import NickFrolov from '../../assets/AllAttendees/AttendeeImage/Nick-Frolov.png';//Refact AI
import MarcoVanDerWerf from '../../assets/AllAttendees/AttendeeImage/Marco-Van-der-Werf.png';
import MariaJAlonso from '../../assets/AllAttendees/AttendeeImage/Maria-J-Alonso.png';
import CristianPascul from '../../assets/AllAttendees/AttendeeImage/Cristian-Pascul.png';
import NaamaManovaTwito from '../../assets/AllAttendees/AttendeeImage/Naama-Manova-Twito.png';
import PabloTapia from '../../assets/AllAttendees/AttendeeImage/Pablo-Tapia.png';
import JulioPernia from '../../assets/AllAttendees/AttendeeImage/Julio-Pernia.png';
import DiegoTorres from '../../assets/AllAttendees/AttendeeImage/Diego-Torres.png';
import NazarenoMarioCiccarello from '../../assets/AllAttendees/AttendeeImage/Nazareno-Mario-Ciccarello.png';
import MaximilianHauser from '../../assets/AllAttendees/AttendeeImage/Maximilian-Hauser.png';
import AndreasAnijalg from '../../assets/AllAttendees/AttendeeImage/Andreas-Anijalg.jpg';//Roofit.solar

import HardikDave from '../../assets/AllAttendees/AttendeeImage/HardikDave.jpeg';
import PKristenKople from '../../assets/AllAttendees/AttendeeImage/PKristenKople.png';
import VishalBatvia from '../../assets/AllAttendees/AttendeeImage/VishalBatvia.jpeg';
import LaurentBsalis from '../../assets/AllAttendees/AttendeeImage/LaurentBsalis.png';
import RezaRezaei from '../../assets/AllAttendees/AttendeeImage/RezaRezaei.jpeg';
import VedantAhluwalia from '../../assets/AllAttendees/AttendeeImage/VedantAhluwalia.jpeg';
import LucasOh from '../../assets/AllAttendees/AttendeeImage/LucasOh.png';
import RohanMalhotra from '../../assets/AllAttendees/AttendeeImage/RohanMalhotra.jpeg';
import HensonTsai from '../../assets/AllAttendees/AttendeeImage/HensonTsai.jpg';
import ChristyFernandezCull from '../../assets/AllAttendees/AttendeeImage/ChristyFernandezCull.jpg';
import SameerMaskey from '../../assets/AllAttendees/AttendeeImage/SameerMaskey.png';
import JasonKim from '../../assets/AllAttendees/AttendeeImage/JasonKim.png';
import AbhishekSharma from '../../assets/AllAttendees/AttendeeImage/AbhishekSharma.png';
import SrikarReddy from '../../assets/AllAttendees/AttendeeImage/SrikarReddy.png';
import VineetDwivedi from '../../assets/AllAttendees/AttendeeImage/VineetDwivedi.png';
import LizaAleksandrova from '../../assets/AllAttendees/AttendeeImage/LizaAleksandrova.png';
import SherazAhmedKhateeb from '../../assets/AllAttendees/AttendeeImage/SherazAhmedKhateeb.png';
import NiladriDutta from '../../assets/AllAttendees/AttendeeImage/NiladriDutta.png';//Tardid
import LimTaoCheng from '../../assets/AllAttendees/AttendeeImage/LimTaoCheng.png';
import MuhammadOwaisKhan from '../../assets/AllAttendees/AttendeeImage/MuhammadOwaisKhan.jpg';//Go Accelovate
import NikolajHviid from '../../assets/AllAttendees/AttendeeImage/Nikolaj-Hviid.jpg';
import RudradebMitra from '../../assets/AllAttendees/AttendeeImage/Rudradeb-Mitra.jpg';
import MaxilmillianHartman from "../../assets/AllAttendees/AttendeeImage/MaximilianHartmann.jpg";
import AlenArslanagic from "../../assets/AllAttendees/AttendeeImage/AlenArslanagic.jpg";
import BarisSen from "../../assets/AllAttendees/AttendeeImage/BarrisSen.jpg";
import jacobhjalmarsson from "../../assets/AllAttendees/AttendeeImage/jacobhjalmarsson.jpg";
import JonathanSiboni from "../../assets/AllAttendees/AttendeeImage/JonathanSiboni.jpg";
import MaximilianHahnenKamp from "../../assets/AllAttendees/AttendeeImage/MaximilianHahenkamp.jpg";
import FredderickGerken from "../../assets/AllAttendees/AttendeeImage/FederickGerken.png";


import React, { useState, useEffect } from 'react';
import { User, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const AttendeeDetails = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);
   // Add this state and useEffect
  const [selectedAttendeeName, setSelectedAttendeeName] = useState(null);
  const navigate=useNavigate();
  useEffect(() => {
    // Get attendee name from session storage
    const storedName = sessionStorage.getItem('selectedAttendeeName');
    if (storedName) {
      setSelectedAttendeeName(storedName);
    }
    setIsVisible(true);
  }, []);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Simple array of attendees data
  const attendeesData = [
    {
      name: "Jacob Hjalmarsson",
      title: "Chief Operating Officer",
      company: "Arboair AB",
      country: "Sweden",
      image: jacobhjalmarsson,
      linkedinUrl:"https://www.linkedin.com/in/jacob-hjalmarsson-26201910a/?originalSubdomain=se",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Jacob Hjalmarsson, COO and co-founder of Arboair since 2019, is an environmental engineer and industrial economist. Jacob has been a part of the Arboair development of AI-driven forest analysis since the beginning. Hjalmarsson's work in automated forest analysis for preventing issues like bark beetle attacks earned him the SKAPA Talang awards.`
        }
      }
    },
    {
      name: "Maria Cayuela",
      title: "Cheif Executive Officer",
      company: "Bio Smart Data",
      country: "Spain",
      image: MariaCayuela,
      linkedinUrl:"https://www.linkedin.com/in/maría-cayuela-calvo-2b59a092/?originalSubdomain=es",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `María Cayuela is the CEO of BioSmartData. A graduate in Pharmacy from the Universidad Complutense de Madrid and a holder of a Master's degree in Business Administration from Harvard University, María has a wealth of experience in biotechnological innovations and personalized medicine. With a strong background in regenerative medicine and genetic applications, she has successfully led BioSmartData since its inception, driving the integration of AI-powered tools to redefine clinical practices. Her leadership has been instrumental in establishing key partnerships and spearheading initiatives that have positioned BioSmartData as a leader in healthcare innovation.`
        }
      }
    },
    {
      name: "Marco van der Werf",
      title: "Cheif Executive Officer",
      company: "Bit",
      country: "Netherlands",
      image: MarcoVanDerWerf,
      linkedinUrl:"https://www.linkedin.com/in/marcovanderwerf/?originalSubdomain=nl",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `At 35, Marco has spent over a decade at the forefront of AI innovation, blending technical expertise with a passion for solving the world’s most pressing challenges. As the founder and CEO Bit, an AI studio based at the University of Amsterdam, he leads a team of 80 brilliant minds, collaborating with top global brands to create transformative AI solutions.Beyond running the studio, Marco shares his knowledge teaching at multiple universities. His mission? To inspire the next generation of AI talent and ensure technology serves humanity in the most impactful ways.`
        }
      }
    },
    {
      name: "Nikolaj Hviid",
      title: "Cheif Excutive Officer",
      company: "Bragi GmBH",
      country: "Germany",
      image: NikolajHviid,
      linkedinUrl:"https://www.linkedin.com/in/nikolaj-hviid-046227/?originalSubdomain=de",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Nikolaj Hviid, founder and CEO of Bragi, is a visionary leader and serial entrepreneur with extensive experience in the consumer electronics industry. His passion for innovation has earned him recognition through hundreds of design awards and more than 30 patents. Nikolaj's groundbreaking contributions, such as inventing hearables and True Wireless eadphones, have earned him prestigious accolades, including two Best of Show awards at CES and Tech5's recognition as Europe's best B2C scale-up.`
        }
      }
    },
    {
      name: "Geetha Sham",
      title: "Managing Director",
      company: "CamCom",
      country: "Germany",
      image: GeetaSham,
      linkedinUrl:"https://www.linkedin.com/in/geetha-s-58a3253/?originalSubdomain=de",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Geetha Sham is the managing director of the European region at CamCom. Her extensive experience leading large and complex businesses focusing on products and digital enablement provides valuable insights at CamCom. A passionate supporter of diversity and inclusion efforts, Geetha, a tech virtuoso, brings a level of experience that is one of the key drivers to CamCom’s long-term success. Customers across Europe rely on Geetha to be the source of truth for their businesses, solve their biggest challenges, and help them grow and confidently run their businesses. 

          She oversees CamCom’s product strategy and leads the platform engineering, harnessing advanced technology that allows CamCom’s customers and partners across Europe. She is an essential cog of CamCom’s plan to be the global AI-powered visual inspection expert platform. Geetha is an experienced business leader who has successfully led a relevant/related high-growth business in top tech companies like Cybage, Mindtree, Wipro, and Oracle. Geetha embodies the spirit of CamCom – nothing succeeds like success. “CamCom is perfectly positioned to help its customers transform their quality inspection processes across the product lifecycle around the globe. I am privileged to lead a young, dynamic team with the zest to take on the world.” Geetha holds an engineering degree in electronics and communications from Bangalore University.`
        }
      }
    },
    {
      name: "Sagi Lahav",
      title: "Cheif Technology Officer",
      company: "Chronom AI Ltd",
      country: "Israel",
      image: SagiLahav,
      linkedinUrl:"https://www.linkedin.com/in/sagi-lahav-83394a1b3/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Sagi Lahav is the Chief Technology Officer and Co-Founder of Chronom AI, where he spearheads the company’s technological development, innovation strategies, and infrastructure management. With extensive expertise in cloud architecture, networks, DevOps, Kubernetes, and AI integration, Sagi plays a pivotal role in driving Chronom AI’s success. He leads the development team and oversees critical innovations, including the development of a cutting-edge non-intrusive cloud discovery scanner and the seamless integration of AI solutions into the company’s offerings. Under Sagi’s leadership, Chronom AI has optimized infrastructure costs, scaled operations, and enhanced its AI-driven value for customers and stakeholders. Before co-founding Chronom AI, Sagi served as a team lead at an Azure Partner MSP for 2.5 years, earning multiple Azure, DevOps, and System Architecture certifications along the way. Fuelled by his curiosity for technology and passion for innovation, Sagi thrives on “inspecting underneath the hood” and exploring how AI can deliver efficiency, value, and groundbreaking solutions to real-world challenges.`
        }
      }
    },
    {
      name: "Dennis Tan",
      title: "Cheif Technology Officer",
      company: "Dashmote",
      country: "Netherlands",
      image: DennisTan,
      linkedinUrl:"https://www.linkedin.com/in/dashdennis/?originalSubdomain=nl",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `An entrepreneur since the age of 15, Dennis z.s. Tan has participated in the creation of over 25 companies and is an international public speaker. He is the co-founder of multiple entrepreneurial groups including Dutch Entrepreneurial Communities, Erasmus Centre for Entrepreneurs Student Association and involved in various European organizations such as Think Young, the European Confederation of Junior Enterprises and FACE Entrepreneurship.`
        }
      }
    },
    {
      name: "Nevio Buric",
      title: "Cheif Exective Officer",
      company: "DaiDream",
      country: "Croatia",
      image: NevioBuric,
      linkedinUrl:"https://www.linkedin.com/in/nevio-buric-🇪🇺-788451115/?originalSubdomain=de",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Nevio Buric is the CEO and Co-Founder of Daidream, a company dedicated to transforming the digital world into a better place for modern families and children. With a deep product mindset and a passion for impactful innovation, Nevio began this journey in 2023, inspired by his role as a father of three.

Nevio’s professional career spans media and data analytics, where his experience, including time at Amplitude, taught him the importance of building exceptional products. He brings this expertise to Daidream, combining technical know-how with a heartfelt mission to change the “new normal” for his children and generations to come. Driven by a promise to his family and a vision for long-term impact, Nevio is leading Daidream to create a sustainable business that ensures positive change in how children engage with technology and storytelling. Under his leadership, Daidream aims to revolutionize digital content with innovative tools like Mello, delivering creativity, education, and engagement for families worldwide.`
        }
      }
    },
    {
      name: "Samuel Hazak",
      title: "Cheif Technology Officer",
      company: "Equaminity AI",
      country: "Netherlands",
      image: SamuelHazak,
      linkedinUrl:"https://www.linkedin.com/in/samuel-h-9728a288/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Samuel Hazak is the co-founder and CTO of Equanimity AI, a HealthTech startup transforming chronic pain management with AI and IoT technologies. At Equanimity AI, Samuel leads the development of personalized solutions to improve the quality of life for chronic pain sufferers. With over a decade of experience, he has managed AI business units, overseeing health and wellness solutions at Nanit and serving millions of users globally. Samuel has also led cross-functional AI teams, collaborating with major companies such as Jaguar Land Rover and BMW to deliver innovative solutions in autonomous systems and robotics. Holder of an M.Sc. in Bioengineering and AI, Samuel is a co-inventor of nine registered patents and an advocate for leveraging AI to tackle real-world challenges.`
        }
      }
    },
    {
      name: "Stefan Schwarz",
      title: "Vice President",
      company: "Flytxt",
      country: "Netherlands",
      image: StefanSchwarz,
      linkedinUrl:"https://www.linkedin.com/in/stefanschwarz/?originalSubdomain=de",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `With over 25 years of experience in the strategic development of telecom, IT, and data-driven businesses, Dr. Stefan Schwarz is a seasoned leader focusing on innovation and tangible results. His expertise spans AI, IoT, and advanced analytics, complemented by a strong sales and customer value management background. Having started his professional career in Strategic Consulting he has worked in leadership positions spanning different industries like media, telecommunication or IT vendors, and management consulting. Since 2023 Dr. Stefan Schwarz has been responsible for Flytxt business in the European Region. He and his team focus on leveraging cutting-edge AI technology, enabling enterprises to create maximum long-term value for their customers. Dr. Stefan Schwarz is also a renowned speaker at many industry and company events.`
        }
      }
    },
    {
      name: "Álvaro Sáez Tonda",
      title: "AI Researcher Leader",
      company: "HechicerIA",
      country: "Spain",
      image: AlvaroSaezTonda,
      linkedinUrl:"https://www.linkedin.com/in/álvaro-sáez-297b7853/?originalSubdomain=es",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `AI researcher and software development leader with expertise in generative modeling, computer vision, and natural language processing. He’s designed high-impact products showcased at global tech events like MWC Barcelona, Web Summit, and CES Las Vegas, blending innovation with business strategy. Passionate about applying AI and automation to optimize processes, reduce costs, and create a future where quality of life doesn’t depend on traditional work.`
        }
      }
    },
    {
      name: "Diego Torres",
      title: "Founder",
      company: "Jada AI Inc.",
      country: "USA",
      image: DiegoTorres,
      linkedinUrl:"https://www.linkedin.com/in/diegoto/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Diego Torres is a Computer Scientist and founder of Jada Ai, a laboratory dedicated to developing safe Artificial General Intelligence, also known as Strong AI or AGI with the goal of accelerating humanity’s rate of technological innovation while currently helping companies integrate the Jada AI Prototype Model to scale their business operations. Diego is also a Top Voice on the business networking platform Linkedin, where he shares his experiences in startup development and artificial intelligence research.`
        }
      }
    },
    {
      name: "Jonathan Siboni",
      title: "Cheif Executive Officer",
      company: "Luxurynsight",
      country: "France",
      image: JonathanSiboni,
      linkedinUrl:"https://www.linkedin.com/in/jonathansiboni/?originalSubdomain=fr",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Jonathan Siboni, graduate of ESSEC, La Sorbonne, and Sciences Po, is the founder & CEO of Luxurynsight. With 15+ years in luxury, fashion, and beauty, he is a recognized expert in digital transformation and global brand strategy, notably in China. Convinced data drives the future of brands, he created Luxurynsight, which in 2024 expanded its AI and trend forecasting capabilities with the acquisition of Heuritech to lead data intelligence in luxury.`
        }
      }
    },
    {
      name: "Naama Manova-Twito",
      title: "Founder",
      company: "Marketeam Inc",
      country: "USA",
      image: NaamaManovaTwito,
      linkedinUrl:"https://www.linkedin.com/in/naama-manova-twito-7b634b13/?originalSubdomain=il",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Award winning marketer, with 20 years of Executive Management & Marketing experience in private & public companies, facilitating investments of +$50M, as well as M&A's & IPO, leading cross company strategic processes, global brand positioning, significant growth and building incredible teams.`
        }
      }
    },
    {
      name: "Maximilian HahnenKamp",
      title: "Cheif Executive Officer",
      company: "Scavenger AI",
      country: "Germany",
      image: MaximilianHahnenKamp,
      linkedinUrl:"https://www.linkedin.com/in/maximilian-hahnenkamp/?originalSubdomain=at",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Forbes 30under30. Former captain of the Austrian Youth National Team. Master in Management from Bocconi University.`
        }
      }
    },
    {
      name: "Cristian Pascual",
      title: "Cheif Executive Officer",
      company: "Mediktor",
      country: "Spain",
      image: CristianPascul,
      linkedinUrl:"https://www.linkedin.com/in/pascualcristian/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Cristian Pascual is an industrial engineer and MBA. For 19 years he held various top management positions in large companies before founding Mediktor, the most advanced  AI-powered platform designed to help navigate healthcare services. In addition, he is an angel investor in more than 20 startups. He is an entrepreneur with more than 10 years of experience immersed in the Digital Health Ecosystems in US, Europe and Latin America.`
        }
      }
    },
    {
      name: "Max-Frederick Gerken",
      title: "Cheif Executive Officer",
      company: "OPTOCYCLE GmbH",
      country: "Germany",
      image:FredderickGerken,
      linkedinUrl:"https://www.linkedin.com/in/maxfrederickgerken/?originalSubdomain=de",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Max-Frederick Gerken is the founder and CEO of Optocycle GmbH, a 2022-founded startup in Tübingen specializing in AI-based classification of mineral construction waste. Previously, he held a leadership role at the Schwarz Group. He studied at the University of Tübingen, where he also founded his first company. Gerken is recognized as an expert in AI and sustainability, advocating for strengthening German SMEs through artificial intelligence.`
        }
      }
    },
    {
      name: "Alexis Crowell",
      title: "Chief Marketing Officer",
      company: "Axelera AI",
      country: "England",
      image: AlexisCrowell,
      linkedinUrl:"https://www.linkedin.com/in/alexiscrowell/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Alexis Crowell is the Chief Marketing Officer (CMO) at Axelera AI. With over 20 years of global experience across four continents, Alexis brings a unique perspective to leadership, shaped by a diverse background spanning software engineering, AI and deep learning frameworks, edge computing, cloud technologies, and product marketing. 

      Her career is marked by a commitment to innovation, strategic problem-solving, and driving impactful results. Prior to joining Axelera AI, Alexis served as Vice President and General Manager for the Technology Solutions, Software, and Services group in Asia Pacific at Intel Corporation. In this role, she spearheaded the company’s growth across the region, delivering tailored technology solutions that met the dynamic needs of Intel's customers.

Alexis’s multidisciplinary expertise and global leadership experience make her a driving force behind Axelera AI's mission to innovate and lead in the AI and edge computing space.`
        }
      }
    },
    {
      name: "Dr. Maximilian Hauser",
      title: "Neural Data Scientist",
      company: "Purple Gaze",
      country: "Netherlands",
      image: MaximilianHauser,
      linkedinUrl:"https://www.linkedin.com/in/maximilian-hauser-a9b454225/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Dr. Maximilian Hauser is a Neural Data Scientist at Purple Gaze with over a decade of experience in cognitive neuroscience. His work focuses on developing innovative solutions to advance our understanding of brain function and behavior. Dr. Hauser’s expertise includes a wide range of neuroimaging technologies and experimental paradigms with a particular interest in applying AI to solve complex challenges in neuroscience.`
        }
      }
    },
    {
      name: "Maria J. Alonso",
      title: "Cheif Executive Officer",
      company: "Qaleon Solution SL",
      country: "Spain",
      image: MariaJAlonso,
      linkedinUrl:"https://www.linkedin.com/in/mjalonso/?originalSubdomain=es",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `With more than 25 years of international experience, Maria J. has been an Independent Director of AIG Latinamerican Investments, a Non-Executive Director of Zinkia Entertainment (listed on the stock exchange), and an of AIG Latinamerican Investments, Non-Executive Director of Zinkia Entertainment (listed on BME Growth), and member of the Audit Committee, and CNR. As an executive, she has been responsible for Strategy and Institutional Relations in Europe and Latin America, as well as Corporate Governance in companies in the technology and artificial intelligence, telecommunications, food and pharmaceuticals.      

She is highly committed to non-profit organisations, both professional and social. She is a member of the Board of Trustees of the SEP Alumni Scholarship Foundation (USA), which awards scholarships to leaders of social and/or for-profit organisations for the benefit of their families and communities. She has been President of IBWomen for 6 years.  Mentor at Promociona (promotes the development of women executives, CEOE-ESADE). Degree in Law, Universidad Complutense de Madrid, and Universidad San Pablo CEU. Pablo CEU University, she also completed several years ago the Global Management Program at Coventry University at Coventry University (London - UK). The Executive Program at Stanford Graduate School of Business (USA), has been a turning point in her professional mentality, and after completing it, she has continued with various specific studies on Artificial Intelligence and Machine Learning, Big Data, etc. and decided to become an innovative technology entrepreneur/entrepreneur based in Spain.`
        }
      }
    },
    // {
    //   name: "Oleg Klimov",
    //   title: "Founder",
    //   company: "Refact.AI",
    //   country: "England",
    //   image: ,
    //   linkedinUrl:"https://www.linkedin.com/in/oleg-klimov/",
    //   tabContent: {
    //     overview: {
    //       title: "Professional Overview",
    //       content: `Oleg Klimov is the Founder of Refact.ai, a company developing an AI Agent to assist developers. With over a decade of experience in software development and artificial intelligence, his career highlights include research work at OpenAI and managing large software projects.`
    //     }
    //   }
    // },
    {
      name: "Alexander Gunkel",
      title: "Founder",
      company: "Space4Good B.V",
      country: "Netherlands",
      image: AlexanderGunkel,
      linkedinUrl:"https://www.linkedin.com/in/alexandergunkel/?originalSubdomain=nl",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Alexander Gunkel is a visionary serial entrepreneur leveraging space technology to drive social and environmental impact. As the co-founder of three spacetech impact ventures and the Managing Director of Space4Good, Alex has been at the forefront of pioneering solutions that harness satellite earth observation and AI to address the United Nations Sustainable Development Goals. Under his leadership, Space4Good became the first European geospatial B Corp, setting a benchmark for ethical and impactful innovation. Alex’s passion for using space technology for good was sparked during his tenure at the European Space Agency, where he gained firsthand insight into the transformative potential of satellite data. Through AI-powered automation, he and his team at Space4Good have scaled economic solutions to tackle some of the world’s most pressing challenges. Alex’s commitment to leveraging cutting-edge technology for the greater good exemplifies the innovative spirit and ethical leadership that define the future of AI-driven impact.`
        }
      }
    },
    {
      name: "Nazareno Mario Ciccarello",
      title: "Cheif Operating Officer",
      company: "Soource",
      country: "Italy",
      image: NazarenoMarioCiccarello,
      linkedinUrl:"https://www.linkedin.com/in/nazarenomariociccarello/?originalSubdomain=ite",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Nazareno is the Co-Founder e Cheif Operating Officer of Soource with over 20 years of experience in the healthcare sector, where he successfully led international business development and drove revenue growth through strategic licensing opportunities. A fluent speaker of five languages and seasoned entrepreneur, he co-founded FunctionalGums before establishing Soource. Leveraging his extensive network and expertise, Nazareno has secured the adoption of Soource by major multinationals like Nexi, Granarolo, and Bulgari within just four months of launch.`
        }
      }
    },
    {
      name: "Baris Sen",
      title: "Head of Growth",
      company: "TextCortex",
      country: "Netherlands",
      image: BarisSen,
      linkedinUrl:"https://www.linkedin.com/in/senbaris/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Results-driven marketing professional with over 7 years of experience in product marketing. Leveraging a growth mindset and an iterative approach, I specialize in developing innovative digital product strategies that drive business growth and enhance customer experiences.

      With extensive expertise in customer analytics and data-driven decision-making, I collaborate with companies to transform their marketing efforts by implementing user-centric growth strategies that yield sustainable results.`
        }
      }
    },
    {
      name: "Pablo Tapia",
      title: "Cheif Executive Officer",
      company: "TUPL",
      country: "Spain",
      image: PabloTapia,
      linkedinUrl:"https://www.linkedin.com/in/pablo-tapia-7483641/?originalSubdomain=es",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Pablo Tapia has a passion for technology and innovation. He is a co-founder and the Chief Technology Officer of TUPL, company that develops AI-based automation solutions to simplify complex operations across various sectors. Prior to working at TUPL he held various technical and management positions in multinational companies, including Nokia, Optimi and T-Mobile in the US. During his career he has been recognized worldwide for his technical expertise in the area of mobile communications, in which he has authored two books, and generated more than 40 patents. Pablo has a MSc in Telecommunications from the University of Malaga, Spain.`
        }
      }
    },
    {
      name: "Dr. Maximilian Hartmann",
      title: "Managing Director",
      company: "vGreens Holding GmbH",
      country: "Germany",
      image: MaxilmillianHartman,
      linkedinUrl:"https://www.linkedin.com/in/dr-maximilian-a-hartmann/?originalSubdomain=de",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Dr. Maximilian Hartmann is the Co-Founder and Managing Director of vGreens. He graduated with First Class Honors in Business Administration from the University of Wales, then earned his MBA at the University of Düsseldorf before completing a doctorate and working as a lecturer. In 2022, he co-founded vGreens, successfully leading investor relations and funding. In addition to this role, he is actively involved in volunteer work with Rotary International and the NGO "Projekthilfe Gambia".`
        }
      }
    },
    {
      name: "Alen Arslanagic",
      title: "Cheif Executive Officer",
      company: "Visium SA",
      country: "Switzerland",
      image: AlenArslanagic,
      linkedinUrl:"https://www.linkedin.com/in/alen-arslanagic-67852696/?originalSubdomain=ch",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Forbes 30 Under 30 entrepreneur and CEO of Visium. Leading Swiss AI consultancy helping global enterprises deploy production-grade AI solutions. Recognized as BILANZ Digital Shaper with expertise in scaling AI initiatives that deliver real business impact.`
        }
      }
    },
    {
      name: "Abhishek Sharma",
      title: "Vice President",
      company: "AR Genie Inc",
      country: "USA",
      image: AbhishekSharma,
      linkedinUrl:"https://www.linkedin.com/in/abhishek-sharma-007/?originalSubdomain=in",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Abhishek Sharma is the Vice President of AR Genie, a pioneering company at the forefront of Augmented Reality (AR), Generative AI, and Computer Vision solutions. With extensive experience in strategic business development, sales, and technology-driven transformation, Abhishek plays a crucial role in expanding AR Genie’s presence across industries, including Aerospace, Defense, Oil & Gas, Manufacturing, and MRO (Maintenance, Repair, and Overhaul).

His leadership has been instrumental in driving enterprise adoption of AR-powered remote
assistance, AI-driven maintenance solutions, and immersive training applications. Abhishek is setting
up multiple global collaborations, enabling businesses to optimize operations, reduce downtime,
and enhance workforce efficiency through next-gen AR & AI technology.
With a deep passion for digital transformation and industrial innovation, he continues to champion
AR Genie's mission to redefine how industries operate in the era of Industry 4.0.`
        }
      }
    },
    {
      name: "Rudradeb Mitra",
      title: "Chief Executive Officer",
      company: "Omdena",
      country: "USA",
      image: RudradebMitra,
      linkedinUrl:"https://www.linkedin.com/in/mitrar/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Rudradeb Mitra is the Founder and CEO of Omdena. With a background in AI research beginning in 2002, he has published ten research papers and worked with organizations such as IBM Research Lab and TZI. A University of Cambridge alumnus, Rudradeb is also the author of Creating Value with Artificial Intelligence and has mentored startups through Google for Startups, Seedstars, and the Founder Institute.

          As CEO, Rudradeb has led Omdena in executing over 600 AI projects in 80+ countries, working with partners including the United Nations and the World Food Programme. His leadership was instrumental in Omdena’s COVID-19 initiative being featured on the Nasdaq billboard in Times Square, showcasing the company’s impactful use of AI for social good.`
        }
      }
    },
    {
      name: "Liza Aleksandrova",
      title: "Co-Founder",
      company: "Mod-y",
      country: "Germany",
      image: LizaAleksandrova,
      linkedinUrl:"https://www.linkedin.com/in/aelisaveta/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Liza Aleksandrova is the COO and Co-founder of Mod-y. With 15 years of expertise in business development, communications, and team management, she played a key role in building Mod-y’s strong AI team alongside Dr. Artem Pichka, an expert in AI, data science, and robotics. Together with the team, they developed Mod-y’s innovative platform, an AI Fashion online Store designed to unlock e-commerce potential, optimize business resources, reduce fashion waste, and simplify high-quality fashion content creation.`
        }
      }
    },
    {
      name: "Kristen Kople",
      title: "Head of Marketing",
      company: "Edgematics Group",
      country: "UAE",
      image: PKristenKople,
      linkedinUrl:"https://www.linkedin.com/in/kirsten-kopke/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Kirsten Kopke is the Head of Marketing at Edgematics Group, overseeing global marketing initiatives, brand strategy, and go-to-market execution. With extensive experience in B2B technology marketing, she has successfully positioned Edgematics as a leader in data consulting, AI-driven transformation, and enterprise data solutions. Her expertise in strategic brand positioning and digital engagement has played a crucial role in driving awareness and adoption of Edgematics' AI-powered platforms across global markets.`
        }
      }
    },
    {
      name: "Srikar Reddy",
      title: "Cheif Executive Officer",
      company: "Eternal Robotics Private Limited",
      country: "India",
      image: SrikarReddy,
      linkedinUrl:"https://www.linkedin.com/in/srikar-reddy-6118584a/?originalSubdomain=in",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Srikar Reddy is a first-generation entrepreneur with 8+ years of experience spanning hardware and software R&D, product management, and business development in the technology sector. He successfully led the exit and acquisition of his first company in 2019. As one of the inventors and patent holders of MYRO, the world’s first interior wall painting robot, Srikar has played a crucial role in launching this revolutionary technology across India, GCC, and Latin America, collaborating with top leaders in the real estate and construction industries.

Beyond robotics, Srikar has spearheaded the development of AI solutions for Industry 4.0, driving the growth of platform-as-a-service products that deliver business impact to some of India's largest manufacturing brands across the automotive, consumer goods, pharmaceutical, and retail sectors. His expertise spans R&D, multidisciplinary engineering, data science, and product management, alongside investment analysis, financial modeling, and ESG practices.

Srikar holds a B.E (Hons) in Electrical and Electronics Engineering from BITS Pilani. Passionate about
automation solutions that create a sustainable impact, he enjoys connecting with people on technology,
business, and football.`
        }
      }
    },
    {
      name: "Dr. Sameer Maskey",
      title: "Cheif Executive Officer",
      company: "Fusemachines",
      country: "Nepal",
      image: SameerMaskey,
      linkedinUrl:"https://www.linkedin.com/posts/fusemachines_fusemachines-ceo-dr-sameer-maskey-ceocom-activity-7227563272084844545-MTjf/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Dr Sameer Maskey is the Founder & CEO of Fusemachines Inc., an enterprise AI product and solutions company at the forefront of AI-enabled transformation. Dr. Maskey has more than two decades of experience in artificial intelligence, natural language processing, machine learning, data science and is Adjunct Associate Professor at Columbia University.
          
          After completing his PhD in Computer Science from Columbia University, he joined IBM Watson Research Center where he invented various statistical algorithms to improve speech-to-speech translation and question answering systems.`
        }
      }
    },
    {
      name: "Rohan Malhotra",
      title: "Founder",
      company: "Roadzen Inc",
      country: "CA",
      image: RohanMalhotra,
      linkedinUrl:"https://www.linkedin.com/in/rohanmalhotra7/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Rohan Malhotra is the CEO and founder of Roadzen, a global insurtech company building next generation auto insurance using AI. Under his leadership Roadzen made history as the first Indian insurtech to debut on NASDAQ. Roadzen has pioneered computer vision research, generative AI and telematics including tools and products for road safety, underwriting and claims. Companies like Axa, Allianz, Tata, and Audi use Roadzen to provide a better auto insurance experience to every driver on the road. Roadzen has been included in the Russel 2000® and Russel 3000® indexes and has earned recognition as a top AI innovator by Forbes, Fortune, CNBC and Financial Express. Mr Malhotra has also won accolades for entrepreneurship and innovation from Economic Times, Business World, and Stevie’s. Previously, Mr. Malhotra served as the Chief Executive Officer of Avacara, an enterprise software company that provided product development to Fortune 500 companies. Mr. Malhotra holds a bachelor's degree in engineering from NSIT, Delhi University, India and a master's degree from Carnegie Mellon University where he studied AI and robotics.`
        }
      }
    },
    {
      name: "Henson Tsai",
      title: "Cheif Executive Officer",
      company: "Sleekflow Technologies Limited",
      country: "Hong Kong",
      image: HensonTsai,
      linkedinUrl:"https://www.linkedin.com/in/henson-tsai/?originalSubdomain=sg",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Henson Tsai is the Founder and CEO of SleekFlow, a SaaS startup launched in 2019. SleekFlow is an Omnichannel Conversational AI Conversion Suite for enterprises to leverage AI in customer engagement, integrating platforms like WhatsApp and Messenger with CRM and e-commerce tools such as Salesforce and Shopify. Henson was named in Forbes Asia's 30 Under 30 list in 2023.`
        }
      }
    },
    {
      name: "Vineet Dwivedi",
      title: "Founder",
      company: "LaunchX Labs Pvt Ltd",
      country: "India",
      image: VineetDwivedi,
      linkedinUrl:"https://www.linkedin.com/in/vindwi/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Vineet Dwivedi is a seasoned tech entrepreneur with over 22 years of experience in scaling technology for enterprises and startups. A three-time founder, he has built multiple data platforms and led high-impact technology teams. With expertise in designing and implementing scalable systems, he specializes in leveraging cutting-edge data science, machine learning, and cloud technologies to develop large-scale, data-driven solutions. An alumnus of IIT Kanpur, Vineet is passionate about driving innovation and transforming businesses through advanced technology.`,
        }
      }
    },
    {
      name: "Jason Kim",
      title: "Cheif Executive Officer",
      company: "MOBILTECH Co., Ltd.",
      country: "South Korea",
      image: JasonKim,
      linkedinUrl:"https://www.linkedin.com/in/jason-kim-058256188/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Jason Kim is the Founder and CEO of MOBILTECH, where he leads the company’s development of AI-powered 3D mapping, SLAM technology, and LiDAR-based digital twin solutions. He founded MOBILTECH during his Ph.D. candidacy in Electrical and Electronic Engineering at Yonsei University, after earning his B.S. in Electrical Engineering. 

Jason has deep expertise in nonlinear control, autonomous navigation, and spatial AI. His contributions to high-definition mapping and AI-integrated LiDAR technologies have positioned MOBILTECH as a leading player in the autonomous driving and smart city sectors. He has also served as the Committee Chair of the Seoul Tech Meetup Council (2023–present) and a member of the Autonomous Driving Future Forum under the Ministry of Land, Infrastructure, and Transport (2020–present).
`
        }
      }
    },
    {
      name: "Lim Tao Cheng",
      title: "Chief Executive Officer",
      company: "WISE AI SDN BHD",
      country: "Malaysia",
      image: LimTaoCheng,
      linkedinUrl:"https://www.linkedin.com/in/tao-cheng-lim-a5502628/?originalSubdomain=sg",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `David Lim is the founder and CEO of WISE AI, a leading AI company in Southeast Asia known for its proprietary eKYC and digital identity technologies used in government, banking, insurance, fintech, ICT, and various sectors. The company also extends its AI capabilities to Generative AI and small language model (SLM) technologies. 

          WISE AI achieved a significant milestone when it became the only Malaysian company and one of few companies in Southeast Asia to be certified by both the National Institute of Standards and Technology (NIST) of the United States and ISO30107 for its superior AI capabilities. The NIST ranks WISE AI among the top 25 globally for its facial recognition matching speed.

          David is an esteemed member of the National Blockchain and AI Committee, appointed by the Ministry of Science, Technology and Innovation of Malaysia (MOSTI) to advance the National AI Roadmap initiatives. An IEEE CertifAIEd Authorised Assessor of AI Ethics, he has significantly contributed to Malaysia’s National AI Governance and Ethics framework.`
        }
      }
    },
    {
      name: "Sheraz Ahmed Khateeb",
      title: "Cheif Executive Officer",
      company: "WORD WORKS AI MIDDLE EAST L.L.C-FZ",
      country: "UAE",
      image: SherazAhmedKhateeb,
      linkedinUrl:"https://www.linkedin.com/in/sheraz-ul-khateeb-424a5855/?originalSubdomain=pk",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Sheeraz Khateeb, Founder of Word Works AI and Regional Channel Manager at Rockwell Automation for MENA, is a tech visionary with over 20 years of expertise in AI-driven automation, cloud solutions, and digital transformation. A London Business School MBA graduate, Sheeraz observed that businesses in the Middle East face rising customer service costs and inconsistent engagement. This inspired the founding of Word Works AI, offering hyper-realistic AI voice agents that deliver seamless, multilingual customer interactions at scale. With strategic partnerships across industries, Sheeraz is driving AI innovation to transform customer experience and operational efficiency globally.`
        }
      }
    },
    {
      name: "Julio Pernía Aznar",
      title: "Cheif Executive Officer",
      company: "Bdeo Technologies S.L.",
      country: "Spain",
      image: JulioPernia,
      linkedinUrl:"https://www.linkedin.com/in/juliopernia/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Julio Pernía. Graduated in Telecommunications Engineering. He started his career as an entrepreneur in 2006 with the founding of his first InsurTech company, Reparanet, the largest SaaS platform for repair companies in Spain. In addition to being an entrepreneur in the InsurTech industry, he has worked in the sports technology industry: in 2012, he co-founded Director11, a sports management SaaS platform that is currently the most used product in Spain's La Liga. International clubs such as Real Madrid, FC Barcelona, Olympique de Marseille, Valencia and Villarreal are currently Director11 customers.`
        }
      }
    },
    {
      name: "Lucas Oh",
      title: "Chief Executive Officer",
      company: "DEEP IN SIGHT Co.,Ltd",
      country: "South Korea",
      image: LucasOh,
      linkedinUrl:"https://www.linkedin.com/company/deep-in-sight/?originalSubdomain=kr",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Lucas Oh is the co-founder and CEO of DEEP IN SIGHT, an AI-driven 3D solutions development company, founded in June 2020.Prior to founding DEEP IN SIGHT, Lucas Oh served as a Senior Researcher at the Korea Institute of Ocean Science & Technology (KIOST), a Senior Researcher at Airbus Defense & Space in France, and the Director of the Corporate R&D Center at Y&G Co., Ltd.

He holds a Ph.D. in Astronomy and Space Science from Yonsei University. With over 15 years of experience in optics and image processing R&D, he specializes in geometrical and diffractive optical design, optical numerical simulation, micro-optics master fabrication (TPP), deep learning-based image processing, and 3D sensing optics & imaging algorithms (such as ToF and Structured Light).`
        }
      }
    },
    {
      name: "Christy Fernandez - Cull",
      title: "Cheif Executive Officer",
      company: "Davinci wearables, inc",
      country: "France",
      image: ChristyFernandezCull,
      linkedinUrl:"https://www.linkedin.com/in/christy-fernandez-cull/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Dr. Christy Fernandez-Cull is the CEO of DaVinci Wearables. Previously, she led the sensing and perception system’s teams at Waymo - formerly Google Self-Driving. She was also the Head of Sensors at Lyft Level 5 Self-Driving Division, leading sensor architecture for Lyft vehicle platforms — designing machine eyes to help transform transportation of the future. Prior to Lyft, she was a senior technologist at Apple spanning autonomous systems and the Camera and Depth Hardware team that released the first-of-kind Light Detection and Ranging module in the 2020 iPad. She has spanned both the development of Defense technologies at MIT Lincoln Laboratory and at-scale consumer-product technologies at Apple. 

          She is a senior science advisor to multiple VCs and startups in the areas of sensors and systems for mobility applications, autonomous vehicles and digital health and wearables. She’s a Board member of Omnitron and a Venture Partner and Deep Tech Advisor at L’attitude Ventures and serves on a non-profit board. She received her MS and Ph.D. in Engineering from Duke University and MBA from MIT and enjoys mentoring in STEM/STEAM fields and serves as a adjunct/lecturer at Columbia University, guest lecture and AI practitioner at MIT-LL and MIT Media Lab.`
        }
      }
    },
    {
      name: "Laurent Bsalis",
      title: "Co-Founder",
      company: "Circular SAS",
      country: "France",
      image: LaurentBsalis,
      linkedinUrl:"https://www.linkedin.com/in/laurentbsalis/?locale=en_US",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Laurent Bsalis is a Co-Founder of Circular, a leading innovator in AI-powered health wearables. Laurent is passionate about biohacking. He has played a key role in shaping Circular’s mission to enhance global health through personalized insights. Over the past six years, Laurent has led the company through technological advancements, AI integration, and the development of the first smart ring with an FDA-cleared ECG sensor. Passionate about bridging wearable technology with medical innovation, he continues to push the boundaries of what health tracking can achieve.`
        }
      }
    },
    {
      name: "Vedant Ahluwalia",
      title: "Co-Founder",
      company: "Dataviv Technologies Private Limited",
      country: "Germany",
      image: VedantAhluwalia,
      linkedinUrl:"https://www.linkedin.com/in/vedant-ahluwalia-bb258262/?originalSubdomain=in",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Mr. Vedant Ahluwalia is a global Artificial Intelligence Luminary, Stalwart, and revered AI figure contributing across global conglomerates, top universities, and governments across the world including the White House. He holds a coveted Master’s from Stanford University served on various boards, and conducted projects of global relevance including building technologies for companies that have become unicorns since. He has worked with top names in the field and has done commendable work in building talent and activating the AI revolution across many countries including a Center in Maharashtra India inaugurated and supported by the erstwhile top 5 member of the Forbes World's Billionaire list, served on various government committees and advisory boards, and holds a prominent place in Artificial Intelligence in most institutions of merit. He has conducted specialised trainings on demand for various governments, business leaders including the Young Presidents Organization, United Nations, and organisations across the globe.`
        }
      }
    },
    {
      name: "Vishal Batvia",
      title: "Cheif Technology Officer",
      company: "VisionBox Technologies Inc",
      country: "Canada",
      image: VishalBatvia,
      linkedinUrl:"https://www.linkedin.com/in/vishal-batvia-135985ba/",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Vishal Batvia is the Chief Technology Officer at VisionBox Technologies. A Computer Vision and AI expert with over a decade of experience, he has led the development of dozens of AI systems across industries. Vishal holds a Master’s in Visual Computing and Artificial Intelligence from Simon Fraser University. His leadership has been instrumental in transforming AI research into scalable commercial products. Vishal also leads VisionBox’s innovation strategy, ensuring the company's AI offerings remain at the cutting edge of technologic.`
        }
      }
    },
    {
      name: "Reza Rezaei",
      title: "Chief Executive Officer",
      company: "Intellectera",
      country: "UAE",
      image: RezaRezaei,
      linkedinUrl:"https://www.linkedin.com/in/reznetdevops/?originalSubdomain=tr",
      tabContent: {
        overview: {
          title: "Professional Overview",
          content: `Reza Rezaei is a results-oriented technology leader with over a decade of experience in enterprise software development and digital transformation. As a key figure at Intellectera, he has played a crucial role in driving AI adoption and helping businesses leverage AI-powered analytics.

With expertise in developing innovative software solutions, managing cross-functional teams, and optimizing business processes, Reza excels at bridging the gap between business needs and cutting-edge technology. Currently spearheading Intellectera’s AI initiatives, he is deeply involved in MLOps and AI-driven automation, ensuring scalable and efficient AI integration. Passionate about making AI accessible, Reza is committed to transforming industries through intelligent, data-driven solutions.`
        }
      }
    },
    // {
    //   name: "Keli Yen",
    //   title: "Chief Sustainability Officer",
    //   company: "Frontier",
    //   country: "Taiwan",
    //   image: "/michael-chen.jpg",
    //   tabContent: {
    //     overview: {
    //       title: "Professional Overview",
    //       content: `Michael Chen is the Chief Technology Officer at GreenTech Solutions, bringing 12 years of experience in sustainable technology development. He leads innovative projects in renewable energy systems and smart grid technologies.`
    //     }
    //   }
    // },
   
    // {
    //   name: "Matthaeus Widmann",
    //   title: "Co-Founder",
    //   company: "Interloom Technologies GmbH",
    //   country: "Germany",
    //   image: "/michael-chen.jpg",
    //   tabContent: {
    //     overview: {
    //       title: "Professional Overview",
    //       content: `Michael Chen is the Chief Technology Officer at GreenTech Solutions, bringing 12 years of experience in sustainable technology development. He leads innovative projects in renewable energy systems and smart grid technologies.`
    //     }
    //   }
    // },
  ];
 const selectedAttendee = selectedAttendeeName 
  ? attendeesData.find(attendee => 
      attendee.name.toLowerCase() === selectedAttendeeName.toLowerCase()
    )
  : null;

const displayData = selectedAttendee ? [selectedAttendee] : attendeesData;
// Add this before the main return statement
if (selectedAttendeeName && !selectedAttendee) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-purple-600 flex items-center justify-center p-8">
      <div className="bg-white rounded-3xl shadow-2xl p-12 text-center max-w-md mx-auto">
        <div className="text-6xl mb-6">🔍</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Attendee Not Found</h2>
        <p className="text-gray-600 mb-6">
          Sorry, we couldn't find an attendee with the name "{selectedAttendeeName}".
        </p>
        <button 
          onClick={() => {
            sessionStorage.removeItem('selectedAttendeeName');
            setSelectedAttendeeName(null);
            navigate('/gais/attendees')
          }}
          className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
        >
          View All Attendees
        </button>
      </div>
    </div>
  );
}
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-orange-600 to-purple-600 p-2 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Simple map iteration - each attendee gets their own card */}
        {displayData.map((attendee, index) => (
          <div key={index} className={`bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            {/* Animated Top Border */}
            <div className=""></div>
            
            <div className="p-8">
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row gap-8 mb-8 items-center lg:items-start">
                {/* Profile Image Section */}
                <div className="flex-shrink-0 group">
                  <div className="relative">
                    {/* Profile Image Container - Simplified without name/title */}
                    <div className="w-72 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105 relative overflow-hidden">
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      
                      {/* Profile Image */}
                      <div className="w-full h-80 rounded-3xl overflow-hidden relative z-10">
                        <img 
                          src={attendee.image}
                          alt={`${attendee.name} - ${attendee.title}`}
                          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>
                    </div>
                    
                    {/* Social Links - LinkedIn Only */}
                    {/* <div className="flex gap-3 mt-6 justify-center">
                      <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-lg">
                         
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                          <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.729V22.271C0 23.227 0.792 24 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
                        </svg>
                      </div>
                    </div> */}
                    <div className="flex gap-3 mt-6 justify-center">
  <a 
    href={attendee.linkedinUrl}
    target="_blank" 
    rel="noopener noreferrer"
  >
    <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer shadow-lg">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.447 20.452H16.893V14.883C16.893 13.555 16.866 11.846 15.041 11.846C13.188 11.846 12.905 13.291 12.905 14.785V20.452H9.351V9H12.765V10.561H12.811C13.288 9.661 14.448 8.711 16.181 8.711C19.782 8.711 20.448 11.081 20.448 14.166V20.452H20.447ZM5.337 7.433C4.193 7.433 3.274 6.507 3.274 5.368C3.274 4.23 4.194 3.305 5.337 3.305C6.477 3.305 7.401 4.23 7.401 5.368C7.401 6.507 6.476 7.433 5.337 7.433ZM7.119 20.452H3.555V9H7.119V20.452ZM22.225 0H1.771C0.792 0 0 0.774 0 1.771 24H22.222C23.2 24 24 23.227 24 22.271V1.729C24 0.774 23.2 0 22.222 0H22.225Z" fill="white"/>
      </svg>
    </div>
  </a>
</div>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="flex-1">
                  {/* Speaker Info Header */}
                  <div className="mb-6 -mx-8 lg:mx-0">
                    {/* Speaker Details */}
                    <div className="bg-gradient-to-r from-orange-500 via-orange-600 to-purple-600 rounded-none lg:rounded-lg p-6 mb-6 border-y lg:border border-orange-200 shadow-lg lg:shadow-none">
                      <h2 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: '"Helvetica Neue", "Helvetica", "Arial", sans-serif' }}>
                        {attendee.name}
                      </h2>
                      <p className="text-xl font-semibold text-white mb-1 whitespace-nowrap" style={{ fontFamily: '"Helvetica Neue", "Helvetica", "Arial", sans-serif' }}>
                        {attendee.title}
                      </p>
                      <p className="text-xl font-bold text-white" style={{ fontFamily: '"Helvetica Neue", "Helvetica", "Arial", sans-serif' }}>
                        {attendee.company}
                      </p>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-none lg:rounded-xl p-6 relative overflow-hidden -mx-8 lg:mx-0">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-100/15 to-pink-100/15"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {attendee.tabContent[activeTab].title}
                      </h3>
                      <div className="text-black leading-relaxed whitespace-pre-line" style={{ 
                        fontFamily: '"Helvetica Neue", "Helvetica", "Arial", sans-serif',
                        fontWeight: '500',
                        letterSpacing: '0.02em',
                        lineHeight: '1.7'
                      }}>
                        {attendee.tabContent[activeTab].content}
                      </div>
                      
                      {/* Country Flag Section */}
                      <div className="flex items-center gap-1 mt-6 pt-4 border-t border-orange-200/30">
                        <svg className="w-7 h-7 text-orange-600" fill="none" viewBox="0 0 24 24">
                          <path d="M3 3v18M3 3h12l-2 3 2 3H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <p className="text-lg font-semibold text-gray-700" style={{ fontFamily: '"Helvetica Neue", "Helvetica", "Arial", sans-serif' }}>
                          {attendee.country}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* View All Attendees Button - Outside the card */}
                  <div className="flex justify-center mt-4">
  <button 
    onClick={() => {
      sessionStorage.removeItem('selectedAttendeeName');
      setSelectedAttendeeName(null);
      navigate('/gais/attendees')

    }}
    className="bg-gradient-to-r from-orange-500 via-orange-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
  >
    {selectedAttendee ? 'View All Attendees' : 'View All Attendees'}
  </button>
</div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .bg-size-200 {
          background-size: 200% 200%;
        }
      `}</style>
    </div>
  );
};

export default AttendeeDetails;