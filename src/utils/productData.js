
// Real product data with actual images from the assets directory
const products = [
  // Birthday Cakes
  {
    id: 1,
    name: 'Chocolate Birthday Delight',
    description: 'Rich chocolate cake with creamy ganache, perfect for birthday celebrations.',
    image: '/assets/images/products/IMG_1842-Photoroom.jpg',
    category: 'Birthday',
    shape: 'Round',
    occasion: 'birthday',
    frostingType: 'Chocolate Ganache'
  },
  {
    id: 2,
    name: 'Vanilla Birthday Bliss',
    description: 'Classic vanilla cake with buttercream frosting and colorful decorations.',
    image: '/assets/images/products/IMG_1861-Photoroom.jpg',
    category: 'Birthday',
    shape: 'Round',
    occasion: 'birthday',
    frostingType: 'Buttercream'
  },
  {
    id: 3,
    name: 'Strawberry Birthday Dream',
    description: 'Light vanilla sponge with fresh strawberries and cream.',
    image: '/assets/images/products/IMG_1863-Photoroom.jpg',
    category: 'Birthday',
    shape: 'Square',
    occasion: 'birthday',
    frostingType: 'Whipped Cream'
  },
  {
    id: 4,
    name: 'Rainbow Birthday Cake',
    description: 'Colorful layers with rainbow buttercream and sprinkles.',
    image: '/assets/images/products/IMG_1879-Photoroom.jpg',
    category: 'Birthday',
    shape: 'Round',
    occasion: 'birthday',
    frostingType: 'Buttercream'
  },
  {
    id: 5,
    name: 'Unicorn Birthday Magic',
    description: 'Magical unicorn-themed cake with pastel colors and edible decorations.',
    image: '/assets/images/products/IMG_1884-Photoroom.jpg',
    category: 'Birthday',
    shape: 'Custom',
    occasion: 'birthday',
    frostingType: 'Buttercream'
  },
  {
    id: 6,
    name: 'Princess Birthday Castle',
    description: 'Beautiful princess castle cake with pink and gold decorations.',
    image: '/assets/images/products/IMG_1894-Photoroom.jpg',
    category: 'Birthday',
    shape: 'Custom',
    occasion: 'birthday',
    frostingType: 'Fondant'
  },

  // Wedding Cakes
  {
    id: 7,
    name: 'Classic White Wedding Cake',
    description: 'Elegant three-tier wedding cake with white fondant and floral decorations.',
    image: '/assets/images/products/IMG_1901-Photoroom.jpg',
    category: 'Wedding',
    shape: 'Tiered',
    occasion: 'wedding',
    frostingType: 'Fondant'
  },
  {
    id: 8,
    name: 'Romantic Rose Wedding Cake',
    description: 'Beautiful wedding cake adorned with sugar roses and elegant piping.',
    image: '/assets/images/products/IMG_1906-Photoroom.jpg',
    category: 'Wedding',
    shape: 'Tiered',
    occasion: 'wedding',
    frostingType: 'Buttercream'
  },
  {
    id: 9,
    name: 'Gold Accent Wedding Cake',
    description: 'Sophisticated wedding cake with gold accents and modern design.',
    image: '/assets/images/products/IMG_1911-Photoroom.jpg',
    category: 'Wedding',
    shape: 'Tiered',
    occasion: 'wedding',
    frostingType: 'Fondant'
  },
  {
    id: 10,
    name: 'Floral Garden Wedding Cake',
    description: 'Nature-inspired wedding cake with cascading sugar flowers.',
    image: '/assets/images/products/IMG_1925-Photoroom.jpg',
    category: 'Wedding',
    shape: 'Tiered',
    occasion: 'wedding',
    frostingType: 'Buttercream'
  },

  // Anniversary Cakes
  {
    id: 11,
    name: 'Red Velvet Anniversary',
    description: 'Classic red velvet with cream cheese frosting, perfect for anniversaries.',
    image: '/assets/images/products/IMG_1945-Photoroom.jpg',
    category: 'Anniversary',
    shape: 'Heart',
    occasion: 'anniversary',
    frostingType: 'Cream Cheese'
  },
  {
    id: 12,
    name: 'Golden Anniversary Celebration',
    description: 'Elegant anniversary cake with golden decorations and fresh flowers.',
    image: '/assets/images/products/IMG_1949-Photoroom.jpg',
    category: 'Anniversary',
    shape: 'Round',
    occasion: 'anniversary',
    frostingType: 'Buttercream'
  },
  {
    id: 13,
    name: 'Silver Anniversary Elegance',
    description: 'Sophisticated silver-themed anniversary cake with pearl accents.',
    image: '/assets/images/products/IMG_1954-Photoroom.jpg',
    category: 'Anniversary',
    shape: 'Square',
    occasion: 'anniversary',
    frostingType: 'Fondant'
  },
  {
    id: 14,
    name: 'Romantic Heart Anniversary',
    description: 'Heart-shaped anniversary cake with romantic decorations and roses.',
    image: '/assets/images/products/IMG_1956-Photoroom.jpg',
    category: 'Anniversary',
    shape: 'Heart',
    occasion: 'anniversary',
    frostingType: 'Buttercream'
  },

  // Custom Cakes
  {
    id: 15,
    name: 'Custom Designer Cake',
    description: 'Fully customizable cake designed to your exact specifications.',
    image: '/assets/images/products/IMG_1958-Photoroom.jpg',
    category: 'Custom',
    shape: 'Custom',
    occasion: 'custom',
    frostingType: 'Custom'
  },
  {
    id: 16,
    name: 'Character Theme Custom',
    description: 'Custom character-themed cake for special occasions and celebrations.',
    image: '/assets/images/products/IMG_1991-Photoroom.jpg',
    category: 'Custom',
    shape: 'Custom',
    occasion: 'custom',
    frostingType: 'Buttercream'
  },
  {
    id: 17,
    name: 'Sports Theme Custom',
    description: 'Custom sports-themed cake perfect for sports enthusiasts.',
    image: '/assets/images/products/IMG_1992-Photoroom.jpg',
    category: 'Custom',
    shape: 'Custom',
    occasion: 'custom',
    frostingType: 'Fondant'
  },
  {
    id: 18,
    name: 'Corporate Custom Cake',
    description: 'Professional custom cake for corporate events and celebrations.',
    image: '/assets/images/products/IMG_2015-Photoroom.jpg',
    category: 'Custom',
    shape: 'Custom',
    occasion: 'custom',
    frostingType: 'Custom'
  },

  // Additional Birthday Cakes
  {
    id: 19,
    name: 'Superhero Birthday Adventure',
    description: 'Action-packed superhero themed birthday cake.',
    image: '/assets/images/products/IMG_2029-Photoroom.jpg',
    category: 'Birthday',
    shape: 'Custom',
    occasion: 'birthday',
    frostingType: 'Buttercream'
  },
  {
    id: 20,
    name: 'Dinosaur Birthday Expedition',
    description: 'Prehistoric dinosaur-themed cake for adventurous birthdays.',
    image: '/assets/images/products/IMG_2034-Photoroom.jpg',
    category: 'Birthday',
    shape: 'Custom',
    occasion: 'birthday',
    frostingType: 'Fondant'
  },
  {
    id: 21,
    name: 'Mermaid Birthday Ocean',
    description: 'Underwater mermaid-themed birthday cake with ocean decorations.',
    image: '/assets/images/products/IMG_2055-Photoroom.jpg',
    category: 'Birthday',
    shape: 'Custom',
    occasion: 'birthday',
    frostingType: 'Buttercream'
  },
  {
    id: 22,
    name: 'Car Racing Birthday',
    description: 'Fast-paced car racing themed birthday cake.',
    image: '/assets/images/products/IMG_2056-Photoroom.jpg',
    category: 'Birthday',
    shape: 'Custom',
    occasion: 'birthday',
    frostingType: 'Fondant'
  },

  // More Wedding Cakes
  {
    id: 23,
    name: 'Rustic Wedding Charm',
    description: 'Rustic-style wedding cake with natural decorations and burlap accents.',
    image: '/assets/images/products/IMG_2058-Photoroom.jpg',
    category: 'Wedding',
    shape: 'Tiered',
    occasion: 'wedding',
    frostingType: 'Buttercream'
  },
  {
    id: 24,
    name: 'Modern Minimalist Wedding',
    description: 'Clean, modern wedding cake with minimalist design and geometric elements.',
    image: '/assets/images/products/IMG_2071-Photoroom.jpg',
    category: 'Wedding',
    shape: 'Tiered',
    occasion: 'wedding',
    frostingType: 'Fondant'
  }
];

export const getAllProducts = () => products;

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  if (category === 'all') return products;
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getProductsByOccasion = (occasion) => {
  return products.filter(product => 
    product.occasion.toLowerCase() === occasion.toLowerCase()
  );
};

export const getProductsByCategoryAndShape = (category, shape) => {
  let filtered = products;
  
  if (category !== 'all') {
    filtered = filtered.filter(product => 
      product.category.toLowerCase() === category.toLowerCase()
    );
  }
  
  if (shape !== 'all') {
    filtered = filtered.filter(product => 
      product.shape.toLowerCase() === shape.toLowerCase()
    );
  }
  
  return filtered;
};

export const getRelatedProducts = (productId) => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return [];
  
  // Find products in the same category, excluding the current product
  return products.filter(product => 
    product.category === currentProduct.category && 
    product.id !== parseInt(productId)
  ).slice(0, 3); // Limit to 3 related products
};

export const getCategories = () => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories;
};

export const getCakeShapes = () => {
  const shapes = [...new Set(products.map(product => product.shape))];
  return shapes;
};

export const getFrostingTypes = () => {
  const frostingTypes = [...new Set(products.map(product => product.frostingType))];
  return frostingTypes;
};

// For backwards compatibility, export products as default
export { products };
