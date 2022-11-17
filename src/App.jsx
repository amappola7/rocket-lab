import React, { Fragment, useState , useEffect } from "react";
import { Header } from "./components/Header.jsx";
import { StatusCapsules } from "./components/StatusCapsules.jsx";
import Capsules from "./components/Capsules.jsx";
import { Footer } from "./components/Footer.jsx";
import "./App.scss";
import "./components/styles/_globals.scss";
import axios from "axios";

function App() {
  // const [capsules, setCapsules] = useState([]);

  //   useEffect( () => {
  //     async function getDataApi() {
  //       try {
  //         const response = await axios.get('https://api.spacexdata.com/v3/capsules')
  //         const data = response.data.map((capsule) => {
  //           <Capsules serial={capsule.capsule_serial} details={capsule.details} status={capsule.status}/>
  //         })
  //       } catch (error) {
  //         console.log('ERROR API', error);
  //       }
  //     }
  //       getDataApi();
  // }, []);

    async function getDataApi() {
      try {
        const response = await axios.get('https://api.spacexdata.com/v3/capsules')
        const data = response.data.map((capsule) => {
          <Capsules serial={capsule.capsule_serial} details={capsule.details} status={capsule.status}/>
        })
      } catch (error) {
        console.log('ERROR API', error);
      }
    }

    getDataApi();
  // console.log('VALUES', Object.entries(capsules));

  return (
    <Fragment>
      <section className="status-capsules">
        <h2 className="subtitle status-capsules__title">Capsules status:</h2>
        <div className="status-capsules__container">
          <StatusCapsules
            className="status-capsules__capsule status-capsules__capsule--activate"
            text="Active"
            logo="src/assets/rocketActive.svg"
          />
          <StatusCapsules
            className="status-capsules__capsule status status-capsules__capsule--destroyed"
            text="Destroyed"
            logo="src/assets/rocketDeactivate.svg"
          />
          <StatusCapsules
            className="status-capsules__capsule status-capsules__capsule--unknown"
            text="Unknown"
            logo="src/assets/rocketUnknown.svg"
          />
        </div>
      </section>
      <section className="capsule">
        <h2 className="subtitle capsule__title">All Capsules:</h2>
        <div className="capsule__container">
          {/* {getDataApi()} */}
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default App;
