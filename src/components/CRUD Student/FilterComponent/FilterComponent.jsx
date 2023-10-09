// FilterComponent.js
import React, { useState } from "react";
import './FilterComponent.css'

function FilterComponent({ onFilter }) {
  const [filterCriteria, setFilterCriteria] = useState({
    rollno:"",
    name: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({
      ...filterCriteria,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilter(filterCriteria);
  };

  return (
    <div className="wrapper-form2">
    <form onSubmit={handleSubmit}>
    <label>
        RollNo:
        <input
          type="text"
          name="rollno"
          value={filterCriteria.rollno}
          onChange={handleChange}
        />
      </label>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={filterCriteria.name}
          onChange={handleChange}
        />
      </label>

      <label>
        Gender:
        <input
          type="text"
          name="gender"
          value={filterCriteria.gender}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Apply Filter</button>
    </form>
    </div>
  );
}

export default FilterComponent;
