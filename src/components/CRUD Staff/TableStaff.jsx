import React from "react";

import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";

import "./TableStaff.css";

export const TableStaff = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="stafftable-wrappers">
      <table className="stafftable">
        <thead className="staffthead">
          <tr>
            <th>RollNo.</th>
            <th>Name</th>
            <th className="expand">Address</th>
            <th>ContactNo.</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {

            return (
              <tr key={idx}>
                <td>{row.rollno}</td>
                <td>{row.name}</td>
                <td className="expand">{row.address}</td>
                <td>{row.contact}</td>
                <td>
                  <span className={`label label-${row.gender}`}>
                    {row.gender}
                  </span>
                </td>
                <td className="fit">
                  <span className="actions">
                    <BsFillTrashFill
                      className="delete-btn"
                      onClick={() => deleteRow(idx)}
                    />
                    <BsFillPencilFill
                      className="edit-btn"
                      onClick={() => editRow(idx)}
                    />
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};