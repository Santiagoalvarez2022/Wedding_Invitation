import { Link } from "react-router-dom";
import style from "./Button.module.css"
import PropTypes from 'prop-types';


export default function Button({text,link}) {
  return (
    <Link to={link} className={style.btn}>{text}</Link>
  )
}


Button.prototype = {
    text : PropTypes.string 
}