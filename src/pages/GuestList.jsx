import ButtonNavegation from "../components/button_back/ButtonNavegation";
import style from "./styles/GuestList.module.css"

export default function GuestList() {

    const route = "/";

  return (
    <div className={style.containerPageInv}>

        <ButtonNavegation route={route} />


        <div className={style.header}>
            
        </div>

        <div className={style.containerList}>
            <input  className={style.input}  type="text" placeholder="Nombre y Apellido" />
            <select className={style.select}  name="Lista de invitados" id="">
                <option  className={style.option}   value="">Santiago Alvarez</option>
                <option  className={style.option}   value="">Pablo Ullua</option>
                <option  className={style.option}   value="">Leo Ibañez</option>
                <option  className={style.option}   value="">Elias Sosa</option>
                <option  className={style.option}   value="">Lucas Ullua</option>

            </select>
        </div>
            <div className={style.btn}> Enviar</div>
    </div>
  )
}
