import React from 'react';
import Header from './components/Header';
import Products from './components/Products';
import About from './components/About';
import Contact from './components/Contact';
import Login_Registration from './components/Login or Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './components/DataProvider';
import Details from './components/Details';
import './App.css';

function App() {
  return (
    <DataProvider>
      <div className="App">
        <Router>
          <Header />
          <section>
            <Routes>
              <Route path="products" element={<Products />} />
              <Route path="products/:id" element={<Details />} />
              <Route path="products" element={<About />} />
              <Route path="products" element={<Contact />} />
              <Route path="products" element={<Login_Registration />} />
            </Routes>
          </section>
        </Router>
      </div>
    </DataProvider>
  );
}

export default App;

