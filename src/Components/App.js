import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home/Home';
import Products from './Products/Products';
import Contact from './Contact/Contact';
import Headphones from './Products/Headphones';
import Earbuds from './Products/Earbuds';
import Speakers from './Products/Speakers';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/headphones" element={<Headphones />} />
          <Route path="products/earbuds" element={<Earbuds />} />
          <Route path="products/speakers" element={<Speakers />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
