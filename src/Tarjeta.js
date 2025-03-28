import React from 'react'

export function Tarjeta(props) {
  return (
    <div className="card">
        <div className="card-image">
          <figure className="image is-1by1">
            <img src={props.imagen} alt="pda logo" />
          </figure>
        </div>
  
        <div className="card-content">
          <div className="media-content">
            <p className="title is-4">{props.nombre}</p>
            <p className="subtitle is-6">{props.color} es mi color</p>
          </div>
        </div>
      </div>
  )
}
