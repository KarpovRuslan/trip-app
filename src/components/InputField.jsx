import React from "react";
import { FaSearch } from "react-icons/fa";

export const InputField = () => {
  return (
    <div className="inputWrapper">
      <FaSearch
        style={{ marginLeft: "15px", position: "absolute" }}
        size={24}
      />
      <input
        placeholder="Search your trip"
        className="inputInner"
        type="text"
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default InputField;
