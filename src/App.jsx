
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import Menu from "./pages/Menu.jsx";
import Product from "./pages/Product.jsx";
import Birthday from "./pages/occasions/Birthday.jsx";
import Wedding from "./pages/occasions/Wedding.jsx";
import Anniversary from "./pages/occasions/Anniversary.jsx";
import NotFound from "./pages/NotFound.jsx";
import './App.css';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/occasions/birthday" element={<Birthday />} />
      <Route path="/occasions/wedding" element={<Wedding />} />
      <Route path="/occasions/anniversary" element={<Anniversary />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
