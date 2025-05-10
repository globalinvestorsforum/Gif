import { useRef } from "react";
import Greenary from "../../../../assets/AgricultureSummit/Greenary.png"
import { useNavigate } from "react-router-dom";
function Home() {
    const myRef = useRef(null);
    const navigate=useNavigate();
    const handleClick = () => {
        navigate('/gais/ticket')
    }

    const handleAgendaClick = () => {
        navigate('/gais/conference/ai-healthcare-summit/all-agendas')
    }
    return <div ref={myRef}>
        <div className="flex flex-row justify-between bg-gradient-to-br from-green-50 via-lime-50 to-white">  <div className="relative h-[calc(100vh-86px)] w-full">
            <img className="object-cover w-full h-full brightness-75" src={Greenary}></img>
        </div>
        </div>

        <div className="absolute top-0 left-0 h-[calc(100vh-86px)] flex flex-row justify-start items-center pt-32 pb-16 px-6 sm:px- lg:px-16 ">
            <div className="slide-up text-center md:text-left">
                <h1 className="mt-4 text-4xl uppercase font-bold text-gray-50 lg:text-7xl">
                    The <br />AI-Agriculture Summit
                </h1>
                <p className="mt-6 text-xl text-gray-300 max-w-2xl">
                    Join World's Largest AI Summit On Agriculture Industry
                </p>
                <div className="mt-10 flex justify-center md:justify-start gap-4">
                    <button onClick={handleClick} className="bg-gradient-to-r from-lime-600 to-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-110">
                        Register Now
                    </button>

                    <button onClick={handleAgendaClick} className="bg-white text-green-700 px-4 py-2 rounded-lg font-semibold transition-all duration-500 hover:bg-gradient-to-r hover:from-lime-600 hover:to-green-700 hover:text-white">
                        View Schedule
                    </button>
                </div>
            </div>
        </div>
    </div>;
}
export default Home;