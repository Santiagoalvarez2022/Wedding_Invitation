
import style from "./styles/Home.module.css"
import couple_img from "../assets/couple.svg"
import title_img from "../assets/title.svg"

export default function Home() {
  return (
    <div className={style.pageContainer}>
      <img className={style.img_couple} src={couple_img} alt="" />
      <img className={style.img_title} src={title_img} alt="" />

    </div>
  )
}
