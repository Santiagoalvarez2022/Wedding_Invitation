import React,{useState} from 'react'
import { useParams } from 'react-router-dom'
import style from "./styles/Form.module.css"
import Flowers from '../components/Flowers/Flowers';
import ButtonNavegation from "../components/button_back/ButtonNavegation"

export default function Form(props) {
    const {giftid} = useParams()

    const [input,setInput ] = useState("")
    
    const handlerInput = ({target}) =>{
        console.log(target.value);
        setInput(target.value)        
    }

    const sendData = ( )=>{
        
    }

  return (
    <div className={style.pageContainer}>
        <ButtonNavegation  route={"/giftlist"} />

        <p className={style.header}>Vimos que elegiste un <br /> item de la lista.</p>

        <Flowers  />
        <p className={style.msg}>¡Gracias! por tu regalo! </p>
        <p className={style.giftSelected}>{giftid}</p>
        <p className={style.textForm}>Solo te pedimos que puedas escribir tu nombre para nosotros poder anotarlo.</p>
        
        <div className={style.container_form}>
          <input className={style.input} type="text" placeholder='Nombre y Apellido' value={input} onChange={handlerInput} />
          <div className={style.btn}> Enviar</div>
        </div>
        <div className={style.footer}></div>
    </div>
  )
}
