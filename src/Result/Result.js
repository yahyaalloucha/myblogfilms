import Client from "../Client";
import React, { useEffect, useState } from "react";
import style from "./Result.module.css";
import { Link, useParams } from "react-router-dom";
import { SuperSEO } from "react-super-seo";

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
      <SuperSEO
        title="result"
        description="Web site about the best movies and series"
        lang="en"
        openGraph={{
          ogImage: {
            ogImage:
              "https://images.squarespace-cdn.com/content/v1/605a3c96f069ed0390eebc98/1616797838975-X0NW8M315DK5VW83VHIN/About_Hero.jpg",
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage: "http://placekitten.com/1200/630",
            summaryCardImageAlt: "Kittens",
            summaryCardSiteUsername: "justinmahar",
          },
        }}
      />
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
