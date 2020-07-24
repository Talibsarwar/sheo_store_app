import React from 'react';
import Header from './components/Header';
import Home from "./components/Home";
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Registration from './components/Registration';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './components/DataProvider';
import Details from './components/Details';
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <section>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Details />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="registration" element={<Registration />} />
              <Route path="cart" element={<Cart />} />
            </Routes>
          </section>
          <Footer />
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;

