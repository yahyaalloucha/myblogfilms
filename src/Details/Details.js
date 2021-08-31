import React, { useEffect, useState } from "react";
import style from "./Details.module.css";
import Vector from "../Screen/Vector 2.png";
import Search from "../Search/Search";
import Client from "../Client";
import { useParams } from "react-router";
import ModalVideo from "react-modal-video";
import { SuperSEO } from "react-super-seo";

import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";
function Details() {
  const [isOpen, setOpen] = useState(false);
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
      <SuperSEO
        title="Dtails"
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
              <a className={style.a} onClick={() => setOpen(true)}>
                Play Trailer
              </a>
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId={postData.trailer}
                className={style.modal}
                onClose={() => setOpen(false)}
              />
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
