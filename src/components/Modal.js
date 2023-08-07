import React, { useState, useEffect } from "react";
import { formatDate } from "../helpers/formatDate";
import { nanoid } from "nanoid";
import mockCityData from "../helpers/mockCitiesdata.json";

const Modal = ({ showModal, handleDone, handleCancel, onSubmit }) => {
  const [startDate, setStartDate] = useState("");
  const [finishDate, setFinishDate] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [allData, setAllData] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  let maxFinishDateString = "";
  if (startDate) {
    const maxFinishDate = new Date(startDate);
    maxFinishDate.setDate(maxFinishDate.getDate() + 15);
    maxFinishDateString = maxFinishDate.toISOString().split("T")[0];
  }

  const handleSubmit = () => {
    onSubmit({
      id: nanoid(),
      selectedCity,
      start: formatDate(new Date(startDate).getTime()),
      end: formatDate(new Date(finishDate).getTime()),
    });
    resetFields();
  };

  const resetFields = () => {
    setStartDate("");
    setFinishDate("");
    setSelectedCity("");
  };

  useEffect(() => {
    if (selectedCity && startDate && finishDate) {
      return setAllData(true);
    } else return setAllData(false);
  }, [selectedCity, startDate, finishDate]);

  return (
    showModal && (
      <div className="modal">
        <div className="modal-content">
          <div className="nav-block">
            <h4>Create trip</h4>
            <span className="close" onClick={() => handleCancel()}>
              &times;
            </span>
          </div>

          <div className="modal-body">
            <div className="modal-wrapper">
              <div className="form-group">
                <label htmlFor="city">
                  <span style={{ color: "red", marginRight: "5px" }}>*</span>
                  City
                </label>

                <select
                  id="city"
                  value={selectedCity}
                  required
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="" disabled>
                    Please select a city
                  </option>

                  {mockCityData.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="startDate">
                  <span style={{ color: "red", marginRight: "5px" }}>*</span>
                  Start date
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="modal-input"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={today}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="finishDate">
                  <span style={{ color: "red", marginRight: "5px" }}>*</span>
                  End date
                </label>
                <input
                  type="date"
                  id="finishDate"
                  className="modal-input"
                  value={finishDate}
                  onChange={(e) => setFinishDate(e.target.value)}
                  min={startDate}
                  max={maxFinishDateString}
                  disabled={!startDate}
                  required
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => {
                handleCancel();
                resetFields();
              }}
              className="btnModalCancel"
            >
              Cancel
            </button>

            <button
              onClick={() => {
                handleSubmit();
                handleDone();
                resetFields();
              }}
              className="btnModalDone"
              disabled={!allData}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
