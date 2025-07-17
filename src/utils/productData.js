
export const products = [
  {
    id: 1,
    name: "Chocolate Birthday Cake",
    category: "Birthday Cakes",
    frostingType: "Chocolate",
    price: "€25.00",
    image: "/api/placeholder/300/300",
    description: "A rich chocolate cake perfect for birthdays."
  },
  {
    id: 2,
    name: "Vanilla Wedding Cake",
    category: "Wedding Cakes",
    frostingType: "Vanilla",
    price: "€45.00",
    image: "/api/placeholder/300/300",
    description: "An elegant vanilla cake for your special day."
  },
  {
    id: 3,
    name: "Strawberry Delight",
    category: "Custom Designs",
    frostingType: "Strawberry",
    price: "€30.00",
    image: "/api/placeholder/300/300",
    description: "Fresh strawberry cake with cream frosting."
  }
];

export const getCategories = () => {
  return [...new Set(products.map(product => product.category))];
};

export const getFrostingTypes = () => {
  return [...new Set(products.map(product => product.frostingType))];
};
