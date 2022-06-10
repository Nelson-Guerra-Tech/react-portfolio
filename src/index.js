import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

// importing css
import './index.css';

// importing components
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
