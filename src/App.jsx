import Firstpage from './pages/FirstPage/Firstpage'
import SignIn from './pages/SignIn/SignIn';
import StudentTable from './components/student-table/StudentTable';
import FileUpload from './components/FileUpload/FileUpload';
import { Route, Routes,} from "react-router-dom";
import StaffTable from './components/staff-table/StaffTable';
import DisplayDashBoard from './components/DashBoard/DisplayDashBoard/DisplayDashBoard';
import Signup from './components/Signup/Signup';
import AllStaffFilterData from './components/CRUD Staff/AllStaffFilterData/AllStaffFilterData';
import FilteringPage from './components/CRUD Student/FilterData/FilterPage';



 function App() {
  return (
    <div>
          <Routes>
            <Route path='/' element = {<Firstpage />} />
            <Route path='/signin' element={<SignIn />} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/dashboard' element={<DisplayDashBoard/>} />
            <Route path='/studentlist' element={<StudentTable />} />
            <Route path='/stafflist' element={<StaffTable/>} />
            <Route path='/studentfilterdata' element={<AllStaffFilterData/>}/>
            <Route path='/file-upload' element={<FileUpload/>}/>
            <Route path='/filter' element={<FilteringPage />} />
          </Routes>
        </div>
  );
}



export default App;
