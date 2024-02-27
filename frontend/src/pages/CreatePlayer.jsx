import React, { useState } from "react";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";

const CreatePlayers = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSavePlayer = () => {
    setLoading(true);

    console.log("button clicked");
    if (!image) return;

    const imageRef = ref(storage, `iedc-e3ff2/images/${image.name}`);

    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setImage(url);
        const data = {
          firstName,
          lastName,
          image,
        };
        axios
          .post("https://coder-of-rajagiri-backend.vercel.app/player/", data)
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
  };

  return (
    <div>
      <BackButton />
      <h1>Create Player</h1>
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
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button onClick={handleSavePlayer}>Create</button>
      </div>
    </div>
  );
};

export default CreatePlayers;
