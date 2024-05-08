import React from 'react'
import style from "./styles/Invitation.module.css"
import Flowers from '../components/Flowers/Flowers'

export default function Invitation() {
  
  
  return (
    <div className={style.pageContainer}>
      <h3 className={style.title}>M y A</h3>
      
      <div className={style.content_data}>
        <h4 className={style.title_data}>Civil</h4>
        <p className={style.text_data}>- Viernes 16 de Agosto </p> 
        <p className={style.text_data}>- Lugar y fecha a confirmar</p>
      </div>

      <div className={style.content_data}>
        <h4 className={style.title_data} >Fiesta</h4>
        <p className={style.text_data}>- Viernes 16 de Agosto </p> 
        <p className={style.text_data}>- Dress code “Elegante-sport” </p> 
      </div>



    </div>
  )
}
