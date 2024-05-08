import style from "./styles/MosaicPhotos.module.css"

export default function MosaicPhotos() {
  return (
    <div className={style.pageContainer}>
      <div className={style.img_one}>

      </div>

      <div className={style.boxTwo}>

        <div className={style.divOne}>
          <div className={style.img_two}></div> 
          <div className={style.img_three} ></div> 
        </div>

        <div className={style.img_four}>
        </div>
      </div>

    </div>
  )
}
