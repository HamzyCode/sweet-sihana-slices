
import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    role: 'Birthday Celebration',
    image: 'https://i.pravatar.cc/100?img=1',
    text: "The birthday cake Sihana's made for my daughter was absolutely stunning! Not only did it look amazing, but it tasted delicious too. Everyone at the party was impressed.",
    rating: 5
  },
  {
    id: 2,
    name: 'Michael Thompson',
    role: 'Wedding Client',
    image: 'https://i.pravatar.cc/100?img=3',
    text: "Our wedding cake exceeded all our expectations. Sihana's team was professional from the consultation to the delivery. The cake was a true centerpiece at our reception.",
    rating: 5
  },
  {
    id: 3,
    name: 'Sarah Williams',
    role: 'Anniversary Celebration',
    image: 'https://i.pravatar.cc/100?img=5',
    text: "I've been ordering cakes from Sihana's for years, and they never disappoint. Their attention to detail and quality ingredients make them the best bakery in town.",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Customer Love</h2>
          <p className="section-description">
            Don't just take our word for it. Here's what our happy customers have to say about our cakes.
          </p>
        </div>
        
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="testimonial-card"
            >
              <div className="testimonial-header">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="testimonial-image"
                />
                <div>
                  <h4 className="testimonial-name">{item.name}</h4>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>
              
              <div className="testimonial-rating">
                {[...Array(item.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              
              <p className="testimonial-text">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#F9E7B9" stroke="#F9E7B9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

export default Testimonials;
