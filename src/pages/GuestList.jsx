import ButtonNavegation from "../components/button_back/ButtonNavegation";
import style from "./styles/GuestList.module.css"
import {confirm_guest,get_guest} from "../service/apiGuest"
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLemon} from '@fortawesome/free-solid-svg-icons'















export default function GuestList() {

  // lista de nombre traidos desde google sheets
  const [Guest,setGuets] = useState([])
  // estado del input
  const [data,setData] = useState("")
  // lista de nombres para mostrar en la lista
  const [options,setOptions] = useState([])
  // estado que evalua si hay un nombre en la option 
  const [showOptions,setShhowOptions] = useState(false)
  // invitado seleccionado
  const [selectedGuests, setSelectedGuests] = useState({})

  useEffect(()=>{
    //obtengo la lista de invitados 
    get_guest(setGuets)
  },[])

  const handlerData = ({target}) =>{
    //filtro entre los invitados de acuerdo con el valor del input 
    const {value} = target;
    setData(value);

    if(value){
      //filtrar array de los inv
      let list_options = Guest.filter((guest)=> guest.Invitado.toLocaleLowerCase().includes(value.toLocaleLowerCase()) )
      setOptions(list_options)
      //mostrar options
      setShhowOptions(true)
    }
    else setShhowOptions(false)
    
   
  }

  const handlerSelect = (option) =>{
    //si hago click en un nombre de la lista lo coloco como valor del inputS
    setData(option.Invitado)
    setSelectedGuests(option)
    setShhowOptions(false)
  }


  const sendData = async(data) =>{
    //no enviar nombre sin antes verificar que el nombre este en la lista, y que sea selecionado de las options
    try {
      const result = await confirm_guest(data.id)
      console.log("resultado del envio",result);

      if (result.status === 200){
        alert(`invitacion confirmada`)
      }

    } catch (error) {
      
    }

    //CONFIRMAR 
    //DEVOLVER ALERT DICIENDO QUE SE CONFIRMO 
    
    
    setSelectedGuests({})
    setData("")
  } 
  
  const route = "/";
  
  return (
    <div className={style.containerPageInv}>

        <ButtonNavegation route={route} />
        <div className={style.header}></div>

        <div className={style.containerList}>
            <input  className={style.input} value={data} onChange={handlerData} type="text" placeholder="Nombre y Apellido" />

            <ul className={style.list}>
              {
                showOptions && options.length>0 && (options.map((option,index)=>{
                  return <li
                    className={style.item}
                    key={index}
                    onClick={e => handlerSelect(option)}
                  >
                    <FontAwesomeIcon icon={faLemon} color="#FFF23D" />
                    {option.Invitado} 
                  </li>
                })) 
              }
            </ul>
        </div>
        
        {
          selectedGuests.Invitado ? 
          
          <div className={style.btn}
          onClick={e=>sendData(selectedGuests)}
          > Enviar</div>
          : null
        }
    </div>
  )
}
