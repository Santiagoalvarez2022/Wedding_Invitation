import React from 'react'
import style from "./styles/Invitation.module.css"
import Flowers from '../components/Flowers/Flowers'

export default function Invitation() {
  
  
  return (
    <div className={style.pageContainer}>
      <Flowers />
      <h3 className={style.title}>Matias y Soledad</h3>
      <div className={style.textContainer}>

      
      <p className={style.paragraph}>
        Queremos invitarlos a compartir con nosotros un día lleno de amor, alegría y promesas eternas
  
      </p>
      <br />
      <p className={style.paragraph}>
      Nos casaremos el 26/04/2024 en “lugar”, y nos encantaría que formen parte de este momento tan especial
      </p>
      <br />

      <p className={style.paragraph}>
      Vuestra presencia será el mayor regalo que podamos recibir, mientras damos inicio a esta nueva aventura juntos. Esperamos contar con ustedes para celebrar el amor que nos une.
      </p>

       


      </div>
        
    </div>
  )
}
