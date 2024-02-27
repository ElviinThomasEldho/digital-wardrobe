import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const PlayersTable = ({ players }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th>No</th>
          <th>Player Name</th>
          <th>Image</th>
          <th>Points</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={player._id}>
            <td>{index + 1}</td>
            <td>
              {player.firstName} {player.lastName}
            </td>
            <td>
              <img src={player.image} alt="player-image" height="100px" />
            </td>
            <td>{player.points}</td>
            <td>
              <div>
                <Link to={`/players/details/${player._id}`}>
                  <BsInfoCircle />
                </Link>
                <Link to={`/players/edit/${player._id}`}>
                  <AiOutlineEdit />
                </Link>
                <Link to={`/players/delete/${player._id}`}>
                  <MdOutlineDelete />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayersTable;
