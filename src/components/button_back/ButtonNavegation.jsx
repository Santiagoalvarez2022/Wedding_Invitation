import { Link } from "react-router-dom"
import style from "./ButtonNavegation.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons'

export default function ButtonNavegation({route}) {
  return (
    <div className={style.nav}>
        <Link to={route}>
            <FontAwesomeIcon className={style.button} icon={faCircleArrowLeft} />
        </Link>
    </div>
  )
}
