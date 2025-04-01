
import React from 'react';
import { Link } from 'react-router-dom';

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
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Cakes for Every Occasion</h2>
          <p className="max-w-2xl mx-auto text-cake-brown/80">
            From birthdays to weddings, we have the perfect cake for all your special moments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={`/occasions/${category.id}`}
              className="cake-card group h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cake-brown/80 to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white font-playfair">
                  {category.name}
                </h3>
              </div>
              <div className="p-5 flex-grow flex flex-col">
                <p className="text-cake-brown/70 text-sm mb-3 flex-grow">{category.description}</p>
                <div className="mt-auto text-cake-pink font-medium group-hover:underline">
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
