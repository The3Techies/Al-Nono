import React, { useState } from 'react';

interface NavButton {
  name: string;
  route: string;
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(1);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const btns: NavButton[] = [
    {
      name: 'الرئيسية',
      route: '/',
    },
    {
      name: 'عني',
      route: '/about',
    },
    {
      name: 'تاريخي',
      route: '/history',
    },
    {
      name: 'الجوائز',
      route: '/awards',
    },
    {
      name: 'تابعني',
      route: '/followMe',
    },
  ];

  const handleLinkClick = (index: number) => {
    setActiveLink(index);
  };

  return (
    <nav className="bg-[#0E0E0E] p-4 md:px-12 2xl:px-48 font-cairo font-bold border-b-2 text-lg sticky top-0">
      <div className="flex justify-between items-center">
        <div>
          <a
            href="/"
            className="text-[#FF0707] px-4 py-2 rounded-md  tracking-widest"
          >
            علي النونو
          </a>
        </div>

        <div className="hidden lg:flex items-center tracking-widest gap-6">
          {btns.map((btn, index) => (
            <a
              key={index}
              href={btn.route}
              onClick={() => handleLinkClick(index)}
              onFocus={() => handleLinkClick(index)}
              className={`text-white hover:text-[#08D565] hover:text-lg ${activeLink === index ? 'text-[#08D565]' : ''
                }${index === btns.length - 1 ? ' bg-red-500 py-2 px-4 border-2' : ''}`}
            >
              {btn.name}
            </a>
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
              key={btn.route}
              href={btn.route}
              onClick={() => handleLinkClick(index)}
              onFocus={() => handleLinkClick(index)}
              className={`block text-white hover:text-gray-200 py-2 px-4 ${activeLink === index ? 'text-[#08D565]' : ''
                }${index === btns.length - 1 ? ' bg-red-500' : ''}`}
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
