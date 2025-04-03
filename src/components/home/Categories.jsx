
import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';

const categories = [
  {
    id: 'birthday',
    name: 'Birthday Cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: 'Make your special day even more memorable with our beautiful birthday cakes.',
    likes: 342,
    postedDate: '1 week ago',
    username: 'sihanas_cakery'
  },
  {
    id: 'wedding',
    name: 'Wedding Cakes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: 'Elegant and beautiful wedding cakes to make your big day unforgettable.',
    likes: 567,
    postedDate: '3 days ago',
    username: 'sihanas_cakery'
  },
  {
    id: 'anniversary',
    name: 'Anniversary Cakes',
    image: 'https://images.unsplash.com/photo-1535254973040-607b474867ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: 'Celebrate your love with our specially designed anniversary cakes.',
    likes: 423,
    postedDate: '5 days ago',
    username: 'sihanas_cakery'
  },
  {
    id: 'custom',
    name: 'Custom Cakes',
    image: 'https://images.unsplash.com/photo-1557308536-ee471ef2c390?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    description: 'Let us create a unique cake tailored to your specific requirements and taste.',
    likes: 298,
    postedDate: '2 days ago',
    username: 'sihanas_cakery'
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
              className="instagram-category-card"
            >
              <div className="post-header">
                <div className="post-user">
                  <div className="user-avatar"></div>
                  <span className="username">{category.username}</span>
                </div>
                <div className="post-more">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="6" cy="12" r="1.5" fill="currentColor" />
                    <circle cx="18" cy="12" r="1.5" fill="currentColor" />
                  </svg>
                </div>
              </div>
              
              <div className="category-image-container">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="category-image"
                />
                <div className="category-overlay">
                  <div className="category-hashtag">
                    #{category.id}
                  </div>
                </div>
              </div>
              
              <div className="post-actions">
                <div className="post-action">
                  <HeartIcon />
                </div>
                <div className="post-action">
                  <CommentIcon />
                </div>
                <div className="post-action">
                  <ShareIcon />
                </div>
                <div className="post-action-save">
                  <SaveIcon />
                </div>
              </div>
              
              <div className="post-content">
                <div className="post-likes">{category.likes} likes</div>
                <div className="post-caption">
                  <span className="username">{category.username}</span> 
                  <span className="caption-text">{category.name} - {category.description}</span>
                </div>
                <div className="post-time">{category.postedDate}</div>
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

// Instagram-style icons
const HeartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z" stroke="currentColor" strokeWidth="2" />
  </svg>
);

const CommentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.656 17.008a9.993 9.993 0 0 0 1.344-5.008c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10c1.755 0 3.4-.454 4.836-1.25M7 15.8l.467-.467c1.126-1.126 1.688-1.688 2.392-1.928a3 3 0 0 1 1.282 0c.704.24 1.267.802 2.392 1.928l.467.467" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ShareIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m22 3-9 9m0 0v-7m0 7h7M11 5H6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SaveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 21v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2m8-10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default Categories;
