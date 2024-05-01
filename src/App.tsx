import React from 'react';
import './App.css';
import Header from "./components/header/header";
import MenuList from "./components/menu-list/menu-list";
import Filters from "./components/filters/filters";

function App() {
  return (
      <>
        <Header />
          <div className="app-content">
              <MenuList />
          </div>
      </>
  );
}

export default App;
