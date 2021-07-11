import "./App.css";
import Search from "./Search/Search";
import Screen from "./Screen/Screen";
import Tredingmovies from "./Tradingmovies/Tredingmovies";
import TrendingTvs from "./TrendingTvs/TrendingTvs";

function App() {
  return (
    <div className="CON">
      <Search />
      <Screen />
      <Tredingmovies />
      <TrendingTvs />
    </div>
  );
}

export default App;
