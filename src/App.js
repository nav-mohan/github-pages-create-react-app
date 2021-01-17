import React from 'react';
import profileImagePNG from "./img/Navaneeth.png";
import './App.css';

function App() {
  return (
    <div className = "App">
      <h1> My React App</h1>
      <h2> Author: Navaneeth Mohan</h2>
      <img src = {profileImagePNG} alt="profile-image"/>
    </div>
  );
}

export default App;
