
import React, { useState } from 'react';
import './FAQ.css';

const faqItems = [
  {
    id: 1,
    question: "How far in advance should I order a cake?",
    answer: "We recommend ordering your cake at least 3-5 days in advance for standard cakes. For custom or wedding cakes, please place your order 2-4 weeks ahead of time to ensure we can accommodate your request."
  },
  {
    id: 2,
    question: "Do you offer gluten-free or vegan options?",
    answer: "Yes! We offer a variety of gluten-free and vegan cake options. Please let us know about any dietary restrictions when placing your order, and we'll be happy to accommodate your needs."
  },
  {
    id: 3,
    question: "How do I store my cake?",
    answer: "For best results, store your cake in an airtight container at room temperature for up to 2 days. If you need to keep it longer, refrigerate it and bring to room temperature before serving for the best taste and texture."
  },
  {
    id: 4,
    question: "Do you deliver cakes?",
    answer: "Yes, we offer delivery within the city for a small fee. Delivery cost depends on the distance. Please inquire about delivery when placing your order."
  },
  {
    id: 5,
    question: "Can I customize the design and flavor of my cake?",
    answer: "Absolutely! We specialize in custom cakes. You can select from our range of flavors and designs, or work with our team to create something completely unique for your special occasion."
  }
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);
  
  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };
  
  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-description">
            Get answers to common questions about our cakes and services.
          </p>
        </div>
        
        <div className="faq-container">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className={`faq-item ${activeId === item.id ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleAccordion(item.id)}
              >
                {item.question}
                <span className="faq-icon">
                  {activeId === item.id ? <MinusIcon /> : <PlusIcon />}
                </span>
              </button>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

export default FAQ;
