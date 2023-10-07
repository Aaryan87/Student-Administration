import { useState } from 'react';
/* import Register from './FormInReact/Register'; */
/* import Firstpage from './Form/Firstpage'; */
/* import SignIn from './Form/SignIn'; */
import AddStudent from './components/AddStudent';
import DisplayStudentData from './components/DisplayStudent';
import Firstpage from './pages/FirstPage/Firstpage'
import SignIn from './pages/SignIn/SignIn';
import { StudentDataProvider } from "./StudentDataContext";
import { Route, Routes,} from "react-router-dom";

/* import './App.css'; */

 function App() {

  return (
    <div className="App">
      {/* <Register/> */}
      {/* <Firstpage/> */}
      {/* <SignIn/> */}
      {/* <AddStudent/>
      <DisplayStudentData/> */}
     
      <StudentDataProvider>
        <div>
          <Routes>
            <Route path='/' element = {<Firstpage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path="/add"  element={<AddStudent />} />
            <Route path="/display" element={<DisplayStudentData />} />
          </Routes>
        </div>
      </StudentDataProvider>
    
    </div>
  );
}



export default App;
