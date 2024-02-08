
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";

import Login from "./pages/Login";
import Register from "./pages/Register";
// import Dashboard from "./Admin/Dashboard";
import Admission from "./pages/Admission";
import ContactUs from "./pages/ContactUs";
import UserDashboard from "./pages/UserDashboard";
// import DashboardCourse from "./pages/DashboardCourse";
import AcademyRegistrationForm from "./pages/AcademyRegistrationForm";

import AdminDash from "./pages/AdminDash/Dashboard";
import UsersAdmin from "./pages/AdminDash/Users";
import UsersAdminEdit from "./pages/AdminDash/UsersEdit";
import CreateAcademy from "./pages/AdminDash/CreateAcademy";
import AddCourse from "./pages/AdminDash/AddCourse";
import Academy from "./pages/AdminDash/Academy";
import Course from "./pages/AdminDash/Course";
import Profile from "./pages/AdminDash/Profile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<ContactUs/>} /> 
          <Route path="/user-dashboard" element={<UserDashboard/>} />
          {/* <Route path="/user-dashboard/courses" element={<DashboardCourse/>} /> */}
          <Route path="/academyregf" element={<AcademyRegistrationForm/>} />

          <Route path="/dashboard/admin" element={<AdminDash />} />
        <Route
          path="/dashboard/admin/create-academy"
          element={<CreateAcademy />}
        />
        <Route path="/dashboard/admin/add-course" element={<AddCourse />} />
        <Route path="/dashboard/admin/users" element={<UsersAdmin />} />
        <Route
          path="/dashboard/admin/users/edit"
          element={<UsersAdminEdit />}
        />
        <Route path="/dashboard/admin/profile" element={<Profile />} />
        <Route path="/dashboard/admin/academies" element={<Academy />} />
        <Route path="/dashboard/admin/courses" element={<Course />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
