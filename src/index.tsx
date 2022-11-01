import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import LazyLoading from './pages/LazyLoading';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LazyLoading/>
  </React.StrictMode>
);

