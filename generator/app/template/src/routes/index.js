import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import App from './../demo/index';
import Form from './../demo/form';

/**
 * 路由模块
 */

const indexRoute =
  (<Router history={hashHistory}>
      <Route path="/app" component={App} />
      <Route path="/form" component={Form} />
  </Router>);

export default indexRoute;
