import React from 'react';
import Navigation from './components/Nav/nav'
import { BrowserRouter } from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';
import Routes from './components/Routes/routes';

import './app.scss';

function App() {
  return (
    <BrowserRouter>
      <Jumbotron fluid>
        <Container fluid>
          <div className="app">
            <Navigation/>
            <Routes/>
          </div>
        </Container>
      </Jumbotron>
    </BrowserRouter>

  );
}

export default App;
