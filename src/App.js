import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import ProductDetail from "./components/Products/ProductDetail/ProductDetail";
import CartPage from "./components/Cart/CartPage";
import Category from "./components/Products/Category";
import Tech from "./components/Products/Tech";

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route index element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetail />}></Route>
        <Route path="/cart/" element={<CartPage />}></Route>
        <Route path="/clothes/" element={<Category />}></Route>
        <Route path="/tech/" element={<Tech />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    );
  }
}

export default App;
