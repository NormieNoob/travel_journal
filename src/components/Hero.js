import React from 'react'
import Pin from '../images/Pin.png'

function Hero(props) {
  return (
    <div className='outter-div'>
      <div className='card'>
        <div className='img-section'>
          <img src={props.imageUrl} alt='Image of the place' />
        </div>
        <div className='content-section'>
          <span>
            <img src={Pin} alt='' />
            <h4>{props.location}</h4>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </span>
          <h1>{props.title}</h1>
          <p className='date'>
            {props.startDate} - {props.endDate}
          </p>
          <p className='desc'>{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Hero
