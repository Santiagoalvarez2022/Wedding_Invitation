import Flowers from "../components/Flowers/Flowers"
import List from "../components/WishList/List"
import Button from "../components/button/Button"
import style from "./styles/Gift.module.css"

export default function Gift() {
  return (
    <div className={style.pageContainer}>
        <h3 className={style.title}>Lista de deseos</h3>
        <h4 className={style.subtitle}>“Juntos, en cada regalo, <br /> contruimos nuestro futuro”</h4>
        <div className={style.container_btn}>

        <Button link="/giftlist" text="Ver Regalos"/>
        </div>
    </div>
  )
}
