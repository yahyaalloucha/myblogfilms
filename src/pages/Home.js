import React from "react";
import Screen from "../Screen/Screen";
import Tredingmovies from "../Tradingmovies/Tredingmovies";
import TrendingTvs from "../TrendingTvs/TrendingTvs";
import { SuperSEO } from "react-super-seo";
import Vector from "./Vector 2.png";

export default function Home() {
  return (
    <div>
      <Screen />
      <Tredingmovies />
      <TrendingTvs />
      <SuperSEO
        title="Movies"
        description="React SEO component with OpenGraph and Twitter Cards support."
        lang="en"
        openGraph={{
          ogImage: {
            ogImage:
              "https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1517845732/1517845731.jpg",
            ogImageAlt: "Kittens",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpeg",
          },
        }}
        twitter={{
          twitterSummaryCard: {
            summaryCardImage:
              "https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1517845732/1517845731.jpg",
            summaryCardImageAlt: "Kittens",
            summaryCardSiteUsername: "justinmahar",
          },
        }}
      />
    </div>
  );
}
