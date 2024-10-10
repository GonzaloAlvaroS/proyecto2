import React from 'react'
import "./Partebaja.css"
import logo2 from "../../assets/logo2.png"
import logoinstagram from "../../assets/logoinstagram.png"
import logofacebook from "../../assets/logofacebook.png"
import logoyoutube from "../../assets/logoyoutube.png"




const Partebaja = () => {
  const handleButtonClick = () => {
    window.open('https://www.instagram.com/cocacola/', '_blank');
};
  return (
  <div className='partebajatodo'>
   <div className='partebaja'>
    <div className="partebajalogo">
     <img src={logo2} alt=""/>
     <p>#BurgersBestInTown</p>
     </div>
     <div className='partebajabotones'>
     <button onClick={handleButtonClick} className='btnredes'><img src={logoinstagram} alt="" /></button>
     <button onClick={handleButtonClick} className='btnredes'><img src={logofacebook} alt="" /></button>
     <button onClick={handleButtonClick} className='btnredes'><img src={logoyoutube} alt="" /></button>
     </div>
  </div>
  <div className='partebaja2'>
  <div className="partebajainfo">
    <p>AVENIDA AREQUIPA 1234, OFICINA 567, LIMA 18, PERÚ</p>
    <p><b>•</b></p>
    <p>942050221</p>
  </div>
  <div className="partebajainfo2">
    <h3>MENU</h3>
    <h3>HAMBURGUESAS</h3>
    <h3>PROMOCIONES</h3>
    <h3>CONTRATANDO</h3>
  </div>
  <div className="partebajainfo3">
    <p>@ 2024 BurgersBestInTown</p>
    <p><b>•</b></p>
    <p>All rights reserved.</p>
    <p><b>•</b></p>
    <p>Terminos de servicio</p>
  </div>


  </div>
  </div>
  )
}

export default Partebaja


