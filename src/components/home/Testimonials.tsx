
import React from 'react';
import { Star } from 'lucide-react';

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
    <section className="section-padding bg-cake-lightpink/20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">Customer Love</h2>
          <p className="max-w-2xl mx-auto text-cake-brown/80">
            Don't just take our word for it. Here's what our happy customers have to say about our cakes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div 
              key={item.id} 
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-cake-pink"
                />
                <div>
                  <h4 className="font-bold text-lg">{item.name}</h4>
                  <p className="text-sm text-cake-brown/70">{item.role}</p>
                </div>
              </div>
              
              <div className="flex mb-3">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-cake-yellow text-cake-yellow" />
                ))}
              </div>
              
              <p className="text-cake-brown/80 italic flex-grow">"{item.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
