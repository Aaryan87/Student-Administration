// StudentDataContext.js
import React, { createContext, useContext, useState } from "react";

const StudentDataContext = createContext();

export function useStudentData() {
  return useContext(StudentDataContext);
}

export function StudentDataProvider({ children }) {
  const [studentData, setStudentData] = useState({
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

  return (
    <StudentDataContext.Provider value={{ studentData, setStudentData }}>
      {children}
    </StudentDataContext.Provider>
  );
}
