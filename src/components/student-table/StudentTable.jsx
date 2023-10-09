import React, { useState, useEffect } from "react";
import { Table } from "../CRUD Student/Table";
import { Modal } from "../CRUD Student/Modal";
import { Link } from "react-router-dom";
import { useStudentContext } from "../../context/StudentContext";
import './student.css'

const StudentTable = () => {
  const { students, setStudents } = useStudentContext();
  const [modalOpen, setModalOpen] = useState(false);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setStudents((prevStudents) =>
      prevStudents.filter((_, idx) => idx !== targetIndex)
    );
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);
    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    setStudents((prevStudents) => {
      if (rowToEdit === null) {
        return [...prevStudents, newRow];
      } else {
        return prevStudents.map((currRow, idx) => {
          return idx !== rowToEdit ? currRow : newRow;
        });
      }
    });

    setRowToEdit(null);
  };

  useEffect(() => {
    // You can perform any data fetching or updates here if needed
  }, []);

  return (
    <div>
      <div className="main-holder">
      <Table rows={students} deleteRow={handleDeleteRow} editRow={handleEditRow} className="student-table"/>
      <button onClick={() => setModalOpen(true)} className="btn btn-student-table">
        Add
      </button>
      <Link to="/filter">Go to Filtering Page</Link>
      </div>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && students[rowToEdit]}
        />
      )}
    </div>
  );
};

export default StudentTable;
