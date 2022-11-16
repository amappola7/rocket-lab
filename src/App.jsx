import React, { Fragment } from "react";
import { Header } from './components/Header.jsx';
import { StatusCapsules } from './components/StatusCapsules.jsx';
import { Capsules } from './components/Capsules.jsx';
import { Footer } from './components/Footer.jsx';

function App() {
  <Fragment>
    <section className="status-capsules">
      <h2 className="status-capsules__title">Capsules Status</h2>
      <StatusCapsules className='status-capsules__activate' text='Active' logo='./assets/rocketActive.svg' />
      <StatusCapsules className='status-capsules__destroyed' text='Destroyed' logo='./assets/rocketDeactivate.svg' />
      <StatusCapsules className='status-capsules__unknown' text='Unknown' logo='./assets/rocketUnknown.svg' />
    </section>
    <Footer/>
  </Fragment>
}

export default App;