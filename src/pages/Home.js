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
            ogImage:
              "https://static.xx.fbcdn.net/rsrc.php/v3/y1/r/_T2_lCNF8Zl.png",
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
