import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowPlayer = () => {
  const [player, setPlayer] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://coder-of-rajagiri-backend.vercel.app/player/${id}/`)
      .then((response) => {
        setPlayer(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div>
      <BackButton />
      <h1>Show Player</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <span className="title">ID</span>
            <span>{player._id}</span>
          </div>
          <div>
            <span className="title">Full Name</span>
            <span>
              {player.firstName} {player.lastName}
            </span>
          </div>
          <div>
            <span className="title">Image</span>
            <img src={player.image} alt="image" />
          </div>
          <div>
            <span className="title">Points</span>
            <span>{player.points}</span>
          </div>
          <div>
            <span className="title">Create Time</span>
            <span>{new Date(player.createdAt).toString()}</span>
          </div>
          <div>
            <span className="title">Last Update Time</span>
            <span>{new Date(player.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowPlayer;
