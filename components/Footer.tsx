
import React from 'react';
import { Page } from '../App';

interface FooterProps {
  navigateTo: (page: Page) => void;
}

const FooterLink: React.FC<{ onClick?: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button onClick={onClick} className="text-gray-400 hover:text-white transition-colors duration-300 text-left">
    {children}
  </button>
);

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-brand-dark text-white font-sans">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-serif font-semibold mb-4">Aura Jewels</h3>
            <p className="text-gray-400 text-sm">Crafting timeless elegance since 1988. Discover pieces that tell your story.</p>
          </div>
          
          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">Shop</h4>
            <div className="flex flex-col space-y-2">
              <FooterLink onClick={() => navigateTo('products')}>All Collections</FooterLink>
              <FooterLink>New Arrivals</FooterLink>
              <FooterLink>Rings</FooterLink>
              <FooterLink>Necklaces</FooterLink>
            </div>
          </div>

          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">About Us</h4>
            <div className="flex flex-col space-y-2">
              <FooterLink>Our Story</FooterLink>
              <FooterLink>Craftsmanship</FooterLink>
              <FooterLink>Sustainability</FooterLink>
              <FooterLink>Careers</FooterLink>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold tracking-wider uppercase mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.149-4.771-1.664-4.919-4.919-.058-1.265-.069-1.644-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44 1.441-.645 1.441-1.44-.645-1.44-1.441-1.44z" /></svg></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.298 1.634 4.212 3.791 4.649-.69.188-1.423.23-2.164.083.606 1.885 2.364 3.256 4.453 3.303-1.716 1.34-3.88 2.05-6.23 2.05-.403 0-.8-.023-1.195-.07 2.223 1.423 4.868 2.25 7.733 2.25 9.287 0 14.378-7.699 14.043-14.41z" /></svg></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg></a>
            </div>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Aura Jewels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
