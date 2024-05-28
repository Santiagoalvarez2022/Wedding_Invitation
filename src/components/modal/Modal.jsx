import React, { useState } from 'react'
import style from "./Modal.module.css"
import blper_a from "../../assets/bloopers/Blooper1.jpg"
import blper_b from "../../assets/bloopers/Blooper2.jpg"
import blper_c from "../../assets/bloopers/Blooper3.jpg"
import blper_d from "../../assets/bloopers/Blooper4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faXmark,faAngleRight,faAngleLeft,faLemon} from '@fortawesome/free-solid-svg-icons'



export default function Modal({isOpen, closeModal,loading}) {
    const arr_bloopers = [blper_c,blper_a,blper_b,blper_d]
    const [index,setIndex] = useState(0)
    
    // const [img,setImg] = useState(arr_bloopers[index])
    
    const handlerNext = () =>{
        setIndex(index+1)
    }
    const handlerBack = () =>{
        setIndex(index-1)
    }

    
    //<FontAwesomeIcon icon={faLemon} spin />

    

    const bloopers = {
        backgroundImage :`url(${arr_bloopers[index]})`
    }

    if (!isOpen) {
        return null
    } else {
      
        return (
            <div className={style.modal_container}>
               
                
              { loading 
              ?  <div className={style.modal_loading}> 
                    <FontAwesomeIcon icon={faLemon}  beat />
                    <p className={style.p_loading}>
                    cargando...

                    </p>
                </div>



              : <div className={style.modal}>  <div className={style.container_btn}>
                    
                <button  className={style.btn_close} onClick={()=>closeModal()}><FontAwesomeIcon icon={faXmark} /></button> 
                </div>
                <h2 className={style.confirmed}>¡Confirmación enviada!</h2>
                <p className={style.subtitle}>¡Nos vemos pronto! te dejamos algunas fotitos</p>

                <div style={bloopers} className={style.img}></div>

                <div className={style.container_btn_pages}>

                <button disabled={index === 0 && true}  className={style.btn} onClick={()=>handlerBack()}><FontAwesomeIcon icon={faAngleLeft} /></button>
                
                <button disabled={index === 3 && true}   className={style.btn} onClick={()=>handlerNext()} ><FontAwesomeIcon icon={faAngleRight} /></button> 


                </div>      </div>
                
           
                 }
        
                </div>
          
        )
    }
}
