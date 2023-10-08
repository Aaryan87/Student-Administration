import AddStudent from './components/AddStudent';
import DisplayStudentData from './components/DisplayStudent';
import Firstpage from './pages/FirstPage/Firstpage'
import SignIn from './pages/SignIn/SignIn';
import StudentTable from './components/student-table/StudentTable';
import FileUpload from './components/FileUpload/FileUpload';
import { Route, Routes,} from "react-router-dom";


 function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element = {<Firstpage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path="/add"  element={<AddStudent />} />
            <Route path="/display" element={<DisplayStudentData />} />
            <Route path='/studentlist' element={<StudentTable />} />
            <Route path='/file-upload' element={<FileUpload/>}/>
          </Routes>
        </div>
  );
}



export default App;
