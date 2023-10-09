// StudentContext.js

import React, { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const useStudentContext = () => {
    return useContext(StudentContext);
};

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState([
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

    return (
        <StudentContext.Provider value={{ students, setStudents }}>
            {children}
        </StudentContext.Provider>
    );
};
