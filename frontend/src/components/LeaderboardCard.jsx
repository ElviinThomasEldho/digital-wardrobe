import React from "react";

const LeaderboardCard = (props) => {
  return (
    <div className="participant">
      <div className="itemdetails">
        <span className="leadrank">{props.rank}</span>
        <img className="leadimg" src={props.item.image} alt="Profile pic" />
        <span className="leadname">
          {props.item.firstName} {props.item.lastName}
        </span>
      </div>
      <span className="leadscore">{props.item.points}</span>
    </div>
  );
};

export default LeaderboardCard;
