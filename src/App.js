import React from 'react';
import NavBar from './components/navbar/navbar.component';
import Header from './components/header/header.component';
import CardList from './components/card-list/card-list.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Header/>
      <CardList/>
    </div>
  );
}

export default App;
