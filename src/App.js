import React from 'react';
import { GlobalStyle } from './GlobalStyle';

//Components
import Header from "./Components/Header";
import Home from './Components/Home';

const App = () => {
  return (
    <div className="App">
      
      <Header />
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
