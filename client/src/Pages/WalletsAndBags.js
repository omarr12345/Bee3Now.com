import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Card from "../Components/Card/Card";

function WalletsAndBags() {
  var walletsAndBagsApi = "/walletsandbags";
  const [walletsAndBags, setWalletsAndBags] = useState([]);
  useEffect(async () => {
    await axios
      .get(process.env.REACT_APP_API_URL + walletsAndBagsApi, {
        headers: { Authorization: localStorage.getItem("access_token") },
      })
      .then((response) => {
        setWalletsAndBags(response.data);
      });
  }, []);

  return (
    <div className="container ">
      <div className="d-flex flex-row justify-content-between flex-wrap ">
        {walletsAndBags.map((item) => {
          console.log(item);
          return <Card item={item} key={item.Id} />;
        })}
      </div>
    </div>
  );
}

export default WalletsAndBags;
