import React from 'react';
import Routes from './routes.js';

import './global.css'
import Header from './Components/Header'

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
