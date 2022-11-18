import React from 'react'
import './styles/Capsules.scss';

export default function Capsules(props) {
  let imageSrc = '';
  const img = (status) => {
    switch (status) {
      case 'retired':
        imageSrc = 'src/assets/rocketDeactivate.svg'
        break
      case 'active':
        imageSrc = 'src/assets/rocketActive.svg'
        break
      case 'destroyed':
        imageSrc = 'src/assets/rocketDeactivate.svg'
        break
      default:
        imageSrc = 'src/assets/rocketUnknown.svg'
    }
    return imageSrc;
  }

  return (
      <section className='capsules'>
        <h5 className='capsules__title'>
          {props.serial}
          <img src={img(props.status)} alt="status rocket" />
        </h5>
        <p className='capsules__description'>{props.description}</p>
      </section>
  )
}
