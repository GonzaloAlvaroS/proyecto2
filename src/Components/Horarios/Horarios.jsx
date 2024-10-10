import React from 'react'
import "./Horarios.css"

const Horarios = () => {
  return (
  <div className='horarios'>
    <div className="horarios-text">
      <h1>---Horarios---</h1>
      <div className='horarios-text2'>
      <h3 className='horarios1'><b>LUNES - VIERNES:</b> 9AM - 10PM</h3>
      <h3 className='horarios2'><b>SABADO:</b> 9AM - 8PM</h3>
      <h3 className='horarios3'><b>DOMINGO:</b> CERRADO</h3>
    </div>
    </div>
  </div>
  )
}

export default Horarios