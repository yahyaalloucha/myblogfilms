import style from "./Search.module.css";
import Vector from "./Vector.png";

function Search() {
  return (
    <div className={style.Container}>
      <div className={style.vilm}>
        <h1 className={style.h1}>VILM</h1>
      </div>
      <span className={style.input}>
        <input type="text" required className={style.input1} />

        <img src={Vector}></img>
      </span>
    </div>
  );
}
export default Search;
