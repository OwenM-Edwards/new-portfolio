import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import SimpleReactLightbox from 'simple-react-lightbox'

ReactDOM.render(
  <Router>
    <SimpleReactLightbox>
      <App />
    </SimpleReactLightbox>
  </Router>,
  document.getElementById("root")
);