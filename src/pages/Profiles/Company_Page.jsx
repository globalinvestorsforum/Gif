

// import { ExternalLink, Globe, Building, Users, Atom } from "lucide-react";

// export default function CEADesign2() {
//   return (
//     <div className="p-6 bg-gray-100 min-h-screen flex items-center justify-center">
//       {/* Design 2 – Split Profile with Red Accent */}
//       <div className="grid grid-rows-2 bg-white/95 rounded-2xl shadow-lg overflow-hidden backdrop-blur-sm max-w-4xl w-full">
//         <div className="p-6 flex flex-col justify-center space-y-4">
          
//          <div className="flex items-center gap-4">
// <img src="/axelera_logo.png" alt="Your Logo" className="w-50 h-50 object-contain rounded-lg shadow-sm" />
// <div className="space-y-1">
// <h2 className="text-3xl font-bold text-black">AXELERA AI</h2>
// <h3 className="text-lg font-semibold text-gray-800">AI-NATIVE HARDWARE FOR A SMARTER WORLD</h3>
// </div>
// </div>
//           <p className="font-semibold text-gray-700">France 🇫🇷 | Government / Public Institution</p>
//           <div className="flex gap-6 text-black font-semibold">
//             <a href="https://www.cea.fr" className="hover:text-red-800 flex items-center gap-1 transition-colors">
//               <Globe className="w-4 h-4" />
//               Website
//             </a>
//             <a href="#" className="hover:text-red-800 flex items-center gap-1 transition-colors">
//               <ExternalLink className="w-4 h-4" />
//               LinkedIn
//             </a>
//           </div>
//         </div>
//         <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white p-6 flex items-center">
//           <div>
//              <h3 className="text-xl font-bold text-white mb-4">Company Overview</h3>
//   <p className="mb-4"></p>
//             <p className="mb-4">
//               Axelera AI is delivering the world’s most powerful and advanced solutions for AI at the Edge. Its industry-defining Metis™️ AI platform – a complete hardware and software solution for AI inference at the edge – makes computer vision applications more accessible, powerful and user-friendly than ever before.

// Powered by the Metis AI Processing Unit (AIPU), featuring proprietary digital in-memory computing (D-IMC) and RISC-V technology, the platform delivers industry-leading performance, efficiency, and cost savings. With built-in encryption for secure data handling, it outpaces competitors and scales to meet diverse needs.

// Our AI acceleration hardware and vision-ready systems simplify adoption for businesses worldwide, enabling rapid deployment and streamlined operations. Paired with the intuitive Voyager SDK, developers can seamlessly integrate neural networks with high accuracy and minimal effort.

// The Metis AI platform accelerates innovation, empowering enterprises to harness the full potential of AI.
//             </p>
            
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { ExternalLink, Globe, Building, Users, Atom } from "lucide-react";

export default function CEADesign2() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="grid grid-rows-2 w-full h-screen">
        <div className="bg-gradient-to-r from-orange-500 via-red-500 to-purple-600 text-white p-6 flex flex-col justify-center space-y-4">
          
         <div className="flex items-center gap-8">
<div className="flex flex-col items-center space-y-3">
    <img src="/axelera_logo.png" alt="Your Logo" className="w-60 h-60 object-cover rounded-lg shadow-sm" />
  
  </div>
  <div>
    <h3 className="text-4xl font-semibold text-white" style={{ fontFamily: 'Antonio, sans-serif' }}>AI-NATIVE HARDWARE FOR A SMARTER WORLD</h3>
  </div>
</div>
<h2 className="text-base font-semibold text-white">AXELERA AI</h2>
          <p className="font-semibold text-white">France 🇫🇷 | Government / Public Institution</p>
          <div className="flex gap-6 text-white font-semibold">
            <a href="https://www.cea.fr" className="hover:text-gray-200 flex items-center gap-1 transition-colors">
              <Globe className="w-4 h-4" />
              Website
            </a>
            <a href="#" className="hover:text-gray-200 flex items-center gap-1 transition-colors">
              <ExternalLink className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
        <div className="bg-white text-black p-6 flex items-center ">
          <div >
             <h3 className="text-4xl font-bold text-black mb-4">Company Overview</h3>
            <p className="text-lg mb-4">
              Axelera AI is delivering the world's most powerful and advanced solutions for AI at the Edge. Its industry-defining Metis™️ AI platform – a complete hardware and software solution for AI inference at the edge – makes computer vision applications more accessible, powerful and user-friendly than ever before.

Powered by the Metis AI Processing Unit (AIPU), featuring proprietary digital in-memory computing (D-IMC) and RISC-V technology, the platform delivers industry-leading performance, efficiency, and cost savings. With built-in encryption for secure data handling, it outpaces competitors and scales to meet diverse needs.

Our AI acceleration hardware and vision-ready systems simplify adoption for businesses worldwide, enabling rapid deployment and streamlined operations. Paired with the intuitive Voyager SDK, developers can seamlessly integrate neural networks with high accuracy and minimal effort.

The Metis AI platform accelerates innovation, empowering enterprises to harness the full potential of AI.
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
}
