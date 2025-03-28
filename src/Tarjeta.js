import React from 'react'

export function Tarjeta(props) {
  return (
    <div>
      <div>Nombre del personaje: {props.nombre}</div>
      <div>Color del personaje: {props.color}</div>
      <img src = {props.imagen} width = {150}/>
    </div>
  )
}
