import React from 'react'
import "./Contratando.css"
import contratando from "../../assets/contratando.png"

const Contratando = () => {

  return (
    <div className='contratando'>
      <div className="contratando-left">
      <h3>Contratando</h3>
        <h2>¡Estamos buscando personal!</h2>
        <p>SR Psychological Services is a group of caring and compassionate psychologists and psychotherapists located in midtown Manhattan. We have experience working in various clinical settings, with different patient populations and treating a wide range of psychological conditions
        </p>
        <button className='btncuadrado btn'>Ver mas información</button>
      </div>
      <div className="contratando-right">
        <img src={contratando} alt="" className='imagen1'/>
      </div>
    </div>
  )
}

export default Contratando