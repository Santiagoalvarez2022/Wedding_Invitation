import style from "./styles/MosaicPhotos.module.css"

export default function MosaicPhotos() {
  return (
    <div className={style.pageContainer}>
      <div className={style.boxOne}>

      </div>
      <h2 className={style.phrase}>“Hoy, mañana y siempre.”</h2>
      <div className={style.boxTwo}>

        <div className={style.divOne}>
          <div className={style.imgOne} ></div> 
          <div className={style.imgTwo} ></div> 
        </div>
        <div className={style.divTwo}></div>
      </div>
    </div>
  )
}
