import Client from "../Client";
import React, { useEffect, useState } from "react";
import style from "./TrendingTvs.module.css";

function TrendingTvs() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    Client.fetch(
      `*[_type=='trendtv'] {  title,
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
    <div className={style.container}>
      <div>
        <h1>Trending TVs </h1>
      </div>
      <div className={style.movies}>
        {Data.map((trendtv) => {
          return (
            <div className={style.contents}>
              <div className={style.content}>
                <span>
                  <img
                    src={trendtv.poster.asset.url}
                    className={style.poster}
                  />
                </span>
                <p key={trendtv.title} className={style.tit}>
                  {trendtv.title}
                </p>
                <p className={style.d}>{trendtv.releaseDate.substr(0, 4)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={style.lastdiv}>
        <footer className={style.footer}>
          <h2 className={style.footerp}>Vilm © 2021</h2>
          <p className={style.p}>
            powered by{" "}
            <span className={style.biggy} atl="">
              <a>tmdb</a>
            </span>
          </p>
        </footer>
      </div>
    </div>
  );
}
export default TrendingTvs;
