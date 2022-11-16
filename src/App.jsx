import React, { Fragment } from "react";
import { Header } from "./components/Header.jsx";
import { StatusCapsules } from "./components/StatusCapsules.jsx";
import Capsules from "./components/Capsules.jsx";
import { Footer } from "./components/Footer.jsx";
import './App.scss'
import './components/styles/_globals.scss';

function App() {
  return (
    <Fragment>
      <section className="status-capsules">
        <h2 className="subtitle status-capsules__title">Capsules status:</h2>
        <div className="status-capsules__container">
          <StatusCapsules className='status-capsules__capsule status-capsules__capsule--activate' text='Active' logo='src/assets/rocketActive.svg' />
          <StatusCapsules className='status-capsules__capsule status status-capsules__capsule--destroyed' text='Destroyed' logo='src/assets/rocketDeactivate.svg' />
          <StatusCapsules className='status-capsules__capsule status-capsules__capsule--unknown' text='Unknown' logo='src/assets/rocketUnknown.svg' />
        </div>
      </section>
      <h2>All Capsules:</h2>
      <Capsules />
      <Footer/>
    </Fragment>
  )
}

export default App;
