import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, Blog, Demos } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./css/global.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/demos" component={Demos} />
    </Switch>
    <ToastContainer />
  </BrowserRouter>
);

export default App;
