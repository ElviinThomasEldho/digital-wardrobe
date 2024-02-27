import React from "react";
import LeaderboardCard from "./LeaderboardCard";

const LeaderboardList = (props) => {
  return (
    <div className="lead-board">
      {props.items.map((item, index) => (
        <LeaderboardCard item={item} rank={index + 4} />
      ))}
    </div>
  );
};

export default LeaderboardList;
