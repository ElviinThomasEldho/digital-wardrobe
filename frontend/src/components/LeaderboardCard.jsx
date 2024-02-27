import React from "react";

const LeaderboardCard = (props) => {
  return (
    <div className="participant">
      <div className="playerdetails">
        <span className="leadrank">{props.rank}</span>
        <img className="leadimg" src={props.player.image} alt="Profile pic" />
        <span className="leadname">
          {props.player.firstName} {props.player.lastName}
        </span>
      </div>
      <span className="leadscore">{props.player.points}</span>
    </div>
  );
};

export default LeaderboardCard;
