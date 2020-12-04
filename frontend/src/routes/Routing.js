import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navbar } from '../components/core/Navbar/Navbar';
import { ProducatDetailsView } from '../pages/ProducatDetailsView';
import { CartView } from './../pages/CartView';
import { ProductsView } from '../pages/ProductsView';

const Routing = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' component={ProductsView} exact />
          <Route path='/product/:id' component={ProducatDetailsView} />
          <Route path='/cart' component={CartView} />
        </Switch>
      </Router>
      {/* <Footer /> */}
    </>
  );
};

export default Routing;
