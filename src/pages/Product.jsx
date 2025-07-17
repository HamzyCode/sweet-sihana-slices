
import React, { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { getProductById, getRelatedProducts } from '../utils/productData.js';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Find the current product
  const product = getProductById(id);
  
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
  const relatedProducts = getRelatedProducts(id);

  // Handle "Order Now" button click  
  const handleOrderClick = () => {
    // Save product info to session storage to be picked up by contact form
    sessionStorage.setItem('selectedProduct', JSON.stringify({
      id: product.id,
      name: product.name
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
                <div className="product-occasions">
                  {product.occasions && product.occasions.map((occasion, index) => (
                    <span key={index} className="product-occasion-tag">
                      {occasion}
                    </span>
                  ))}
                </div>
                <div className="product-description">
                  <p>{product.description}</p>
                </div>
                
                {/* Long Description Section */}
                {product.longDescription && (
                  <div className="product-long-description">
                    <h3>About this Cake</h3>
                    <p>{product.longDescription}</p>
                  </div>
                )}
                
                {/* Ingredients Section */}
                <div className="product-ingredients">
                  <h3>Ingredients:</h3>
                  {product.ingredients && product.ingredients.length > 0 ? (
                    <ul>
                      {product.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="no-ingredients">Information coming soon.</p>
                  )}
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
