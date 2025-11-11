
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: 'Necklaces' | 'Rings' | 'Earrings' | 'Bracelets';
  metal: 'Gold' | 'Silver' | 'Platinum';
}
