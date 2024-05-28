import style from "./List.module.css"
import  { Link } from "react-router-dom"
import { gifts } from "./gifts_list"
import { get_gifts } from "../../service/apiGift"
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLemon } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom";

export function Item({name,id}){

    return(
        <p className={style.itemContainer}  >
            . {name} 
        </p>
    )

}



export default function List() {
    const [giftList,setGift] = useState([]);
    let navigate = useNavigate();


    useEffect(()=>{
        try {
            get_gifts(setGift,navigate)
            
        } catch (error) {
            console.log("holaaaaa");
                 
        }
    },[])


    if (!giftList.length) {
       return <div className={style.loader}>
           <FontAwesomeIcon icon={faLemon} spin/>

       </div>
    }
  return (
    <div className={style.containerList}>    
        {
            giftList.map((item, index)=>{
                return <Item key={index} name={item.nombre} id={item.Id}/>
        })}
    </div>
  )
}
