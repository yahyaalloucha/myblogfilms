import React, { useEffect, useState } from "react";
import style from "./Details.module.css";
import Vector from "../Screen/Vector 2.png";
import Search from "../Search/Search";
import Client from "../Client";
import { useParams } from "react-router";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
function Details() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();
  const builder = imageUrlBuilder(Client);

  useEffect(() => {
    Client.fetch(
      `*[slug.current == $slug]{
            title,
            overview,
            releaseDate,
            rating,
            trailer,
            slug,
            poster{asset->{url}},
            cover{asset->{url}},
            
         }`,
      { slug }
    )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;
  return (
    <div className={style.bigcontainer}>
      <Search />
      <div className={style.container}>
        <img src={postData.cover.asset.url} className={style.cover} />
      </div>

      <div className={style.info}>
        <img src={postData.poster.asset.url} className={style.myimg} />
        <div className={style.src}>
          <h1 className={style.h1}>{postData.title}</h1>

          <div className={style.trading}>
            <img src={Vector} className={style.vec} />
            <p className={style.rating}>{postData.rating}</p>
            <div className={style.Play}>
              <a className={style.a} href={postData.trailer}>
                Play Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={style.Bl}>
        <h2 className={style.overview}>Overview </h2>
        <BlockContent blocks={postData.overview} className={style.block} />
      </div>
    </div>
  );
}
export default Details;
