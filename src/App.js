import Dashboard from './Admin/Dashboard';
import './App.css';
import Sidenav from './Components/Sidenav';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Staff from './Staffs/Staff';
import Student from './Students/Student';
import Class from './Class/Class';
import StaffAttendance from './Staffs/StaffAttendance';
import StaffProfile from './Staffs/StaffProfile';
import StudentProfile from './Students/StudentProfile';
import ClassProfile from './Class/ClassProfile';
import ClassAttendance from './Class/classAttendance';

// MY DATA


function App() {
  return (
    <div className="flex bg-light-gray h-[100vh] overflow-hidden">
      <BrowserRouter>
      <Sidenav />
      <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/staff' element={<Staff />}></Route>
          <Route path='/staff/:id' element={<StaffProfile/>} />
          <Route path='/staff/attendance' element={<StaffAttendance />}></Route>
          <Route path='/student' element={<Student />}></Route>
          <Route path='/student/:id' element={<StudentProfile />} />
          <Route path='/class' element={<Class />}></Route>
          <Route path='/class/:id' element={<ClassProfile />}></Route>
          <Route path='/class/attendance/:id' element={<ClassAttendance />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
