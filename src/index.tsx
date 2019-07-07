import React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/css/materialize.min.css';

import App from './components/app/App';
import ReduxRoot from './components/common/redux/reduxRoot';

ReactDOM.render(
  <ReduxRoot initialState={{}}>
    <App />
  </ReduxRoot>,
  document.querySelector('#root'),
);
