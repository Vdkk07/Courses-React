import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <div>
      <div className="spinner flex justify-center items-center space-y-2 flex-col"></div>
      <p className="text-lg font-semibold text-[#003153]">Loading...</p>
    </div>
  );
};

export default Spinner;
