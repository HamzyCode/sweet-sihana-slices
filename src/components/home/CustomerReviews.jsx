
import React from 'react';
import './CustomerReviews.css';

const CustomerReviews = () => {
  // Updated Google Review function with correct link
  const openGoogleReview = () => {
    window.open('https://maps.app.goo.gl/Fh37Y61hD72fFfc2A', '_blank');
  };

  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <h2 className="reviews-title">Customer Reviews</h2>
          <p className="reviews-subtitle">
            We appreciate your feedback. Help others discover our delicious cakes by leaving a review!
          </p>
        </div>
        
        <div className="reviews-content">
          <div className="reviews-image">
            <img 
              src="https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
              alt="Happy customer with cake" 
              className="review-image"
            />
          </div>
          
          <div className="reviews-text">
            <h3>Share Your Experience</h3>
            <p>
              At Sihana's Cake, we value your feedback and strive to provide the best quality cakes and service. 
              If you've enjoyed our cakes, please consider leaving us a review on Google. Your support helps 
              our small business grow!
            </p>
            
            <button className="google-review-button" onClick={openGoogleReview}>
              <GoogleIcon />
              Leave a Review on Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#4285F4">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

export default CustomerReviews;
