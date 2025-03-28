// import CSS
import 'bulma/css/bulma.css'

import React from 'react'
import { Tarjeta } from './Tarjeta'

import jinWoo from './imagenes/JinWoo.png'
import huTao from './imagenes/HuTao.png'
import Luffy from './imagenes/Luffy.png'

export function App() {
  return (
    <div>
        <div>Besto caracters segun 僕</div>
        <div className="container">
          <section className="section">
            <div className="columns">
              <div className="column is-2">
                <Tarjeta nombre="Sung Jin-woo" color="negro" imagen={jinWoo}/>
              </div>
              <div className="column is-2">
                <Tarjeta nombre="HuTao" color="rojo" imagen={huTao}/>
              </div>
              <div className="column is-2">
                <Tarjeta nombre="Luffy" color="paja" imagen={Luffy}/>
              </div>
            </div>
          </section>
        </div>
    </div>
  
  )
}