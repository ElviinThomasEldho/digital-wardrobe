import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import LeaderboardCard from "../components/LeaderboardCard";
import Podium from "../components/Podium";
import LeaderboardList from "../components/LeaderboardList";

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://coder-of-rajagiri-backend.vercel.app/player/")
      .then((response) => {
        console.log(response);
        setPlayers(response.data.data.sort((a, b) => b.points - a.points));
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
          <Podium players={players.slice(0, 3)} />
          <LeaderboardList players={players.slice(3)} />
        </>
      )} 
    </>
  );
};

export default Leaderboard;
