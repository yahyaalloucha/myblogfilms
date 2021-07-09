import style from "./Screen.module.css";
import React, { useEffect, useState } from "react";
import j from "./1.jpg";
import Client from "../Client";
import Vector from "./Vector 2.png";

function Screen() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    Client.fetch(
      `*[_type==''] {  title,
        releaseDate,
        rating,
        
      slug,
      poster{asset->{url}}
      }`
    )
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch(console.error);
  }, []);
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
