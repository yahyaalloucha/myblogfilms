import Client from "../Client";
import React, { useEffect, useState } from "react";
import style from "./Result.module.css";
import { Link, useParams } from "react-router-dom";

function Result() {
  const { slug } = useParams();
  const [Data, setData] = useState([]);
  console.log("ggf");
  console.log(slug);
  useEffect(() => {
    Client.fetch(
      "*[(_type=='movie' || _type =='trendtv') && title match '*" +
        slug +
        "*' ] { title,releaseDate,rating,slug,poster{asset->{url}},cover{asset->{url}} }"
    )
      .then((data) => {
        setData(data);
        console.log("tawfikki9alb3lachinwa");
        console.log(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className={style.container}>
      <div className={style.result}>
        {Data.map((movie) => {
          return (
            <div className={style.contents}>
              <Link
                to={"/" + movie.slug.current}
                key={movie.slug.current}
                className={style.link}
              >
                <span>
                  <img src={movie.poster.asset.url} className={style.poster} />
                </span>
                <p key={movie.title} className={style.title}>
                  {movie.title}
                </p>
                <p className={style.p}>{movie.releaseDate.substr(0, 4)}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Result;
