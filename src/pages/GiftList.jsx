import React from 'react'
import ButtonNavegation from '../components/button_back/ButtonNavegation'
import style from "./styles/GiftList.module.css"
import List from '../components/WishList/List'
import Flowers from '../components/Flowers/Flowers'

export default function GiftList() {
  return (
    <div className={style.containerPage}>
      <ButtonNavegation route={"/"} />
      <p className={style.text}>Si lo deseas puedes elegir un item de la lista</p>
      <List />
      <div className={style.containerFlower}>

        <Flowers />
      </div>
    </div>
  )
}
