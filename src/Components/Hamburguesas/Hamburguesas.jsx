import React from 'react'
import "./Hamburguesas.css"
import hamclasica from "../../assets/hamclasica.png"
import hamroyal2 from "../../assets/hamroyal2.png"
import hamparrillera from "../../assets/hamparrillera.png"

const Hamburguesas = () => {
  return (
    <div className='hamburguesas'>
        <div className='titulos'>
          <p>Hamburguesas</p>
        </div>
          <div className="gallery">
            <div className='hamburguesas1'>
              <img src={hamclasica} alt="" />
              <div className='hamburguesas1texto'>
               <p>Clasica</p>
              </div>
            </div>
            <div className='hamburguesas1'>
              <img src={hamroyal2} alt="" />
              <div className='hamburguesas1texto'>
               <p>Royal</p>
              </div>
            </div>
            <div className='hamburguesas1'>
              <img src={hamparrillera} alt="" />
              <div className='hamburguesas1texto'>
               <p>Parrillera</p>
              </div>
            </div>
          </div>
      <button className='btnham btn btncuadrado'>Ver todas</button>
    </div>
  )
}

export default Hamburguesas
