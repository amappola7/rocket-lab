import React from 'react'
import './styles/Capsules.scss';

function Capsules() {
  return (
      <section className='capsules'>
        <h5 className='capsules__title'>C#
          <img src="src/assets/rocketActive.svg" alt="status rocket" />
        </h5>
        <p className='capsules__description'>Description rocket and history</p>
      </section>
  )
}

export default Capsules