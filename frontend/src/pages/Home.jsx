import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import PlayerTable from "../components/home/PlayerTable";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://coder-of-rajagiri-backend.vercel.app/player/")
      .then((response) => {
        console.log(response);
        setPlayers(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Players List</h1>
        <Link to="/players/create" className="btn-add">
          <MdOutlineAddBox /> Add Player
        </Link>
      </div>
      {!loading && <PlayerTable players={players} />}
    </div>
  );
};

export default Home;
