import React, { useContext, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import FormOne from "./components/FormOne";
import { FormDataContext } from "./context/FormDataContext";
import FormTwo from "./components/FormTwo";
import FinalForm from "./components/FinalForm";

function App() {
  const formArray = [1, 2, 3];
  const [formNo, setFormNo] = useState(formArray[0]);
  const { userData } = useContext(FormDataContext);

  const handleNextButton = () => {
    if (formNo === 1 && userData.userName && userData.number && userData.age) {
      setFormNo(formNo + 1);
    } else if (formNo === 2 && userData.image) {
      setFormNo(formNo + 1);
    } else {
      toast.error("Please fill up all input field");
    }
  };

  const handlePrevButton = () => {
    setFormNo(formNo - 1);
  };

  const handleFinalSubmit = () => {
    if (userData.userStatus) {
      if (localStorage.getItem("userData") === null) {
        toast.success("Submitted Successfully");
        console.log(userData);
        localStorage.setItem("userData", JSON.stringify(userData));
      } else {
        toast.error("Already Submitted");
      }
    } else {
      toast.error("Please fill up all input fields");
    }
  };

  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <Toaster />

      {/* form  */}
      <div className="card w-[370px] min-h-[220px] rounded-md shadow-md bg-white p-5">
        {/* stepper  */}
        <div className="flex justify-center items-center">
          {formArray.map((v, i) => (
            <>
              <div
                className={`w-[35px] my-3 text-white rounded-full ${
                  formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length
                    ? "bg-blue-500"
                    : "bg-slate-400"
                } h-[35px] flex justify-center items-center`}
              >
                {v}
              </div>
              {i !== formArray.length - 1 && (
                <div
                  className={`w-[85px] h-[2px] ${
                    formNo === i + 2 || formNo === formArray.length ? "bg-blue-500" : "bg-slate-400"
                  }`}
                ></div>
              )}
            </>
          ))}
        </div>

        {formNo === 1 && <FormOne handleNextButton={handleNextButton} />}

        {formNo === 2 && <FormTwo handleNextButton={handleNextButton} handlePrevButton={handlePrevButton} />}

        {formNo === 3 && <FinalForm handleFinalSubmit={handleFinalSubmit} handlePrevButton={handlePrevButton} />}
      </div>
    </div>
  );
}

export default App;
