import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowItem = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/item/${id}/`)
      .then((response) => {
        setItem(response.data);
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
      <h1>Show Item</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div>
            <span className="title">ID</span>
            <span>{item._id}</span>
          </div>
          <div>
            <span className="title">Full Name</span>
            <span>
              {item.firstName} {item.lastName}
            </span>
          </div>
          <div>
            <span className="title">Image</span>
            <img src={item.image} alt="image" />
          </div>
          <div>
            <span className="title">Points</span>
            <span>{item.points}</span>
          </div>
          <div>
            <span className="title">Create Time</span>
            <span>{new Date(item.createdAt).toString()}</span>
          </div>
          <div>
            <span className="title">Last Update Time</span>
            <span>{new Date(item.updatedAt).toString()}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowItem;
