import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import ItemTable from "../components/ItemTable";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/item/")
      .then((response) => {
        console.log(response);
        setItems(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1>Items List</h1>
        <Link to="/items/create" className="btn-add">
          <MdOutlineAddBox /> Add Item
        </Link>
      </div>
      {!loading && <ItemTable items={items} />}
    </div>
  );
};

export default Dashboard;
