import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import EngineManager from './EngineManager.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EngineManager />
  </React.StrictMode>
);
