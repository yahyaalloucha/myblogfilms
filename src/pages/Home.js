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
    </div>
  );
}
