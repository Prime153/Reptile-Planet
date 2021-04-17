import React from 'react';
import MainTemplate from 'Templates/MainTemplate';
import Home from 'Pages/Home';
import Shop from 'Pages/Shop';
import ReptilesCategory from 'Pages/ReptilesCategory';
import ArachnidsCategory from 'Pages/ArachnidsCategory';
import Lizards from 'Pages/Lizards';
import Snakes from 'Pages/Snakes';
import Tarantulas from 'Pages/Tarantulas';
import Scorpions from 'Pages/Scorpions';
import Accessories from 'Pages/Accessories';
import { Provider } from 'react-redux';
import store from 'Store/index';
import DetailsPage from 'Pages/DetailsPage';
import Basket from 'Pages/Basket/Basket';
import ScrollToTop from 'Services/ScrollIntoView';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const Root = () => (
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <MainTemplate>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/shop" component={Shop} />
            <Route
              exact
              path="/shop/reptiles"
              component={ReptilesCategory}
            />

            <Route
              exact
              path="/shop/reptiles/lizards"
              component={Lizards}
            />
            <Route
              path="/shop/reptiles/lizards/:id"
              component={DetailsPage}
            />

            <Route
              exact
              path="/shop/reptiles/snakes"
              component={Snakes}
            />
            <Route
              path="/shop/reptiles/snakes/:id"
              component={DetailsPage}
            />
            <Route
              exact
              path="/shop/arachnids"
              component={ArachnidsCategory}
            />
            <Route
              exact
              path="/shop/arachnids/tarantulas"
              component={Tarantulas}
            />
            <Route
              path="/shop/arachnids/tarantulas/:id"
              component={DetailsPage}
            />
            <Route
              exact
              path="/shop/arachnids/scorpions"
              component={Scorpions}
            />
            <Route
              path="/shop/arachnids/scorpions/:id"
              component={DetailsPage}
            />
            <Route
              exact
              path="/shop/accessories"
              component={Accessories}
            />
            <Route
              path="/shop/accessories/:id"
              component={DetailsPage}
            />
            <Route path="/basket" component={Basket} />
          </Switch>
        </MainTemplate>
      </ScrollToTop>
    </Router>
  </Provider>
);

export default Root;
