
import React, { useState, useMemo } from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

const mockProducts: Product[] = [
  { id: 1, name: 'Celestial Diamond Ring', price: 2400, imageUrl: 'https://picsum.photos/seed/prod1/500/500', category: 'Rings', metal: 'Platinum' },
  { id: 2, name: 'Azure Sapphire Necklace', price: 3200, imageUrl: 'https://picsum.photos/seed/prod2/500/500', category: 'Necklaces', metal: 'Gold' },
  { id: 3, name: 'Emerald Drop Earrings', price: 1800, imageUrl: 'https://picsum.photos/seed/prod3/500/500', category: 'Earrings', metal: 'Gold' },
  { id: 4, name: 'Helios Gold Bracelet', price: 1500, imageUrl: 'https://picsum.photos/seed/prod4/500/500', category: 'Bracelets', metal: 'Gold' },
  { id: 5, name: 'Luna Pearl Ring', price: 950, imageUrl: 'https://picsum.photos/seed/prod5/500/500', category: 'Rings', metal: 'Silver' },
  { id: 6, name: 'Orion Constellation Necklace', price: 2100, imageUrl: 'https://picsum.photos/seed/prod6/500/500', category: 'Necklaces', metal: 'Silver' },
  { id: 7, name: 'Solstice Diamond Earrings', price: 4500, imageUrl: 'https://picsum.photos/seed/prod7/500/500', category: 'Earrings', metal: 'Platinum' },
  { id: 8, name: 'Gaia Linked Bracelet', price: 1100, imageUrl: 'https://picsum.photos/seed/prod8/500/500', category: 'Bracelets', metal: 'Silver' },
  { id: 9, name: 'Ruby Heart Pendant', price: 2800, imageUrl: 'https://picsum.photos/seed/prod9/500/500', category: 'Necklaces', metal: 'Gold' },
  { id: 10, name: 'Diamond Eternity Band', price: 3500, imageUrl: 'https://picsum.photos/seed/prod10/500/500', category: 'Rings', metal: 'Platinum' },
  { id: 11, name: 'Silver Hoop Earrings', price: 450, imageUrl: 'https://picsum.photos/seed/prod11/500/500', category: 'Earrings', metal: 'Silver' },
  { id: 12, name: 'Gold Chain Bracelet', price: 850, imageUrl: 'https://picsum.photos/seed/prod12/500/500', category: 'Bracelets', metal: 'Gold' },
];

const categories = ['All', 'Necklaces', 'Rings', 'Earrings', 'Bracelets'];
const metals = ['All', 'Gold', 'Silver', 'Platinum'];

const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedMetal, setSelectedMetal] = useState('All');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = useMemo(() => {
    let products = [...mockProducts];

    if (selectedCategory !== 'All') {
      products = products.filter(p => p.category === selectedCategory);
    }
    if (selectedMetal !== 'All') {
      products = products.filter(p => p.metal === selectedMetal);
    }

    switch (sortBy) {
      case 'price_asc':
        products.sort((a, b) => a.price - b.price);
        break;
      case 'price_desc':
        products.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return products;
  }, [selectedCategory, selectedMetal, sortBy]);

  return (
    <div className="bg-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif font-bold">Our Jewellery</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Browse our curated selection of fine jewellery, handcrafted to perfection.</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 p-4 bg-brand-light rounded-lg shadow-sm">
          <div className="flex flex-wrap items-center gap-4 mb-4 md:mb-0">
            <div>
              <label htmlFor="category" className="mr-2 font-medium text-gray-700">Category:</label>
              <select id="category" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="p-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold">
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="metal" className="mr-2 font-medium text-gray-700">Metal:</label>
              <select id="metal" value={selectedMetal} onChange={e => setSelectedMetal(e.target.value)} className="p-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold">
                {metals.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="sort" className="mr-2 font-medium text-gray-700">Sort By:</label>
            <select id="sort" value={sortBy} onChange={e => setSortBy(e.target.value)} className="p-2 border border-gray-300 rounded-md focus:ring-brand-gold focus:border-brand-gold">
              <option value="default">Featured</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl text-gray-700">No products found</h2>
            <p className="text-gray-500 mt-2">Please try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
