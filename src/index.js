import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<<<<<<< HEAD
=======
import { StaffContextProvider } from './Context/StaffContext';
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
      <StaffContextProvider>
            <App />
      </StaffContextProvider>
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
  </React.StrictMode>
);