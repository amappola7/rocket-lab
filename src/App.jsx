import React from "react";
import { Header } from "./components/Header.jsx";
import { StatusCapsules } from "./components/StatusCapsules.jsx";
import Capsules from "./components/Capsules.jsx";
import { Footer } from "./components/Footer.jsx";
import './App.scss'

function App() {
  return (
    <>
      <h2>All Capsules:</h2>
      <Capsules />
    </>
  );
}

export default App;
