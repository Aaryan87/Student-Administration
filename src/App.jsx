import { useState } from 'react';
import AddStudent from './components/AddStudent';
import DisplayStudentData from './components/DisplayStudent';
import Firstpage from './pages/FirstPage/Firstpage'
import SignIn from './pages/SignIn/SignIn';
import { StudentDataProvider } from "./StudentDataContext";
import { Route, Routes,} from "react-router-dom";
import { Table } from './components/CRUD Student/Table';
import { Modal } from './components/CRUD Student/Modal';

/* import './App.css'; */

 function App() {

  const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    {
      rollno: "1",
      name:"Aryan",
      address: "0",
      contact:"9464530907",
      gender: "Male",
    },
    {
      rollno: "2",
      name:"Aryan",
      address: "0",
      contact:"946457",
      gender: "Male",
    },
    {
      rollno: "3",
      name:"Aryan",
      address: "0",
      contact:"946451237",
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

  return (
    <div className="App">
     
      
        <div>
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button>
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}


          <Routes>
            <Route path='/' element = {<Firstpage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path="/add"  element={<AddStudent />} />
            <Route path="/display" element={<DisplayStudentData />} />
          </Routes>
        </div>
     
    
    </div>
  );
}



export default App;
