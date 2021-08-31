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
        description="site web about the best movies and series "
        lang="en"
        openGraph={{
          ogImage: {
            ogImage: "http://placekitten.com/1200/630",
            ogImageAlt: "Kittens",
            ogImageWidth: 1200,
            ogImageHeight: 630,
            ogImageType: "image/jpeg",
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
    </div>
  );
}
