import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, ProjectProvider, AuthProvider, FavoritesProvider } from './contexts';
import App from './App.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './styles/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <BrowserRouter>
      <ThemeProvider>
        <ProjectProvider>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </ProjectProvider>
      </ThemeProvider>
    </BrowserRouter>
  </AuthProvider>
  // </React.StrictMode>
);
