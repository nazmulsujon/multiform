import React, { useContext, useEffect, useState } from "react";
import { FormDataContext } from "../context/FormDataContext";

const FormOne = ({ handleNextButton }) => {
  const { userData, setUserData } = useContext(FormDataContext);
  const [countries, setCountries] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((countries) => {
        setCountries(countries);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col mb-2">
        <label htmlFor="name">Name</label>
        <input
          value={userData.userName}
          onChange={handleChange}
          className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
          type="text"
          name="userName"
          placeholder="name"
          id="userName"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="number">Phone</label>
        <input
          value={userData.number}
          onChange={handleChange}
          className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
          type="number"
          name="number"
          placeholder="phone number"
          id="number"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="age">Age</label>
        <input
          value={userData.age}
          onChange={handleChange}
          className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
          type="number"
          name="age"
          placeholder="age"
        />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="country">Country</label>
        <select
          name="country"
          onChange={handleChange}
          className="p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md"
          type="text"
          value={userData.country}
        >
          {countries.map((country, idx) => (
            <option key={idx} value={country?.name?.common}>
              {country?.name?.common}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-4 flex justify-center items-center">
        <button onClick={handleNextButton} className="px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500">
          Next
        </button>
      </div>
    </div>
  );
};

export default FormOne;
