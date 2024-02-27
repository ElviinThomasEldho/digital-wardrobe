import React from "react";
import LeaderboardCard from "./LeaderboardCard";

const LeaderboardList = (props) => {
  return (
    <div className="lead-board">
      {props.players.map((player, index) => (
        <LeaderboardCard player={player} rank={index + 4} />
      ))}
    </div>
  );
};

export default LeaderboardList;
