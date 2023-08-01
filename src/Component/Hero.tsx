import React from "react";
import "../App.css"
import heroImage from "../assets/heroImage.webp";
import Info from "./Info"

const Hero: React.FC = () => {


  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-hero-image md:h-screen h-auto flex flex-col md:flex-row justify-center items-center w-full bg-center bg-dunes bg-cover p-4 md:px-12 2xl:px-48">
        <div className="w-full md:w-1/2 p-2 text-right md:mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-[#FF0000] font-josefin-sans tracking-tighter">
            علي النونو
          </h1>
          <p className="text-base md:text-lg mb-16 font-bold text-white">
            أفضل لاعب كرة قدم في اليمن، يتمتع بموهبة لا تضاهى وإلتزام قوي وشغف متجدد
            يجعله بطلاً حقيقياً على أرض الملعب وفي حياته الشخصية.
          </p>
          <button
            className="py-2 px-4 md:px-8 border-2 border-[#FF0000] text-[#FF0000]"
          >
            أقرأ أكثر
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={heroImage}
            alt="Hero Image"
            className="w-full h-auto md:w-[450px] p-6 md:mr-28"
          />
        </div>
      </div>
      <Info />
    </div>
  );
};

export default Hero;
