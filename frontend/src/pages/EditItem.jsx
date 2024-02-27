import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";

const EditItem = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [season, setSeason] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/item/${id}/`)
      .then((response) => {
        setName(response.data.name);
        setImage(response.data.image);
        setType(response.data.type);
        setCategory(response.data.category);
        setSeason(response.data.season);
        console.log(image)
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
  }, []);

  const handleEditItem = () => {
    setLoading(true);

    console.log("button clicked");
    if (imageUpload) {
      console.log(image, imageUpload)
      const imageRef = ref(storage, `iedc-e3ff2/images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
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
            .put(`http://localhost:5555/item/${id}`, data)
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
    } else {
      const data = { name,
        image,
        type,
        category,
        season
      };
      axios
        .put(`http://localhost:5555/item/${id}`, data)
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
    }
  };

  return (
    <div>
      <BackButton />
      <h1>Edit Item</h1>
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
        <button onClick={handleEditItem}>Edit</button>
      </div>
    </div>
  );
};

export default EditItem;
