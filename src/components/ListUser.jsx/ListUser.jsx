import { useState, useEffect } from "react";
import axios from "axios";
import "./ListUser.css";
import CardUser from "../CardUser/CardUser";

import { Link } from "react-router-dom";

const ListUser = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios("https://rickandmortyapi.com/api/character").then((res) =>
      setChars(res.data.results)
    );
  }, []);

  return (
    <div className="Cards-List">
      {chars.map((char) => {
        return (
          <div key={char.id}>
            <Link to={`/detail/${char.id}`}>
              <CardUser char={char} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ListUser;
