import "./Promos.css"
import next_icon from "../../assets/next_icon.png"
import back_icon from "../../assets/back_icon.png"
import promo1 from "../../assets/promo1.png"
import promo2 from "../../assets/promo2.png"
import promo3 from "../../assets/promo3.png"
import promo4 from "../../assets/promo4.png"
import { useRef } from "react"


const Promos = () => {

  const slider = useRef();
  let tx = 0;

const slideForward = ()=>{
     if(tx > -1){
      tx -= 16;
     }
     slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
  if(tx < -1){
    tx += 16;
   }
   slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='promos'>
        <div className='titulos'>
            <p>Promociones</p>
        </div>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="promos-info">
                <img src={promo1} alt="" className="promosimagen"/>         
                 <h3>Promociones Web</h3>
                 <button className='btnpromo1 btnpromo btn'>Ver</button>
              </div>
            </div>
           </li> 
          <li>
            <div className="slide">
              <div className="promos-info">
              <img src={promo2} alt="" className="promosimagen"/> 
                 <h3>Combos para 1</h3>
                 <button className='btnpromo1 btnpromo btn'>Ver</button>
              </div>
            </div>
           </li>
          <li>
            <div className="slide">
              <div className="promos-info">
              <img src={promo3} alt="" className="promosimagen"/> 
                  <h3>Combos para 2</h3>
                  <button className='btnpromo1 btnpromo btn'>Ver</button>
              </div>
             </div>
           </li>
          <li>
            <div className="slide">
              <div className="promos-info">
              <img src={promo4} alt="" className="promosimagen" /> 
                 <h3>Combos Familiares</h3>
                 <button className='btnpromo1 btnpromo btn'>Ver</button>
              </div>
            </div>
           </li>
        </ul>
      </div>
    </div>
  )
}

export default Promos
