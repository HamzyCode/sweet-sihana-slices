
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-b from-cake-lightpink/30 to-cake-cream">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-playfair text-cake-brown mb-4">
              Delicious Cakes<br />
              <span className="text-cake-pink">Made with Love</span>
            </h1>
            <p className="text-lg mb-8 max-w-md">
              Handcrafted premium quality cakes for all your special moments. 
              Made with the finest ingredients since 2010.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/menu" className="cake-button cake-button-primary">
                Explore Our Cakes
                <ArrowRight size={18} />
              </Link>
              <Link to="/order" className="cake-button cake-button-outline">
                Custom Order
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="/lovable-uploads/79ee26b0-cc55-4465-a2a3-f6b24880cd90.png" 
              alt="Sihana's Cake Logo" 
              className="w-full max-w-md animate-float"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSI3MHB4IiB2aWV3Qm94PSIwIDAgMTI4MCAxNDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iI0ZGRjhGMCI+PHBhdGggZD0iTTEyODAgMEgwdjE0MGgxMjgweiIvPjwvZz48L3N2Zz4=')] bg-[length:100%_100%] bg-bottom bg-no-repeat"></div>
    </section>
  );
};

export default Hero;
