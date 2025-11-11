
import React, { useState } from 'react';
import { Page } from '../App';

interface HeaderProps {
  navigateTo: (page: Page) => void;
}

const NavLink: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-700 hover:text-brand-gold transition-colors duration-300 font-medium tracking-wider"
  >
    {children}
  </button>
);

const Header: React.FC<HeaderProps> = ({ navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNav = (page: Page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  }

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div 
          className="text-2xl font-serif font-bold text-brand-dark cursor-pointer"
          onClick={() => navigateTo('home')}
        >
          Aura Jewels
        </div>
        
        <nav className="hidden md:flex space-x-8">
          <NavLink onClick={() => navigateTo('home')}>HOME</NavLink>
          <NavLink onClick={() => navigateTo('products')}>SHOP</NavLink>
          <NavLink onClick={() => {}}>STORIES</NavLink>
          <NavLink onClick={() => {}}>CONTACT</NavLink>
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-600 hover:text-brand-gold transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
          <button className="text-gray-600 hover:text-brand-gold transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          </button>
          <button className="text-gray-600 hover:text-brand-gold transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            <NavLink onClick={() => handleNav('home')}>HOME</NavLink>
            <NavLink onClick={() => handleNav('products')}>SHOP</NavLink>
            <NavLink onClick={() => {}}>STORIES</NavLink>
            <NavLink onClick={() => {}}>CONTACT</NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
