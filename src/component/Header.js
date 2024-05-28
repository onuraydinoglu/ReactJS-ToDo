import React from "react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <h1 className="Header">TO-DO NOW</h1>
      <div className="Header-icon">
        <FontAwesomeIcon icon={faPenToSquare} />
      </div>
    </header>
  );
}

export default Header;
