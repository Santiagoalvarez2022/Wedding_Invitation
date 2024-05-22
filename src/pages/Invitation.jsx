import React, { useState } from 'react'
import style from "./styles/Invitation.module.css"
import Flowers from '../components/Flowers/Flowers'
import ButtonNavegation from '../components/button_back/ButtonNavegation';
import { Link } from 'react-router-dom';



export default function Invitation() {
  
  const [showInput,setShowInput] = useState(true);
  const handlerInput = () =>{
    setShowInput(!showInput);
  } 

  return (
    <div className={style.pageContainer}>
      <h3 className={style.title}>M y A</h3>
      
      <div className={style.content_data}>
        <h4 className={style.title_data}>Civil</h4>
        <p className={style.text_data}>- Viernes 16 de Agosto </p>
        <p className={style.text_data}>- Lugar y horario a confirmar</p>

      </div>
      <div className={style.space}></div>
      <div className={style.content_data}>
        <h4 className={style.title_data} >Fiesta</h4>
      
          <p className={style.text_data}>- Viernes 16 de Agosto </p> 
          <p className={style.text_data}>- Horario: 18hs a 23hs</p>
          <p className={style.text_data}>- Lugar: "Amelie Eventos" Bv. 27 de febrero 2515</p> 
          <p className={style.text_data}>- Dress code “Formal”</p> 
      
      </div>

      {showInput && 
      <div className={style.button_container} >
        <Link className={style.button_invitation} to="/invitados">
        </Link>
      </div>
      }




    </div>
  )
}
