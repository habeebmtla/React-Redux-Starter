import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import {store} from './stores'
import {Provider} from 'react-redux'


import '../public/scss/style.scss'
import '../public/scss/responsive.scss'


render(
    <Router>
      <Provider store={store} >
        <Route exact path="/" component={Home} />
      </Provider >
    </Router>
    ,
  document.getElementById("root")
);
