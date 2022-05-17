import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Routes } from 'react-router-dom';
import App from './App';
import "./scss/main.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
