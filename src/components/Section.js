import React, { Component } from 'react';
import Products from './section/Products';
import Details from './section/Details';
import { Route } from 'react-router-dom';

export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/product" element={<Products />} exact />
        <Route path="/product/:id" element={<Details />} />
      </section>
    )
  }
}

export default Section