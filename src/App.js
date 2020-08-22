import React from 'react';
import Navigation from './components/Nav/nav';
import FooterInfo from './components/footer/footer'
import { BrowserRouter } from 'react-router-dom';
import Routes from './components/Routes/routes';

import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation/>
        <Routes/>
        <FooterInfo/>
      </div>
    </BrowserRouter>

  );
}

export default App;
