import React from "react";
import './styles/Header.scss'

function Header() {
  return (
    <header>
      <img src="src/assets/rocket.svg" alt="Logo" />
      <h1>ROCKET</h1>
      <h2>IMPROVING ALL THE TIME</h2>
      <a href="#capsule" class="btn btn-white btn-animate">START</a>
    </header>
  )
}

export { Header };