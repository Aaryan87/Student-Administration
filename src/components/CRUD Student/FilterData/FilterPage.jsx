import React, { useState } from "react";
import FilterData from './FilterData'
import FilterComponent from '../FilterComponent/FilterComponent'
import { useStudentContext } from "../../../context/StudentContext";
import './filterpage.css'

const FilteringPage = () => {
  const { students } = useStudentContext();
  const [filteredStudents, setFilteredStudents] = useState(students);
  const [filterCriteria, setFilterCriteria] = useState({
    rollno: "",
    name: "",
    gender: "",
  });

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

    setFilteredStudents(filteredRows);
  };

  return (
    <div className="filter-comp">
      <FilterComponent
        filterCriteria={filterCriteria}
        setFilterCriteria={setFilterCriteria}
        onFilter={handleFilter}
      />
    </div>
  );
};

export default FilteringPage;
