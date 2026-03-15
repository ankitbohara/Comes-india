import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './store/AppContext';
import AppRouter from './routes/AppRouter';
import './assets/global.css';

const App: React.FC = () => (
  <BrowserRouter>
    <AppProvider>
      <AppRouter />
    </AppProvider>
  </BrowserRouter>
);

export default App;
