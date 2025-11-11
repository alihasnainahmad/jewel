
import React from 'react';
import { Page } from '../App';

interface HomePageProps {
  navigateTo: (page: Page) => void;
}

const HomePage: React.FC<HomePageProps> = ({ navigateTo }) => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="h-screen bg-cover bg-center flex items-center justify-center text-white" 
        style={{backgroundImage: "url('https://picsum.photos/seed/jewelhero/1920/1080')"}}
      >
        <div className="bg-black bg-opacity-40 p-10 text-center rounded-lg">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 tracking-wider">Timeless Elegance</h1>
          <p className="text-lg md:text-xl mb-8 font-light">Discover jewellery that tells your unique story.</p>
          <button 
            onClick={() => navigateTo('products')}
            className="bg-brand-gold text-brand-dark font-sans font-semibold py-3 px-8 rounded-full hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            EXPLORE COLLECTIONS
          </button>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-semibold mb-2">Our Collections</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">Each collection is a testament to our dedication to beauty and craftsmanship, designed to be cherished for generations.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden cursor-pointer" onClick={() => navigateTo('products')}>
              <img src="https://picsum.photos/seed/collection1/600/800" alt="Diamond Dreams" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif font-bold">Diamond Dreams</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden cursor-pointer" onClick={() => navigateTo('products')}>
              <img src="https://picsum.photos/seed/collection2/600/800" alt="Emerald Envy" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif font-bold">Emerald Envy</h3>
              </div>
            </div>
            <div className="group relative overflow-hidden cursor-pointer" onClick={() => navigateTo('products')}>
              <img src="https://picsum.photos/seed/collection3/600/800" alt="Sapphire Serenity" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"/>
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-3xl font-serif font-bold">Sapphire Serenity</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Craft */}
      <section className="py-16 bg-brand-light">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://picsum.photos/seed/craft/800/600" alt="Jeweller at work" className="rounded-lg shadow-xl" />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-serif font-semibold mb-4">The Art of Creation</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Aura Jewels, every piece is a work of art. Our master artisans combine traditional techniques with modern innovation to create jewellery that is not only beautiful but also enduring. We source only the finest materials, ensuring that every gem and metal meets our exacting standards of quality and ethical responsibility.
            </p>
            <button className="text-brand-gold font-semibold border-b-2 border-brand-gold hover:text-brand-dark hover:border-brand-dark transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif font-semibold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-light p-8 rounded-lg">
              <p className="text-gray-600 italic mb-4">"The ring I bought is absolutely breathtaking. The quality and attention to detail are second to none. It was the perfect anniversary gift."</p>
              <h4 className="font-semibold">- Jessica M.</h4>
            </div>
            <div className="bg-brand-light p-8 rounded-lg">
              <p className="text-gray-600 italic mb-4">"Aura Jewels helped me design a custom necklace, and the process was seamless. They brought my vision to life beautifully."</p>
              <h4 className="font-semibold">- David L.</h4>
            </div>
            <div className="bg-brand-light p-8 rounded-lg">
              <p className="text-gray-600 italic mb-4">"I've never received so many compliments on a piece of jewellery before. The craftsmanship is truly exceptional."</p>
              <h4 className="font-semibold">- Sarah K.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
