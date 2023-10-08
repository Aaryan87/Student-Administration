import Firstpage from './pages/FirstPage/Firstpage'
import SignIn from './pages/SignIn/SignIn';
import StudentTable from './components/student-table/StudentTable';
import FileUpload from './components/FileUpload/FileUpload';
import { Route, Routes,} from "react-router-dom";
import StaffTable from './components/staff-table/StaffTable';
import DisplayDashBoard from './components/DashBoard/DisplayDashBoard/DisplayDashBoard';



 function App() {
  return (
    <div className="App">
          <Routes>
            <Route path='/' element = {<Firstpage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/dashboard' element={<DisplayDashBoard/>} />
            <Route path='/studentlist' element={<StudentTable />} />
            <Route path='/stafflist' element={<StaffTable/>} />
            <Route path='/file-upload' element={<FileUpload/>}/>
          </Routes>
        </div>
  );
}



export default App;
