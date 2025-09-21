import "./App.css";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  Homepage,
  WhatWeProduce,
  Membership,
  WhoWeAre,
  Contact,
  Terms,
  Privacy,
  Award,
  AiIntegrationPage,
  AiIntegrationForm,
  Gais,
  Meet,
  Ticket,
  Conference,
  Registration,
  Company,
  // NotFound,
  Careers,
  BestUseOfAiForm,
  Speakers,
  SpeakerDetails,
  TicketRegistration,
  AllAgendas,
  AllAttendees,
  AiSummitLayout,
  AllAwardCategories,
  AwardFormPage,
  FormOverview,
  FormA,
  FormB,
  GAISTracksPage,
  UnifiedTracks,
  AttendeeDetails,
  Industry,
  
 
} from "./pages/index";

import { NotFound } from "./components/index";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      
      <Route path="/" element={<Gais />} />
      <Route path="/gais/award" element={<Award />} />
      <Route path="/gais/award/Ai-Integration-Award" element={<AiIntegrationPage />} />
      <Route path="/gais/award/Ai-Integration-Form" element={<AiIntegrationForm />} />
      <Route path="/gais/award/BestUseOfAi-Form" element={<BestUseOfAiForm />} />
      <Route path="/gais/all-award-categories" element={<AllAwardCategories />} />
      <Route path="/gais/award-form-page" element={<AwardFormPage />} />
      <Route path="/gais/contact" element={<Contact />} />
      <Route path="/gais/meet" element={<Meet />} />
      <Route path="/gais/companies" element={<Company />} />
      <Route path="/gais/attendees" element={<AllAttendees />} />
      <Route path="/gais/attendees/attendeedetails" element={<AttendeeDetails/>}/>
      <Route path="/gais/speakers" element={<Speakers />} />
      <Route path="/gais/speaker/:id" element={<SpeakerDetails />}/> 
      <Route path="/gais/ticket" element={<Ticket />} />
      <Route path="/gais/Inter" element={<GAISTracksPage/>}></Route>
      <Route path="/gais/UnifiedTracks" element={<UnifiedTracks/>}></Route>
      <Route path="/gais/TicketRegistration" element={<TicketRegistration />} />
      {/* <Route path="/gais/carrier" element={<Carrier />} /> */}
      <Route path="/gais/Registration" element={<Registration />} />
      <Route path="/gais/conference" element={<Conference />} />
      <Route path="/gais/IndustryTracks" element={<Industry />}></Route>
      {/* <Route path="/gais/conference/ai-healthcare-summit" element={<HealthcareSummit />} /> */}
      <Route path="/gais/conference/ai-healthcare-summit/all-agendas" element={<AllAgendas/>} />
      {/* <Route path="/gais/conference/ai-agriculture-summit" element={<AgricultureSummit />} /> */}

      
     <Route path="/gais/conference/:summitId" element={<AiSummitLayout />}/>

      <Route path="/gais/free-exhibition-overview" element={<FormOverview />} />
      <Route path="/gais/exhibition-form" element={<FormA />} /> 
      <Route path="/gais/branding-form" element={<FormB />} />

      <Route path="/home" element={<Homepage />} />
      <Route path="/whatweproduce" element={<WhatWeProduce />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/whoweare" element={<WhoWeAre />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/terms" element={<Terms/>} />
      <Route path="/privacy" element={<Privacy/>} />
      <Route path="/Careers" element={<Careers />} />
      
      <Route path="*" element={<NotFound />} />
          
          {/* Samole test */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
