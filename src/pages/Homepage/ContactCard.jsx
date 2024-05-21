import React from "react";
import { Link } from "react-router-dom";
import { Reveal } from "../../utils/Reveal";
import { RevealLeft } from "../../utils/RevealLeft";
import { RevealRight } from "../../utils/RevealRight";
const ContactCard = () => {
  return (
    <section className=" flex h-[350px]">
      <div
        className="w-full md:w-1/2 bg-cover"
        style={{
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/GIF%2FHomepage%2Fimg5.jpg?alt=media&token=23e1b830-6d68-4e5d-8902-b05987aab1e9)`,
        }}
      >
        <div className=""> </div>
      </div>
      <div
        className="w-full md:w-1/2 bg-cover flex justify-center items-center"
        style={{
          backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/gais-f3e13.appspot.com/o/GIF%2FHomepage%2FImg6.png?alt=media&token=ac964008-708f-40d7-9c1f-82b46fb5c59d)`,
        }}
      >
        <div className="flex-wrap">
          <div className=" md:text-2xl px-10">
            <Reveal>
              <p>
                Explore strategic partnerships with us. Elevate your brand at
                the world's largest summits!
              </p>
            </Reveal>
          </div>
          <Reveal width="">
            <div className="md:text-end pt-3 md:pt-10 md:pe-20 text-center">
              <Link
                to={"/contactus"}
                className="border border-lime-700 bg-black text-sm p-2 md:p-3"
              >
                CONTACT US
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactCard;
