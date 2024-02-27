import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteItem = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteItem = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/item/${id}/`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Item Deleted successfully", { variant: "success" });
        navigate("/dashboard/");
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
      <h1>Delete Item</h1>
      {loading ? <Spinner /> : ""}
      <div>
        <h3>Are You Sure You want to delete this item?</h3>
        <button onClick={handleDeleteItem}>Yes, Delete it</button>
      </div>
    </div>
  );
};

export default DeleteItem;
