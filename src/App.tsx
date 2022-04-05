import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavigationBar from "./Navbar/NavigationBar";
import Views from "./views/Views";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <BrowserRouter>
        <NavigationBar />
        <Views />
      </BrowserRouter>
  );
}

export default App;
