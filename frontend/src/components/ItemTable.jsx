import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const ItemTable = ({ items }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th>No</th>
          <th>Item Name</th>
          <th>Image</th>
          <th>Type</th>
          <th>Category</th>
          <th>Season</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <tr key={item._id}>
            <td>{index + 1}</td>
            <td>
              {item.name}
            </td>
            <td>
              <img src={item.image} alt="item-image" height="100px" />
            </td>
            <td>{item.type}</td>
            <td>{item.category}</td>
            <td>{item.season}</td>
            <td>
              <div>
                <Link to={`/items/details/${item._id}`}>
                  <BsInfoCircle />
                </Link>
                <Link to={`/items/edit/${item._id}`}>
                  <AiOutlineEdit />
                </Link>
                <Link to={`/items/delete/${item._id}`}>
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

export default ItemTable;
