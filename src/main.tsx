import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { HashRouter as Router } from 'react-router-dom';
import './main.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);
