import style from "./Tredingmovies.module.css";
import Client from "../Client";
import React, { useEffect, useState } from "react";
import imageUrlBuilder from "@sanity/image-url";
function Tredingmovies() {
  const [Data, setData] = useState([]);
  const builder = imageUrlBuilder(Client);

  useEffect(() => {
    Client.fetch(
      `*[_type=='movie'] {  title,
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
      <h1>Treding Movies</h1>
      <div className={style.movies}>
        {Data.map((movie) => {
          return (
            <div className={style.contents}>
              <p
                style={{
                  color: "white",
                }}
                key={movie.title}
              >
                {movie.title}
              </p>
              <span>
                <img src={movie.poster.asset.url} className={style.poster} />
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
  /* const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    Client.fetch("*[_type=='movie']{ title}")
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    return () => {};
  }, []);

  if (loading) {
    return (
      <div className="App">
        <h1>...Loading</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );*/
}

export default Tredingmovies;
