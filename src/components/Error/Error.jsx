import style from "./Error.module.css"

export default function Error({error}) {

  return (
    <div className={style.container}>
        ups! Ocurrio un Error. <br />
    Por favor contactate con Alejo y Malena
    </div>
  )
}
