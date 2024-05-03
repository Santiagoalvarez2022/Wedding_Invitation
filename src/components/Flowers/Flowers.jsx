import style from "./Flowers.module.css"
import flower from "../../assets/flowers.png"
export default function Flowers() {
  const styles = {
         
    backgroundImage: `url(${flower})`
  };
  
  return (
    <div className={style.container} style={styles}></div>
  );
}  