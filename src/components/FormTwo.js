import React, { useContext } from "react";
import { FormDataContext } from "../context/FormDataContext";

const FormTwo = ({ handleNextButton, handlePrevButton }) => {
  const { userData, setUserData } = useContext(FormDataContext);

  const handleChange = async (event) => {
    const image = event.target.files[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=bc7c392c43948f9b7d66ed45e0b46d2b`;
    try {
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          if (imgData.success) {
            setUserData({ ...userData, image: imgData.data.url });
          }
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="flex flex-col mb-2">
        <label className="text-slate-500" htmlFor="image">
          Image
        </label>
        <input
          type="file"
          onChange={handleChange}
          className="p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md"
        />
        {userData.image && <img src={userData.image} alt="userImage" />}
      </div>
      <div className="mt-4 gap-3 flex justify-center items-center">
        <button onClick={handlePrevButton} className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500">
          Prev
        </button>
        <button onClick={handleNextButton} className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500">
          Next
        </button>
      </div>
    </div>
  );
};

export default FormTwo;
