import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeletePlayer = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeletePlayer = () => {
    setLoading(true);
    axios
      .delete(`https://coder-of-rajagiri-backend.vercel.app/player/${id}/`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Player Deleted successfully", { variant: "success" });
        navigate("/admin/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please check console')
        enqueueSnackbar("Error!", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div>
      <BackButton />
      <h1>Delete Player</h1>
      {loading ? <Spinner /> : ""}
      <div>
        <h3>Are You Sure You want to delete this player?</h3>
        <button onClick={handleDeletePlayer}>Yes, Delete it</button>
      </div>
    </div>
  );
};

export default DeletePlayer;
