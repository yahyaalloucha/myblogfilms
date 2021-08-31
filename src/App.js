import "./App.css";
import Search from "./Search/Search";
import Screen from "./Screen/Screen";
import Home from "./pages/Home";
import Tredingmovies from "./Tradingmovies/Tredingmovies";
import TrendingTvs from "./TrendingTvs/TrendingTvs";
import Result from "./Result/Result";
import "react-modal-video/scss/modal-video.scss";
import { SuperSEO } from "react-super-seo";

import Details from "./Details/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="CON">
        <SuperSEO
          title="SEO | React Super SEO"
          description="React SEO component with OpenGraph and Twitter Cards support."
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

        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
      <Switch>
        <Route component={Details} path="/:slug" />
      </Switch>
      <Switch>
        <Route path="/search/:slug">
          <Result />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
