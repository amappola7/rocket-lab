import React from "react";

function StatusCapsules(props) {
  return (
    <div className="status-capsules">
      <h2 className="status-capsules__title">{props.text}</h2>
      <img className="status-capsules__logo" src={props.logo} alt='logo'/>
    </div>
  )
}

export { StatusCapsules };