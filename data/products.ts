export type Product = {
  id: string;
  title: string;
  price: number;
  category: string;
  image: string;
};


export const products: Product[] = [
  {
    id: "1",
    title: "Calculus Textbook",
    price: 120,
    category: "Books",
    image: "https://placehold.co/600x400/png?text=Calculus+Book",
  },
  {
    id: "2",
    title: "HP Laptop",
    price: 3500,
    category: "Electronics",
    image: "https://placehold.co/600x400/png?text=HP+Laptop",
  },
  {
    id: "3",
    title: "Chicken Burger",
    price: 45,
    category: "Food",
    image: "https://placehold.co/600x400/png?text=Chicken+Burger",
  },
  {
    id: "4",
    title: "Wireless Headphones",
    price: 450,
    category: "Electronics",
    image: "https://placehold.co/600x400/png?text=Headphones",
  },
  {
    id: "5",
    title: "Programming Book",
    price: 150,
    category: "Books",
    image: "https://placehold.co/600x400/png?text=Programming+Book",
  },
  {
    id: "6",
    title: "Pizza",
    price: 80,
    category: "Food",
    image: "https://placehold.co/600x400/png?text=Pizza",
  },
];