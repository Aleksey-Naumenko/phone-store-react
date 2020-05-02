import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Cart from "./components/cart";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Default from "./components/Default";
import Modal from "./components/Modal";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/cart" component={Cart} />
        <Route path="/details" component={Details} />
        <Route path="*" component={Default} />
      </Switch>
      <Modal />
      </>
    );
  }
}

export default App;
