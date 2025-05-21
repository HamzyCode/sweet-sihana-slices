
import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { fetchProductById, fetchProductIngredients, fetchProducts } from '../utils/supabaseClient';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import { Cake, ChevronLeft } from 'lucide-react';
import './Product.css';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const loadProductData = async () => {
      try {
        setLoading(true);
        
        // Fetch product details
        const productData = await fetchProductById(id);
        
        if (!productData) {
          setLoading(false);
          return; // Product not found
        }
        
        setProduct(productData);
        
        // Fetch ingredients
        const ingredientsData = await fetchProductIngredients(id);
        setIngredients(ingredientsData);
        
        // Fetch related products (same category)
        const allProducts = await fetchProducts();
        const filtered = allProducts
          .filter(p => p.category === productData.category && p.id !== productData.id)
          .slice(0, 3);
        
        setRelatedProducts(filtered);
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        setLoading(false);
      } catch (error) {
        console.error('Error loading product:', error);
        setLoading(false);
      }
    };
    
    loadProductData();
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container">
            <div className="product-loading">
              <Cake className="animate-spin" size={48} />
              <p>Loading delicious details...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Handle case when product is not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <div className="container">
            <div className="product-not-found">
              <h1>Product Not Found</h1>
              <p>Sorry, the cake you're looking for doesn't exist.</p>
              <button onClick={() => navigate('/menu')} className="back-button">
                <ChevronLeft size={18} />
                Back to Menu
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
    
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
                <div className="product-category-badge">{product.category}</div>
                <div className="product-description">
                  <p>{product.long_description}</p>
                </div>
                
                {ingredients.length > 0 && (
                  <div className="product-ingredients">
                    <h3>Ingredients:</h3>
                    <ul>
                      {ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Link to="/contact" className="order-button">
                  Inquire About This Cake
                </Link>
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
