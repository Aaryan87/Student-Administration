import React, { useState } from "react";
import './styles/AddStudent.css'
import { useStudentData } from "../StudentDataContext";

function AddStudent(){

    const [name, setName] = useState('');
    const [classno, setClassno] = useState('');
    const [house, setHouse] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');

    const { studentData, setStudentData } = useStudentData();

    const clickHandler = (e) => {
        e.preventDefault();
        console.log(studentData);
        setStudentData({
          name: "",
          classno: "",
          house: "",
          city: "",
          state: "",
          email: "",
          contact: "",
          dob: "",
          gender: "",
        });
      };

    return(
        <div className="container" >
            <form onSubmit={clickHandler} >

                <label>Name:</label>
                <input
                    type="text"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <label>Class:</label>
                <input
                    type="text"
                    required
                    value={classno}
                    onChange={e => setClassno(e.target.value)}
                />

                <label>DOB:</label>
                <input
                    type="date"
                    required
                    value={dob}
                    onChange={e => setDob(e.target.value)}
                />

                <label>Email:</label>
                <input
                    type="text"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />

                <label>House No:</label>
                <input
                    type="text"
                    required
                    value={house}
                    onChange={e => setHouse(e.target.value)}
                />

                <label>City:</label>
                <input
                    type="text"
                    required
                    value={city}
                    onChange={e => setCity(e.target.value)}
                />

                <label>State:</label>
                <input
                    type="text"
                    required
                    value={state}
                    onChange={e => setState(e.target.value)}
                />

                <label>Contact No:</label>
                <input
                    type="text"
                    required
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                />

                <label>Gender:</label>
                    <label>
                      <input
                        type="radio"
                        value="Male"
                        checked={gender === "Male"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="Female"
                        checked={gender === "Female"}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      Female
                    </label>
                
                <button type="submit">Add Student</button>

            </form>
        </div>
    );
}

export default AddStudent;