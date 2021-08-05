import "./App.css";
import Search from "./Search/Search";
import Screen from "./Screen/Screen";
import Tredingmovies from "./Tradingmovies/Tredingmovies";
import TrendingTvs from "./TrendingTvs/TrendingTvs";
import Result from "./Result/Result";

import Details from "./Details/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="CON">
        <Search />

        <Switch>
          <Route exact path="/" component={(Tredingmovies, TrendingTvs)}>
            <Screen />
            <Tredingmovies />
            <TrendingTvs />
          </Route>
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
