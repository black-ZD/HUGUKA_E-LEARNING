import { useState } from "react";
import NavBar from "./NavBar";
import apiClient from "../api/apiCrient";
export default function CreatModules() {
  const trainer = ["niyonshuti Emery", "TUYISHIMIRE Method", "kimozella", "THERMOL Joj", "devOps"];

  const [dataFormate, setDataFormate] = useState({
    moduleName: "",
    moduleCode: "",
    moduleTrainer: "",
    moduleDescription: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setDataFormate({
      ...dataFormate,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await apiClient.post("/module", dataFormate);
      
      setSubmittedData(dataFormate); 

    
      setDataFormate({
        moduleName: "",
        moduleCode: "",
        moduleTrainer: "",
        moduleDescription: "",
      });

      alert("Module created successfully!");
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Failed to create module. try again");
    }
  };


  return (
    <>
      <NavBar />

      <div className="border-t-8 border-black flex flex-col items-center text-white min-w-full justify-center shadow-2xl bg-white rounded">
        <h1 className="text-3xl font-extrabold text-center text-black">
          create module
        </h1>

        <form onSubmit={handleSubmit}>
       
          <div className="flex flex-col text-black">
            <label>Module Name</label>
            <input
              name="moduleName"
              value={dataFormate.moduleName}
              onChange={handleChange}
              className="p-3 bg-gray-300 w-72 rounded"
            />
          </div>

      
          <div className="flex flex-col text-black">
            <label>Module Code</label>
            <input
              name="moduleCode"
              value={dataFormate.moduleCode}
              onChange={handleChange}
              className="p-3 bg-gray-300 w-72 rounded"
            />
          </div>

       
          <div className="flex flex-col text-black">
            <label>Module Description</label>
            <input
              name="moduleDescription"
              value={dataFormate.moduleDescription}
              onChange={handleChange}
              className="p-3 bg-gray-300 w-72 rounded"
            />
          </div>

          {/* Trainer */}
          <div className="flex flex-col text-black">
            <label>Module Trainer</label>
            <select
              name="moduleTrainer"
              value={dataFormate.moduleTrainer}
              onChange={handleChange}
              className="p-3 bg-gray-300 w-72 rounded"
            >
              <option value="" disabled>
                select trainer
              </option>

              {trainer.map((t, index) => (
                <option key={index} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="text-white text-2xl p-3 mt-10 w-full bg-gradient-to-b from-green-600 to-black rounded"
          >
            create
          </button>
        </form>

      </div>

    
      {submittedData && (
        <div className="mt-10 p-6 bg-white text-black rounded-lg shadow-xl max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 border-b pb-2">
         
          </h1>

          <div className="grid grid-cols-2 gap-y-4 gap-x-8">
            <span className="font-semibold">Module Name</span>
            <span>{submittedData.moduleName}</span>

            <span className="font-semibold">Module Code</span>
            <span>{submittedData.moduleCode}</span>

            <span className="font-semibold">Trainer</span>
            <span className="text-orange-900 font-bold">
              {submittedData.moduleTrainer}
            </span>
          </div>
          
        </div>
        
      )}
    </>
  );
}