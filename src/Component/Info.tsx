// src/components/ThreeBoxes.tsx
import React from 'react';
import "../App.css"
import locationIcon from "../assets/iconLocation.png"
import birthIcon from "../assets/birthIcon.webp"
import heightIcon from "../assets/heightIcon.webp"
const ThreeBoxes: React.FC = () => {
  return (
    <div className="flex justify-center items-center md:w-[600px] md:-mt-24 sm:flex flex-wrap">
      <div className="px-4 md:pl-20 py-6 bg-height-image">
        <img src={heightIcon} alt="the place of birth" className="w-14 h-14 mx-auto mb-4 ml-8" />
        <h1 className='text-white text-right font-bold mb-2'>الطول</h1>
        <p className='text-white text-xs '> 1.69 متر</p>
      </div>
      <div className=" px-4 pl-20 py-6 bg-birth-image">
        <img src={birthIcon} alt="the place of birth" className="w-14 h-14 mx-auto mb-4 ml-8" />
        <h1 className='text-black text-right font-bold mb-2'> مواليد</h1>
        <p className='text-black text-xs'>7 يونيو 1980م</p>
      </div>
      <div className=" px-4 pl-20 py-6 bg-location-image">
        <img src={locationIcon} alt="the place of birth" className="w-14 h-14 mx-auto mb-4 ml-8" />
        <h1 className='text-white text-right font-bold mb-2'>مكان الميلاد</h1>
        <p className='text-white text-xs'>اليمن _ صنعاء</p>
      </div>
    </div>
  );
};

export default ThreeBoxes;
