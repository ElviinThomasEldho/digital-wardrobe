import React from "react";

const Podium = (props) => {
  console.log(props.items[0]);
  return (
    <div className="podium">
      {props.items[1] && (
        <div className="box one">
          <img
            className="imgpod img1"
            src={props.items[1].image}
            alt="profile img"
          />
          <span className="namepod">
            {props.items[1].firstName} {props.items[1].lastName}
          </span>
          <span className="rankpod rank1">2nd</span>
          <span className="scoretxt">SCORE</span>
          <span className="scorepod">{props.items[1].points}</span>
        </div>
      )}
      {props.items[0] && (
        <div className="box two">
          <img
            className="imgpod img2"
            src={props.items[0].image}
            alt="profile img"
          />
          <span className="namepod">
            {props.items[0].firstName} {props.items[0].lastName}
          </span>
          <span className="rankpod rank2">1st</span>
          <span className="scoretxt">SCORE</span>
          <span className="scorepod">{props.items[0].points}</span>
        </div>
      )}
      {props.items[2] && (
      <div className="box three">
        <img
          className="imgpod img3"
          src={props.items[2].image}
          alt="profile img"
        />
        <span className="namepod">
          {props.items[2].firstName} {props.items[2].lastName}
        </span>
        <span className="rankpod rank3">3rd</span>
        <span className="scoretxt">SCORE</span>
        <span className="scorepod">{props.items[2].points}</span>
      </div>
      )}
    </div>
  );
};

export default Podium;
