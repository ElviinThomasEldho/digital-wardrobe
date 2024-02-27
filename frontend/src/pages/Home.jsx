import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import LeaderboardCard from "../components/LeaderboardCard";
import Podium from "../components/Podium";
import LeaderboardList from "../components/LeaderboardList";

const Home = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/item/")
      .then((response) => {
        console.log(response);
        setItems(response.data.data.sort((a, b) => b.points - a.points));
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1 className="title">Coder Of Rajagiri</h1>
      {!loading && (
        <>
          <Podium items={items.slice(0, 3)} />
          <LeaderboardList items={items.slice(3)} />
        </>
      )} 
    </>
  );
};

export default Home;
