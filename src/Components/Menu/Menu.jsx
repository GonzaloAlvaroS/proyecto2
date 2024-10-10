import React from 'react'
import "./Menu.css"
import hamroyal from "../../assets/hamroyal.png"

const Menu = () => {

  return (
    <div className='menu'>
      <div className="menu-left">
        <h2>Lo mas popular del momento</h2>
        <p>Hamburguesa Royal (Hamburguesa de Carne, Queso, Huevo) + Papas + Bebida: <b>S/. 19.90</b></p>
        <p>Salchipapa Especial (Hot-Dog, Pollo desilachado, Huevo) + Bebida + Ensalada: <b>S/. 24.90</b></p>
        <p>Sánguche Clasico (Pollo desilachado, Lechuga, Tomate) + Papas: <b>S/. 17.00</b></p>
        <button className='botonmenu btn btncuadrado'>Ver menu completo</button>
      </div>
      <div className="menu-right">
        <img src={hamroyal} alt="" className='imagen'/>
      </div>
    </div>
  )
}

export default Menu
