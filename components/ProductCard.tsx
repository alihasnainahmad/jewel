
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group bg-brand-light rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
            <button className="bg-white text-brand-dark font-semibold py-2 px-6 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                View Details
            </button>
        </div>
      </div>
      <div className="p-4 text-center flex-grow flex flex-col justify-between">
        <div>
            <h3 className="text-lg font-serif font-semibold text-brand-dark">{product.name}</h3>
            <p className="text-gray-500 text-sm">{product.category} in {product.metal}</p>
        </div>
        <p className="text-brand-dark font-medium mt-2">${product.price.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default ProductCard;
