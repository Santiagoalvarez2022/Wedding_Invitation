import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLemon} from '@fortawesome/free-solid-svg-icons'
import style from "./Loader.module.css"
export default function Loader() {
  return (
    <div className={style.loader_container}>
        <div className={style.loader}>
            <FontAwesomeIcon  icon={faLemon} beat/>
        </div>
    </div>
  )
}
