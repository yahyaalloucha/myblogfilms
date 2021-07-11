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
              <span>
                <img src={trendtv.poster.asset.url} className={style.poster} />
              </span>
              <p
                key={trendtv.title}
                style={{
                  color: "white",
                }}
              >
                {trendtv.title}
              </p>
              <p style={{ color: "white" }}>
                {trendtv.releaseDate.substr(0, 4)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TrendingTvs;
