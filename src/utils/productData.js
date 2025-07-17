
export const products = [
  {
    id: 1,
    name: "Chocolate Birthday Cake",
    category: "Birthday Cakes",
    frostingType: "Chocolate",
    price: "€25.00",
    image: "/api/placeholder/300/300",
    description: "A rich chocolate cake perfect for birthdays.",
    longDescription: "This decadent chocolate cake features layers of moist chocolate sponge cake filled with rich chocolate ganache and topped with smooth chocolate frosting. Perfect for celebrating special birthdays with friends and family.",
    ingredients: ["Flour", "Sugar", "Cocoa powder", "Eggs", "Butter", "Milk", "Vanilla extract", "Baking powder"],
    occasions: ["Birthday", "Celebration"]
  },
  {
    id: 2,
    name: "Vanilla Wedding Cake",
    category: "Wedding Cakes",
    frostingType: "Vanilla",
    price: "€45.00",
    image: "/api/placeholder/300/300",
    description: "An elegant vanilla cake for your special day.",
    longDescription: "A timeless classic featuring layers of vanilla sponge cake with smooth vanilla buttercream. Elegantly decorated and perfect for your wedding celebration.",
    ingredients: ["Flour", "Sugar", "Eggs", "Butter", "Milk", "Vanilla extract", "Baking powder", "Powdered sugar"],
    occasions: ["Wedding", "Anniversary"]
  },
  {
    id: 3,
    name: "Strawberry Delight",
    category: "Custom Designs",
    frostingType: "Strawberry",
    price: "€30.00",
    image: "/api/placeholder/300/300",
    description: "Fresh strawberry cake with cream frosting.",
    longDescription: "A delightful strawberry cake made with fresh strawberries and topped with light cream frosting. Perfect for spring celebrations and strawberry lovers.",
    ingredients: ["Flour", "Sugar", "Fresh strawberries", "Eggs", "Butter", "Cream", "Vanilla extract", "Baking powder"],
    occasions: ["Spring", "Custom"]
  }
];

export const getCategories = () => {
  return [...new Set(products.map(product => product.category))];
};

export const getFrostingTypes = () => {
  return [...new Set(products.map(product => product.frostingType))];
};

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getRelatedProducts = (productId) => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  return products.filter(product => 
    product.id !== parseInt(productId) && 
    product.category === currentProduct.category
  ).slice(0, 3);
};
