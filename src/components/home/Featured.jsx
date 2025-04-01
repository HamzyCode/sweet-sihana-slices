
import React from 'react';
import { Link } from 'react-router-dom';

const featuredCakes = [
  {
    id: 1,
    name: 'Chocolate Delight',
    description: 'Rich chocolate cake with creamy ganache and chocolate shavings.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$35.99',
    category: 'bestseller'
  },
  {
    id: 2,
    name: 'Strawberry Dream',
    description: 'Light vanilla sponge with fresh strawberries and cream.',
    image: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$32.99',
    category: 'popular'
  },
  {
    id: 3,
    name: 'Vanilla Bliss',
    description: 'Classic vanilla cake with buttercream frosting and sprinkles.',
    image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$29.99',
    category: 'new'
  },
  {
    id: 4,
    name: 'Red Velvet',
    description: 'Classic red velvet with cream cheese frosting.',
    image: 'https://images.unsplash.com/photo-1586788680399-b6409fcf1c90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
    price: '$34.99',
    category: 'popular'
  }
];

const Featured = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Our Featured Cakes</h2>
          <p className="max-w-2xl mx-auto text-cake-brown/80">
            Discover our most loved and popular cake creations, handcrafted with premium ingredients and a whole lot of love.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCakes.map((cake) => (
            <div key={cake.id} className="cake-card group">
              <div className="relative overflow-hidden h-64">
                <img 
                  src={cake.image} 
                  alt={cake.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {cake.category && (
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium uppercase 
                    ${cake.category === 'bestseller' ? 'bg-cake-pink text-white' : 
                      cake.category === 'new' ? 'bg-cake-yellow text-cake-brown' : 
                      'bg-white text-cake-brown'}`}>
                    {cake.category}
                  </div>
                )}
              </div>
              <div className="p-5">
                <h3 className="text-xl font-playfair font-bold mb-2">{cake.name}</h3>
                <p className="text-cake-brown/70 text-sm mb-3">{cake.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-cake-pink">{cake.price}</span>
                  <Link to={`/menu/${cake.id}`} className="text-cake-brown hover:text-cake-pink transition-colors">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link to="/menu" className="cake-button cake-button-primary">
            View All Cakes
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Featured;
