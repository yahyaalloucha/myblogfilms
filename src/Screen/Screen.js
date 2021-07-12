import style from "./Screen.module.css";
import React, { useEffect, useState } from "react";

import Client from "../Client";
import Vector from "./Vector 2.png";
import BlockContent from "@sanity/block-content-to-react";

function Screen() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    Client.fetch(
      `*[_type=='screen']  {  title,
        overview,
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
    <div className={style.bigcontainer}>
      {Data.map((screen) => {
        return (
          <div
            className={style.container}
            style={{ backgroundImage: `url(${screen.poster.asset.url})` }}
          >
            <div className={style.info}>
              <h1 className={style.h1}>{screen.title}</h1>
              <div className={style.Bl}>
                <BlockContent blocks={screen.overview} />
              </div>
              <div className={style.trading}>
                <img className={style.Vector} src={Vector} alt="" />
                <p className={style.rating}>{screen.rating}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Screen;
