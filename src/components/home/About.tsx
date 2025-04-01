
import React from 'react';
import { CakeSlice, Star, Users, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section-padding bg-cake-cream">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
              alt="Baking cakes" 
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <div className="mb-6">
              <span className="text-cake-pink font-medium">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mt-2 mb-6">
                Baking Happiness Since 2010
              </h2>
              <p className="mb-4">
                Sihana's Cake began with a passion for creating delicious, handmade cakes that bring joy to special moments. What started as a small home bakery has grown into a beloved local cake shop, but our commitment to quality and taste has remained the same.
              </p>
              <p className="mb-6">
                Every cake is made from scratch using premium ingredients, with no artificial flavors or preservatives. We believe that the best cakes come from the finest ingredients and a whole lot of love.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                <div className="h-12 w-12 flex items-center justify-center bg-cake-pink/10 text-cake-pink rounded-full mb-3">
                  <CakeSlice size={24} />
                </div>
                <h3 className="text-lg font-medium mb-1">Premium Quality</h3>
                <p className="text-sm text-center text-cake-brown/70">Only the finest ingredients</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                <div className="h-12 w-12 flex items-center justify-center bg-cake-yellow/20 text-cake-brown rounded-full mb-3">
                  <Star size={24} />
                </div>
                <h3 className="text-lg font-medium mb-1">100% Handmade</h3>
                <p className="text-sm text-center text-cake-brown/70">Crafted with attention to detail</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                <div className="h-12 w-12 flex items-center justify-center bg-cake-lightpink/30 text-cake-pink rounded-full mb-3">
                  <Users size={24} />
                </div>
                <h3 className="text-lg font-medium mb-1">Happy Customers</h3>
                <p className="text-sm text-center text-cake-brown/70">Thousands of smiling faces</p>
              </div>
              
              <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm">
                <div className="h-12 w-12 flex items-center justify-center bg-cake-pink/10 text-cake-pink rounded-full mb-3">
                  <Heart size={24} />
                </div>
                <h3 className="text-lg font-medium mb-1">Made with Love</h3>
                <p className="text-sm text-center text-cake-brown/70">You can taste the difference</p>
              </div>
            </div>
            
            <Link to="/about" className="cake-button cake-button-primary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
