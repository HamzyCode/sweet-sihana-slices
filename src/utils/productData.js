
// Mock product data with categories and shapes
const products = [
  // Birthday Cakes
  {
    id: 1,
    name: 'Chocolate Delight',
    description: 'Rich chocolate cake with creamy ganache and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Birthday',
    shape: 'Round',
    occasion: 'birthday'
  },
  {
    id: 3,
    name: 'Vanilla Bliss',
    description: 'Classic vanilla cake with buttercream frosting and sprinkles.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Birthday',
    shape: 'Round',
    occasion: 'birthday'
  },
  {
    id: 6,
    name: 'Lemon Blueberry',
    description: 'Tangy lemon cake with fresh blueberries and lemon glaze.',
    image: 'https://images.unsplash.com/photo-1519915745176-7a5064701189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Birthday',
    shape: 'Square',
    occasion: 'birthday'
  },

  // Wedding Cakes
  {
    id: 2,
    name: 'Strawberry Dream',
    description: 'Light vanilla sponge with fresh strawberries and cream.',
    image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Wedding',
    shape: 'Tiered',
    occasion: 'wedding'
  },
  {
    id: 9,
    name: 'Elegant Wedding Cake',
    description: 'Multi-tiered wedding cake with elegant decorations.',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Wedding',
    shape: 'Tiered',
    occasion: 'wedding'
  },

  // Anniversary Cakes
  {
    id: 4,
    name: 'Red Velvet',
    description: 'Classic red velvet with cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1586788680399-b6409fcf1c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Anniversary',
    shape: 'Heart',
    occasion: 'anniversary'
  },
  {
    id: 7,
    name: 'Black Forest',
    description: 'Chocolate cake with cherries, whipped cream, and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Anniversary',
    shape: 'Round',
    occasion: 'anniversary'
  },
  {
    id: 8,
    name: 'Tiramisu Cake',
    description: 'Coffee-soaked layers with mascarpone cream and cocoa.',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Anniversary',
    shape: 'Square',
    occasion: 'anniversary'
  },

  // Custom Cakes
  {
    id: 10,
    name: 'Custom Designer Cake',
    description: 'Fully customizable cake designed to your specifications.',
    image: 'https://images.unsplash.com/photo-1557985045-e5c2b3c3b93e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Custom',
    shape: 'Custom',
    occasion: 'custom'
  },
  {
    id: 11,
    name: 'Character Theme Cake',
    description: 'Custom character-themed cake for special occasions.',
    image: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'Custom',
    shape: 'Custom',
    occasion: 'custom'
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

export const getCategories = () => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories;
};

export const getCakeShapes = () => {
  const shapes = [...new Set(products.map(product => product.shape))];
  return shapes;
};
