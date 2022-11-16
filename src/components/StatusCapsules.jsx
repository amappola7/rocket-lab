import React from "react";
import './styles/StatusCapsules.scss'

function StatusCapsules(props) {
  return (
    <div className={props.className}>
      <h3 className="status-capsules__title">{props.text}</h3>
      <img className="status-capsules__logo" src={props.logo} alt='logo'/>
    </div>
  )
}


export { StatusCapsules };