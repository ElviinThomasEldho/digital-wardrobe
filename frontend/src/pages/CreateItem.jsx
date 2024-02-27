import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";

const CreateItem = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [season, setSeason] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveItem = () => {
    setLoading(true);

    console.log("button clicked");
    if (!image) return;

    const imageRef = ref(storage, `iedc-e3ff2/images/${image.name}`);

    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setImage(url);
        const data = {
          name,
          image: url,
          type,
          category,
          season
        };
        axios
          .post("http://localhost:5555/item/", data)
          .then((response) => {
            setLoading(false);
            enqueueSnackbar("Item Created successfully", {
              variant: "success",
            });
            navigate("/dashboard/");
          })
          .catch((error) => {
            setLoading(false);
            // alert('An error happened. Please check console')
            enqueueSnackbar("Error!", { variant: "error" });
            console.log(error);
          });
      });
    });
  };

  return (
    <div>
      <BackButton />
      <h1>Create Item</h1>
      {loading ? <Spinner /> : ""}
      <div>
        <div>
          <label>Item Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Image</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div>
          <label>Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div>
          <label>Season</label>
          <input
            type="text"
            value={season}
            onChange={(e) => setSeason(e.target.value)}
          />
        </div>
        <button onClick={handleSaveItem}>Create</button>
      </div>
    </div>
  );
};

export default CreateItem;
