
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const categories = [
  {
    id: 'birthday',
    name: 'Birthday Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: 'Make your special day even more memorable with our beautiful birthday cakes.'
  },
  {
    id: 'wedding',
    name: 'Wedding Cakes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: 'Elegant and beautiful wedding cakes to make your big day unforgettable.'
  },
  {
    id: 'anniversary',
    name: 'Anniversary Cakes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: 'Celebrate your love with our specially designed anniversary cakes.'
  },
  {
    id: 'custom',
    name: 'Custom Cakes',
    image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: 'Let us create a unique cake tailored to your specific requirements and taste.'
  }
];

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Cakes for Every Occasion</h2>
          <p className="section-description">
            From birthdays to weddings, we have the perfect cake for all your special moments.
          </p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/occasions/${category.id}`}
              className="category-card"
            >
              <div className="category-image-container">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-overlay"></div>
                <h3 className="category-title">
                  {category.name}
                </h3>
              </div>
              <div className="category-content">
                <p className="category-description">{category.description}</p>
                <div className="category-link">
                  Browse Collection
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
