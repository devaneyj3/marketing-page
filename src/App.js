import React from 'react';
import Navigation from './components/Nav/nav'
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes/routes';

import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation/>
        <Routes/>
      </div>
    </BrowserRouter>

  );
}

export default App;
