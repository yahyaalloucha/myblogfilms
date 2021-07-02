import style from "./Screen.module.css";
import j from "./1.jpg";
import Vector from "./Vector 2.png";

function Screen() {
  return (
    <div
      className={style.container}
      style={{ backgroundImage: "url(" + j + ")" }}
    >
      <img className={style.img} src={j} />
      <div className={style.info}>
        <h1 className={style.h1}>title</h1>
        <p>description</p>
        <div className={style.trading}>
          <img src={Vector} />
          <p>hey</p>
        </div>
      </div>
    </div>
  );
}
export default Screen;
