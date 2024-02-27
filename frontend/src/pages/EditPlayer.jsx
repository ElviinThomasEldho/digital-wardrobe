import React, { useEffect, useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";

const EditPlayer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [imageUpload, setImageUpload] = useState("");
  const [points, setPoints] = useState(0);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://coder-of-rajagiri-backend.vercel.app/player/${id}/`)
      .then((response) => {
        setFirstName(response.data.firstName);
        setLastName(response.data.lastName);
        setImage(response.data.image);
        setPoints(response.data.points);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened. Please check console");
        console.log(error);
      });
  }, []);

  const handleEditPlayer = () => {
    setLoading(true);

    console.log("button clicked");
    if (imageUpload) {
      const imageRef = ref(storage, `iedc-e3ff2/images/${imageUpload.name}`);
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          console.log(url);
          setImage(url);
          const data = {
            firstName,
            lastName,
            image: url,
            points,
          };
          axios
            .put(`https://coder-of-rajagiri-backend.vercel.app/player/${id}`, data)
            .then((response) => {
              setLoading(false);
              enqueueSnackbar("Player Created successfully", {
                variant: "success",
              });
              navigate("/admin/");
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
      const data = {
        firstName,
        lastName,
        image,
        points
      };
      axios
        .put(`https://coder-of-rajagiri-backend.vercel.app/player/${id}`, data)
        .then((response) => {
          setLoading(false);
          enqueueSnackbar("Player Created successfully", {
            variant: "success",
          });
          navigate("/admin/");
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
      <h1>Edit Player</h1>
      {loading ? <Spinner /> : ""}
      <div>
        <div>
          <label>FirstName</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label>LastName</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label>Image</label>
          <img src={image} alt="image" />
          <input
            type="file"
            onChange={(e) => setImageUpload(e.target.files[0])}
          />
        </div>
        <div>
          <label>Points</label>
          <input
            type="text"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
          />
        </div>
        <button onClick={handleEditPlayer}>Edit</button>
      </div>
    </div>
  );
};

export default EditPlayer;
