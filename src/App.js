import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import { Header } from "./components";
import {Home, Blog, Demos} from "./pages";
import "./css/global.css";

const App = () => {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/demos" component={Demos} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
