import { FaSearch } from "react-icons/fa";

const InputField = ({ filter, changeFilter }) => {
  return (
    <div className="inputWrapper">
      <FaSearch
        style={{ marginLeft: "15px", position: "absolute", zIndex: "2" }}
        size={24}
      />
      <input
        placeholder="Search your trip"
        id="cityInput"
        className="inputInner"
        value={filter}
        onChange={changeFilter}
      />
    </div>
  );
};

export default InputField;
