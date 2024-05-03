import style from "./List.module.css"
import  { Link } from "react-router-dom"
import { gifts } from "./gifts_list"


export function Item({name}){

    return(
        <Link className={style.itemContainer} to={`/gift/${name}`} >

            <div> . {name}</div>
        </Link>
    )

}



export default function List() {
  return (
    <div className={style.containerList}>
        {
            !gifts.length ? null 
            : gifts.map((item, index)=>{
                return <Item key={index} name={item.name}/>
            })
        }
    </div>
  )
}
