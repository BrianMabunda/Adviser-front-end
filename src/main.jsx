import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/token.css'; 
import './styles/theme-dark.css';
import './styles/theme-light.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
