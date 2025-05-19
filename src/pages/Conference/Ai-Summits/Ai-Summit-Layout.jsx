import { useParams } from "react-router-dom";
import { cards } from "../../../constants";
import { Home, Introduction, WhyJoin, Audience, AwardAgenda, Register } from "./Ai-Summit-Pages";

function index() {
    const { summitId } = useParams();
    const currentPath = `/gais/conference/${summitId}`;
    const summitConfig = cards.find((card) => card.eventLink === currentPath);
    const configOfSummit = summitConfig?.config ? summitConfig?.config : {};
    console.log("tre",configOfSummit.showWhyJoin,configOfSummit);
    
    return (
        <div className='bg-white'>
            <Home config={configOfSummit} />
            {configOfSummit.showIntroduction && <Introduction config={configOfSummit} />}
            {configOfSummit.showWhyJoin && <WhyJoin config={configOfSummit} />}
            {/* <WhyJoin2/> */}
            {configOfSummit.showAudience && <Audience config={configOfSummit} />}
            {configOfSummit.showAwardAgenda && <AwardAgenda config={configOfSummit} />}
            {/* <AllAgendas/> */}
            {configOfSummit.showRegister && <Register config={configOfSummit} />}
            {/* <Gsap/> */}
        </div>
    )

}
export default index;