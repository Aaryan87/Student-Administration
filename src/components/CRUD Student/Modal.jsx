import React, { useState } from "react";
import "./Modal.css";


export const Modal = ({ closeModal, onSubmit, defaultValue }) => {
  const [formState, setFormState] = useState(
    /* agar edit krege toh jo values phele thi vahi rhegi same */
    defaultValue || {
      rollno: "",
      name: "",
      gender: "Male",
    }
  );
  const [errors, setErrors] = useState("");

  const validateForm = () => {
    //if no value contains and still want to submit then it will not submit
    if (formState.rollno && formState.name && formState.gender) {
      setErrors("");
      return true;
    }
  };

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    onSubmit(formState);

    closeModal();
  };

  return (
    <div
      className="modal-container"
      onClick={(e) => {
        if (e.target.className === "modal-container") closeModal();
      }}
    >
      <div className="modal">
        <form>
          <div className="form-group">
            <label htmlFor="rollno">RollNo</label>
            <input name="rollno" onChange={handleChange} value={formState.rollno} />
          </div>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              onChange={handleChange}
              value={formState.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              value={formState.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
