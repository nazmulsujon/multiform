import React, { useContext } from "react";
import { FormDataContext } from "../context/FormDataContext";

const FinalForm = ({ handlePrevButton, handleFinalSubmit }) => {
  const { userData, setUserData } = useContext(FormDataContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div>
      <div className="flex flex-col mb-2">
        <label htmlFor="userStatus">Account Type</label>
        <select
          name="userStatus"
          onChange={handleChange}
          className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
          type="text"
          value={userData.userStatus}
        >
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
        </select>
      </div>
      <div className="mt-4 gap-3 flex justify-center items-center">
        <button onClick={handlePrevButton} className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500">
          Prev
        </button>
        <button onClick={handleFinalSubmit} className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500">
          Next
        </button>
      </div>
    </div>
  );
};

export default FinalForm;
