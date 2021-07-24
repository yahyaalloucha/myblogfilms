import "./App.css";
import Search from "./Search/Search";
import Screen from "./Screen/Screen";
import Tredingmovies from "./Tradingmovies/Tredingmovies";
import TrendingTvs from "./TrendingTvs/TrendingTvs";

import Details from "./Details/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="CON">
        <Search />

        <Switch>
          <Route exact path="/" component={Tredingmovies}>
            <Screen />
            <Tredingmovies />
            <TrendingTvs />
          </Route>
        </Switch>
      </div>
      <Switch>
        <Route component={Details} path="/:slug" />
      </Switch>
    </Router>
  );
}

export default App;
