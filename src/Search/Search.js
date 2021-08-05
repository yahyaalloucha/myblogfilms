import style from "./Search.module.css";
import Vector from "./Vector.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e) => {
    if (e?.key === "Enter") {
      alert("do validate");
    }
  };
  return (
    <div className={style.Container}>
      <div className={style.vilm}>
        <h1 className={style.h1}>VILM</h1>
      </div>
      <span className={style.input}>
        <input
          type="text"
          required
          className={style.input1}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={() => handleKeyDown()}
        />

        <Link to={"/search/" + searchTerm}>
          <img src={Vector}></img>
        </Link>
      </span>
    </div>
  );
}
export default Search;
