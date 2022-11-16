import React from "react";

function StatusCapsules(props) {
  return (
    <div className="status-capsules">
      <h3 className="status-capsules__title">{props.text}</h3>
      <img className="status-capsules__logo" src={props.logo} alt='logo'/>
    </div>
  )
}

export { StatusCapsules };