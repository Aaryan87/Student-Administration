import React, { useState } from "react";
import { TableStaff } from "../CRUD Staff/TableStaff";
import { ModalStaff } from "../CRUD Staff/ModalStaff";

const StaffTable = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      rollno: "1",
      name: "Aryan",
      address: "0",
      contact: "9464530907",
      gender: "Male",
    },
    {
      rollno: "2",
      name: "Aryan",
      address: "0",
      contact: "946457",
      gender: "Male",
    },
    {
      rollno: "3",
      name: "Aryan",
      address: "0",
      contact: "946451237",
      gender: "Female",
    },
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };

  const [filteredRows, setFilteredRows] = useState([]);

  const handleFilter = (filterCriteria) => {
    // Apply the filter criteria to your rows and update the displayed rows.
    const filteredRows = rows.filter((row) => {
      return (
        (filterCriteria.gender === "" || row.gender === filterCriteria.gender) && (filterCriteria.rollno === "" || row.rollno === filterCriteria.rollno) &&
        (filterCriteria.name === "" || row.name.includes(filterCriteria.name))
      );
    });

    setFilteredRows(filteredRows);
  };

  return (
    <div>
      <TableStaff rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <ModalStaff
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
};

export default StaffTable;
