
import React from 'react';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import './Gallery.css';

const galleryItems = [
  {
    id: 1,
    name: 'Chocolate Delight',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'chocolate'
  },
  {
    id: 2,
    name: 'Wedding Special',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'wedding'
  },
  {
    id: 3,
    name: 'Strawberry Dream',
    image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'fruit'
  },
  {
    id: 4,
    name: 'Birthday Celebration',
    image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'birthday'
  },
  {
    id: 5,
    name: 'Vanilla Bliss',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'vanilla'
  },
  {
    id: 6,
    name: 'Red Velvet',
    image: 'https://images.unsplash.com/photo-1586788680399-b6409fcf1c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'specialty'
  },
  {
    id: 7,
    name: 'Cupcake Collection',
    image: 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'cupcakes'
  },
  {
    id: 8,
    name: 'Anniversary Special',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    category: 'anniversary'
  }
];

const Gallery = () => {
  const [filter, setFilter] = React.useState('all');
  
  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);
    
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="gallery-section">
          <div className="container">
            <div className="section-header">
              <h1 className="section-title">Our Cake Gallery</h1>
              <p className="section-description">
                Browse through our delicious creations and get inspired for your next celebration.
              </p>
            </div>
            
            <div className="gallery-filters">
              <button 
                className={`filter-button ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All
              </button>
              <button 
                className={`filter-button ${filter === 'wedding' ? 'active' : ''}`}
                onClick={() => setFilter('wedding')}
              >
                Wedding
              </button>
              <button 
                className={`filter-button ${filter === 'birthday' ? 'active' : ''}`}
                onClick={() => setFilter('birthday')}
              >
                Birthday
              </button>
              <button 
                className={`filter-button ${filter === 'chocolate' ? 'active' : ''}`}
                onClick={() => setFilter('chocolate')}
              >
                Chocolate
              </button>
              <button 
                className={`filter-button ${filter === 'fruit' ? 'active' : ''}`}
                onClick={() => setFilter('fruit')}
              >
                Fruit
              </button>
            </div>
            
            <div className="gallery-grid">
              {filteredItems.map(item => (
                <div key={item.id} className="gallery-item">
                  <div className="gallery-image-container">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="gallery-image"
                    />
                  </div>
                  <div className="gallery-overlay">
                    <h3 className="gallery-title">{item.name}</h3>
                    <span className="gallery-category">{item.category}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
