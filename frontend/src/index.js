import "babel-polyfill";
import "react-app-polyfill/ie11";
import React from 'react';
import MainContainer from './MainContent';
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
