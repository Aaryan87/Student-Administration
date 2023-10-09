import React, { useState } from "react";
import './FilterComponent.css'
import FilterData from "../FilterData/FilterData";
import { useStudentContext } from "../../../context/StudentContext";

function FilterComponent() {
  const { students } = useStudentContext();
  const [filterCriteria, setFilterCriteria] = useState({
    rollno: "",
    name: "",
    gender: "",
  });

  const [filteredData, setFilteredData] = useState(students);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilterCriteria({
      ...filterCriteria,
      [name]: value,
    });
  };

  const handleFilter = () => {
    const filteredRows = students.filter((row) => {
      return (
        (filterCriteria.gender === "" ||
          row.gender === filterCriteria.gender) &&
        (filterCriteria.rollno === "" ||
          row.rollno === filterCriteria.rollno) &&
        (filterCriteria.name === "" || row.name.includes(filterCriteria.name))
      );
    });

    setFilteredData(filteredRows);
  };

  return (
    <div className="wrapper-form2">
      <form>
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

        <button type="button" onClick={handleFilter}>Apply Filter</button>
      </form>
      <FilterData filteredData={filteredData} />
    </div>
  );
}

export default FilterComponent;
