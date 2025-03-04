// export default function Register() {
//     return (
//       <div className="flex flex-col  items-center justify-center py-20">

//         <p className="text-xl md:text-3xl">Hold Ticket For AI-Healthcare Summit</p>
// <button className="px-4 py-2 my-4 text-md font-semibold transition-all duration-300 text-white rounded-full shadow-2xl hover:shadow-3xl hover:scale-105 active:scale-95 border border-gray-300">
// Register Ticket </button>
//       </div>
//     );
//   }
  

export default function Register() {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 px-6 py-20">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center">
        Hold Your Ticket for  
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">
          AI-Healthcare Summit
        </span>
      </h2>
      <p className="mt-4 text-gray-600 text-center max-w-md">
        Join us for an exclusive event where AI meets healthcare innovation.
      </p>
      
      <button className="mt-6 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-teal-600 to-blue-600 hover:shadow-2xl hover:scale-105 active:scale-95">
        🎟️ Register Now
      </button>
    </div>
  );
}
