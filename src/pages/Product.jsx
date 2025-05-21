
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import './Product.css';

// Product data (same as menu items for consistency)
const products = [
  {
    id: 1,
    name: 'Chocolate Delight',
    description: 'Rich chocolate cake with creamy ganache and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$35.99',
    category: 'chocolate',
    longDescription: 'Indulge in our signature Chocolate Delight cake, featuring three layers of moist chocolate sponge, filled with creamy chocolate ganache and covered in smooth chocolate buttercream. Decorated with chocolate shavings and a drizzle of rich chocolate sauce, this cake is perfect for any chocolate lover. Made with premium cocoa and the finest ingredients, our Chocolate Delight is a true celebration of chocolate in all its glory.',
    ingredients: ['Premium cocoa', 'Fresh eggs', 'Butter', 'Sugar', 'Flour', 'Dark chocolate', 'Heavy cream']
  },
  {
    id: 2,
    name: 'Strawberry Dream',
    description: 'Light vanilla sponge with fresh strawberries and cream.',
    image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$32.99',
    category: 'fruit',
    longDescription: 'Our Strawberry Dream cake is a light and refreshing treat that captures the essence of summer. Three layers of delicate vanilla sponge are filled with fresh strawberry compote and whipped mascarpone cream. The cake is frosted with a light strawberry-infused buttercream and topped with fresh strawberries. This beautiful pink creation is perfect for birthdays, garden parties, or any occasion that calls for something fruity and delicious.',
    ingredients: ['Fresh strawberries', 'Vanilla beans', 'Mascarpone cheese', 'Heavy cream', 'Butter', 'Sugar', 'Flour']
  },
  {
    id: 3,
    name: 'Vanilla Bliss',
    description: 'Classic vanilla cake with buttercream frosting and sprinkles.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$29.99',
    category: 'vanilla',
    longDescription: 'Sometimes the simplest pleasures are the best. Our Vanilla Bliss cake is a timeless classic that never goes out of style. Made with real Madagascar vanilla beans, this light and fluffy cake features three layers of moist vanilla sponge filled and frosted with our smooth vanilla buttercream. Decorated with colorful sprinkles, this cake is perfect for birthdays, graduations, or any celebration that calls for a crowd-pleasing favorite.',
    ingredients: ['Madagascar vanilla beans', 'Fresh eggs', 'Butter', 'Sugar', 'Flour', 'Milk', 'Colorful sprinkles']
  },
  {
    id: 4,
    name: 'Red Velvet',
    description: 'Classic red velvet with cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1586788680399-b6409fcf1c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$33.99',
    category: 'specialty',
    longDescription: 'Our Red Velvet cake is a true Southern classic with a modern twist. The deep red cake layers have a subtle cocoa flavor and velvety texture that gives this cake its name. Filled and frosted with our tangy cream cheese frosting, and decorated with red velvet crumbs, this cake is as beautiful as it is delicious. Perfect for anniversaries, Valentine\'s Day, or any occasion that calls for something a little special.',
    ingredients: ['Cocoa powder', 'Buttermilk', 'Cream cheese', 'Butter', 'Sugar', 'Flour', 'Natural red food coloring']
  },
  {
    id: 5,
    name: 'Carrot Cake',
    description: 'Moist carrot cake with walnuts and cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1594054723100-97bf81669244?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$31.99',
    category: 'specialty',
    longDescription: 'Our Carrot Cake is a perfectly spiced treat loaded with freshly grated carrots, crushed pineapple, and toasted walnuts. Three moist layers are filled and frosted with our silky cream cheese frosting and decorated with chopped walnuts and tiny marzipan carrots. This cake is not just delicious but nutritious too, making it a perfect choice for afternoon tea or a family gathering.',
    ingredients: ['Fresh carrots', 'Crushed pineapple', 'Walnuts', 'Cream cheese', 'Butter', 'Sugar', 'Flour', 'Cinnamon', 'Nutmeg']
  },
  {
    id: 6,
    name: 'Lemon Blueberry',
    description: 'Tangy lemon cake with fresh blueberries and lemon glaze.',
    image: 'https://images.unsplash.com/photo-1519915745176-7a5064701189?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$34.99',
    category: 'fruit',
    longDescription: 'Our Lemon Blueberry cake is a perfect balance of tangy and sweet. Three layers of moist lemon-infused sponge are studded with plump blueberries and filled with lemon curd. The cake is frosted with a light lemon buttercream and topped with fresh blueberries and a drizzle of lemon glaze. This bright and refreshing cake is perfect for spring celebrations, garden parties, or summer gatherings.',
    ingredients: ['Fresh lemons', 'Blueberries', 'Butter', 'Sugar', 'Flour', 'Eggs', 'Lemon curd']
  },
  {
    id: 7,
    name: 'Black Forest',
    description: 'Chocolate cake with cherries, whipped cream, and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$36.99',
    category: 'chocolate',
    longDescription: 'Our Black Forest cake is a German classic featuring three layers of rich chocolate sponge soaked in cherry syrup. Each layer is filled with sweetened whipped cream and sour cherries, then covered in more cream and decorated with chocolate shavings and fresh cherries. This indulgent cake has the perfect balance of rich chocolate, tangy cherries, and light cream, making it a sophisticated choice for birthdays and celebrations.',
    ingredients: ['Dark chocolate', 'Sour cherries', 'Heavy cream', 'Kirsch (cherry liqueur)', 'Sugar', 'Flour', 'Eggs']
  },
  {
    id: 8,
    name: 'Tiramisu Cake',
    description: 'Coffee-soaked layers with mascarpone cream and cocoa.',
    image: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$38.99',
    category: 'specialty',
    longDescription: 'Our Tiramisu Cake is an elegant Italian-inspired dessert that transforms the classic tiramisu into a stunning layer cake. Three layers of light sponge cake soaked in espresso are filled with creamy mascarpone filling. The cake is frosted with more mascarpone cream and dusted with cocoa powder for a sophisticated finish. This cake is perfect for coffee lovers and ideal for dinner parties, birthdays, or any occasion that calls for something a little more grown-up.',
    ingredients: ['Mascarpone cheese', 'Espresso coffee', 'Cocoa powder', 'Eggs', 'Sugar', 'Flour', 'Marsala wine (optional)']
  }
];

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Find the current product
  const product = products.find(p => p.id === productId);
  
  // Handle case when product is not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container">
            <div className="product-not-found">
              <h1>Product Not Found</h1>
              <p>Sorry, the product you're looking for doesn't exist.</p>
              <button onClick={() => navigate('/menu')} className="back-button">
                Back to Menu
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Find related products (same category, excluding current product)
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  // Handle "Order Now" button click  
  const handleOrderClick = () => {
    // Save product info to session storage to be picked up by contact form
    sessionStorage.setItem('selectedProduct', JSON.stringify({
      id: product.id,
      name: product.name,
      price: product.price
    }));
    navigate('/contact');
  };
    
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="product-section">
          <div className="container">
            <div className="product-details">
              <div className="product-images">
                <div className="main-image-container">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="main-image"
                  />
                </div>
              </div>
              
              <div className="product-info">
                <h1 className="product-title">{product.name}</h1>
                <div className="product-price">{product.price}</div>
                <div className="product-description">
                  <p>{product.longDescription}</p>
                </div>
                
                <div className="product-ingredients">
                  <h3>Ingredients:</h3>
                  <ul>
                    {product.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                
                <button onClick={handleOrderClick} className="order-button">
                  Order Now
                </button>
              </div>
            </div>
            
            {relatedProducts.length > 0 && (
              <div className="related-products">
                <h2 className="related-title">You May Also Like</h2>
                <div className="related-grid">
                  {relatedProducts.map(relatedProduct => (
                    <div key={relatedProduct.id} className="related-item">
                      <div className="related-image-container">
                        <img 
                          src={relatedProduct.image} 
                          alt={relatedProduct.name}
                          className="related-image"
                        />
                      </div>
                      <div className="related-details">
                        <h3>{relatedProduct.name}</h3>
                        <p>{relatedProduct.price}</p>
                        <Link to={`/product/${relatedProduct.id}`} className="view-button">
                          View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
