export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    price: 800,
    description: 'A laptop for programming and daily work'
  },
  {
    id: 2,
    name: 'Keyboard',
    price: 50,
    description: 'A keyboard for comfortable typing'
  },
  {
    id: 3,
    name: 'Mouse',
    price: 25,
    description: 'A mouse for everyday computer use'
  }
];