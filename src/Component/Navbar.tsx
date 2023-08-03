import React, { useState } from 'react';
import { scroller } from 'react-scroll';

interface NavButton {
  name: string;
  componentId: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const btns: NavButton[] = [
    {
      name: 'الرئيسية',
      componentId: 'Hero',
    },
    {
      name: 'عني',
      componentId: 'AboutMe',
    },
    {
      name: 'تاريخي',
      componentId: 'MyHistory',
    },
    {
      name: 'تابعني',
      componentId: 'Contact',
    },
  ];

  const handleScrollToComponent = (componentId: string) => {
    let offsetValue = -100 

    if(componentId === "MyHistory") offsetValue = -300

    scroller.scrollTo(componentId, {
      duration: 800, // scroll duration in milliseconds
      offset: offsetValue, // offset from the top (adjust if you have a fixed header)
      smooth: true, // smooth scrolling
    });
  };

  return (
    <nav className="bg-[#060606] p-2 pr-12 pl-14 font-cairo font-bold border-b-[1px] border-[#F0F4FA] sticky top-0 z-50">
      <div className="flex justify-between items-center">

        <p className="text-[#FF0707] px-4 py-2 rounded-md tracking-widest cursor-pointer text-sm" onClick={() => handleScrollToComponent("Hero")}>علي النونو</p>

        <div className="hidden lg:flex items-center tracking-widest gap-6">
          {btns.map((btn, index) => (
            <p
              key={index}
              onClick={() => handleScrollToComponent(btn.componentId)}
              className={`text-white cursor-pointer text-sm ${index === btns.length - 1 ? ' bg-[#D50808] py-2 px-4 rounded-md hover:text-[#000]' : ' hover:text-[#FF0707]'}`}
            >
              {btn.name}
            </p>
          ))}
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
            title="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-2">
          {btns.map((btn, index) => (
            <a
              key={index}
              onClick={() => handleScrollToComponent(btn.componentId)}
              className={`block text-white hover:text-gray-200 py-2 px-4 ${index === btns.length - 1 ? ' bg-red-500' : ''}`}
            >
              {btn.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
