import React from 'react'
import './styles/Capsules.scss';

export default function Capsules(props) {
  return (
      <section className='capsules'>
        <h5 className='capsules__title'>
          {props.serial}
          <img src="src/assets/rocketActive.svg" alt="status rocket" />
        </h5>
        <p className='capsules__description'>{props.details}</p>
      </section>
  )
}
