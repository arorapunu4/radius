/*
 src/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from  "./pages/Dashboard/Dashboard"
import Dashboard2 from  "./pages/Dashboard2/Dashboard2"
import HeaderMain from "./commonComponents/headermain/Header";
import Footer from "./commonComponents/footermain/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
 <Provider store={configureStore()}>
   <Router basename={process.env.PUBLIC_URL||'/'}>
        <div>
          <HeaderMain />
          <Switch>
          <Route  path={`${process.env.PUBLIC_URL}/page2`} component={Dashboard2} />
            <Route path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
          
          </Switch>
          <Footer />
        </div>
      </Router>
 </Provider>,
 document.getElementById('root')
);
registerServiceWorker();