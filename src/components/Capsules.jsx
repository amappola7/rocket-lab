import React from 'react'
import './styles/Capsules.scss';

export default function Capsules() {
  return (
      <section className='capsules'>
        <p className='capsules__title'>C#
          <img src="src/assets/rocketActive.svg" alt="status rocket" />
        </p>
        <p className='capsules__description'>Description rocket and history</p>
      </section>
  )
}
