import React from "react";

const Podium = (props) => {
  console.log(props.players[0]);
  return (
    <div className="podium">
      {props.players[1] && (
        <div className="box one">
          <img
            className="imgpod img1"
            src={props.players[1].image}
            alt="profile img"
          />
          <span className="namepod">
            {props.players[1].firstName} {props.players[1].lastName}
          </span>
          <span className="rankpod rank1">2nd</span>
          <span className="scoretxt">SCORE</span>
          <span className="scorepod">{props.players[1].points}</span>
        </div>
      )}
      {props.players[0] && (
        <div className="box two">
          <img
            className="imgpod img2"
            src={props.players[0].image}
            alt="profile img"
          />
          <span className="namepod">
            {props.players[0].firstName} {props.players[0].lastName}
          </span>
          <span className="rankpod rank2">1st</span>
          <span className="scoretxt">SCORE</span>
          <span className="scorepod">{props.players[0].points}</span>
        </div>
      )}
      {props.players[2] && (
      <div className="box three">
        <img
          className="imgpod img3"
          src={props.players[2].image}
          alt="profile img"
        />
        <span className="namepod">
          {props.players[2].firstName} {props.players[2].lastName}
        </span>
        <span className="rankpod rank3">3rd</span>
        <span className="scoretxt">SCORE</span>
        <span className="scorepod">{props.players[2].points}</span>
      </div>
      )}
    </div>
  );
};

export default Podium;
