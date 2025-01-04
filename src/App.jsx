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
  Gais,
  Meet,
  Ticket,
  Conference,
  // NotFound,
  Carrier
} from "./pages/index";

import { NotFound } from "./components/index";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Homepage />} />
      <Route path="/whatweproduce" element={<WhatWeProduce />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/whoweare" element={<WhoWeAre />} />
      <Route path="/contactus" element={<Contact />} />
      <Route path="/terms" element={<Terms/>} />
      <Route path="/privacy" element={<Privacy/>} />
      <Route path="/gais" element={<Gais />} />
      <Route path="/gais/award" element={<Award />} />
      <Route path="/gais/contact" element={<Contact />} />
      <Route path="/gais/meet" element={<Meet />} />
      <Route path="/gais/ticket" element={<Ticket />} />
      <Route path="/gais/conference" element={<Conference />} />
      <Route path="/gais/carrier" element={<Carrier />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
