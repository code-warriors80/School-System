import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StaffContextProvider } from './Context/StaffContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StaffContextProvider>
            <App />
      </StaffContextProvider>
  </React.StrictMode>
);