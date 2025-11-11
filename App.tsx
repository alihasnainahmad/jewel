
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';

export type Page = 'home' | 'products';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigateTo = useCallback((page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-brand-light font-sans text-brand-dark">
      <Header navigateTo={navigateTo} />
      <main>
        {currentPage === 'home' && <HomePage navigateTo={navigateTo} />}
        {currentPage === 'products' && <ProductsPage />}
      </main>
      <Footer navigateTo={navigateTo} />
    </div>
  );
};

export default App;
