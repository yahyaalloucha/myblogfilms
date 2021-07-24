import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Client from "../Client";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";

export default function OnePost() {
  const [postData, setPostData] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    Client.fetch(
      `*[slug.current == $slug]{
          title,
          releaseDate,
          rating,
          slug,
          poster{asset->{url}}
          
       }`,
      { slug }
    )
      .then((data) => setPostData(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!postData) return <div>Loading...</div>;

  return (
    <div>
      <h2 style={{ color: "red", textAlign: "center", fontSize: "2vw" }}>
        {postData.title}
      </h2>
      <p style={{ color: "red" }}>{postData.releaseDate.substr(0, 4)}</p>
    </div>
  );
}
