import React from 'react'
import './App.css';
import Header from './components/header/Header';
import SwipeButtons from './components/swipedbuttons/SwipeButtons';
import TinderCards from './components/tindercards/TinderCards';

function App() {
  return (

    //BEM class naming
    <div className="app">
      {/* Header */}
      <Header />
      <TinderCards />
      {/* TinderCards */}
      <SwipeButtons />
    </div>
  );
}

export default App;
