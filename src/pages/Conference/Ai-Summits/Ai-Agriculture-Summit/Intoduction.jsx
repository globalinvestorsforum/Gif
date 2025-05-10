import { useRef } from "react";

function Introduction(){
    const myRef=useRef(null);
return <div ref={myRef} className="max-w-9xl my-12 space-y-8 mx-8 lg:mx-20">{/* Two-card layout */}
<div className="fade-slide flex flex-col gap-8 md:flex-row mb-4 relative">
  
  {/* First Card */}
<div className="flex-1 bg-gradient-to-r from-lime-600 to-green-700 rounded-lg shadow-xl p-8 text-center text-white">
  <h2 className="text-4xl uppercase font-bold">AI in Agriculture</h2>
  <p className="text-xl font-semibold mt-2">USD 1.7B → USD 11.2B</p>
  <p className="mt-1 font-medium">2023 → 2030</p>
  <p className="mt-1 text-lime-100">25.5% CAGR</p>
</div>

  {/* Second Card */}
  <div className="fade-slide flex-1 relative py-8 lg:mt-0 text-sm md:text-md text-gray-950 lg:max-w-none rounded-xl p-4 md:p-8 shadow-lg overflow-hidden">
    {/* Mesh Gradient Background */}
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.4),_rgba(59,130,246,0.3),_rgba(16,185,129,0.3))] opacity-90 blur-xl"></div>
    
    <p className="leading-snug p-2 md:p-4">
  The Global AI in agriculture market is projected to surge dramatically, reaching USD 11.2 billion by 2030, growing at an impressive CAGR of 25.5% from 2023's USD 1.7 billion. The summit presents a pivotal opportunity for stakeholders to engage with cutting-edge technologies and strategies that are revolutionizing modern farming, crop production, and sustainable agricultural practices.
</p>
<p className="text-gray-500 leading-tight text-sm text-left px-2 md:px-4 ">
  Source: Grand View Research (Global Market Insights and Industry Analysis).
</p>
  </div>
</div></div>
}
export default Introduction;