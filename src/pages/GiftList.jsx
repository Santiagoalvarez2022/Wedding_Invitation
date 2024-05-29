import React from 'react'
import ButtonNavegation from '../components/button_back/ButtonNavegation'
import style from "./styles/GiftList.module.css"
import List from '../components/WishList/List'
import Flowers from '../components/Flowers/Flowers'

export default function GiftList() {
  
  return (
    <div className={style.containerPage}>
      <ButtonNavegation route={"/"} />
      <p className={style.text}>Esta es nuestra lista de deseos 
      <br />
      <br />
      
      Si deseas puedes seleccionar uno de la lista y enviarnos un mensaje para nosotros saberlo
      <br />
      <br />

      ¡Si tenes alguna duda consultanos!</p>
      <List />
      <p className={style.alias}>Alias: Boda.MyA.</p>
      <div className={style.containerFlower}>

        <Flowers />
      </div>

    </div>
  )
}
// 