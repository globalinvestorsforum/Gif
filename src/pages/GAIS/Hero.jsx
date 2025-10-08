import React from 'react'
import { Reveal } from "../../utils/Reveal";

function Hero() {
  return (
    <section>
    <div
      className="w-full h-screen bg-no-repeat bg-cover md:bg-top bg-center  border-b border-neutral-800  "
      style={{
        backgroundImage: `url('https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/assets%2Flanding_img.png?alt=media&token=a104f4b6-ac45-4187-a3c9-e230cc496f0a')`,
      }}
    >
      <div className="absolute w-full h-full ">
        <div className="w-full md:max-w-4xl lg:max-w-6xl mx-auto pt-20  md:pt-40 lg:pt-48  ">
         <Reveal>
         <div className="flex flex-col items-start pt-6 ">
            <h2 className="text-2xl px-3 uppercase md:text-4xl text-start tracking-wide font-bold animate-slidein [--slidein-delay:300ms]  opacity-1 ">
              AI is no longer a futuristic concept — it’s now woven into the fabric of our daily lives, from personalized recommendations to self-driving cars. Businesses that fail to leverage AI risk falling behind. Join us to explore the latest trends and advancements in AI.
            </h2>
            <p className="pt-6 px-3  text-lg md:text-1xl lg:text-2xl font-semibold  text-neutral-200  animate-slidein [--slidein-delay:400ms]  opacity-1 ">
              19th & 20th March, 2026
            </p>
            <p className="pt-4 px-3 text-lg md:text-1xl lg:text-2xl font-semibold    text-neutral-200 animate-slidein [--slidein-delay:500ms]  opacity-1  ">
              Berlin, Germany.
            </p>
            <hr className="h1  mt-4 divide-x font-bold  md:w-1/3 w-2/3  mx-3" />
            <p className="pt-4 px-3 text-lg md:text-1xl lg:text-2xl  text-neutral-200 animate-slidein [--slidein-delay:600ms]  opacity-1  ">
              World's leading AI Summit.
            </p>
          </div>
         </Reveal>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Hero
