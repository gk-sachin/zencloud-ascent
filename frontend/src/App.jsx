
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AcademyCourses from './pages/AdminDash/AcademyCourses'
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Dashboard from "./Admin/Dashboard";
import Admission from "./pages/Admission";
import ContactUs from "./pages/ContactUs";
import UserDashboard from "./pages/UserDashboard";
// import DashboardCourse from "./pages/DashboardCourse";
import AcademyRegistrationForm from "./pages/AcademyRegistrationForm";
// import HomeNavbar from "./components/HomeNavbar";
import AdminDash from "./pages/AdminDash/Dashboard";
import UsersAdmin from "./pages/AdminDash/Users";
import CreateAcademy from "./pages/AdminDash/CreateAcademy";
import AddCourse from "./pages/AdminDash/AddCourse";
import Academy from "./pages/AdminDash/Academy";
import Course from "./pages/AdminDash/Course";
import Profile from "./pages/AdminDash/Profile";
import CourseCard from "./pages/CourseCard"
import UserProvider from "./components/Context/UserProvider";
import Logout from "./pages/Logout";
import UserDash from "./pages/UserDash/Dashboard"
import UserProfile from "./Pages/UserDash/Profile";
import UserBrowseCourses from "./Pages/UserDash/Course";
import UserBrowseAcademy from "./Pages/UserDash/Academy";
import UserAcademyCourses from "./Pages/UserDash/AcademyCourses";
import CourseUsers from "./pages/AdminDash/CourseUsers"

function App() {
  return (
    <>
      <Router>
       <UserProvider>
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
          <Route path="/user-courses" element={<CourseCard/>} />
          <Route path="/dashboard/admin" element={<AdminDash />} />
        <Route
          path="/dashboard/admin/create-academy"
          element={<CreateAcademy />}
        />
        <Route path="/dashboard/admin/add-course" element={<AddCourse />} />
        <Route path="/dashboard/admin/users" element={<UsersAdmin />} />
        
        <Route path="/dashboard/admin/profile" element={<Profile />} />
        <Route path="/dashboard/admin/academies" element={<Academy />} />
        <Route path="/dashboard/admin/courses" element={<Course />} />
        <Route path="/dashboard/admin/academy/courses" element={<AcademyCourses />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard/user" element={<UserDash />} />
        <Route path="/dashboard/admin/users" element={<UsersAdmin />} />
                <Route
                  path="/dashboard/user/profile"
                  element={<UserProfile />}
                />
                <Route
                  path="/dashboard/user/courses"
                  element={<UserBrowseCourses />}
                />
                <Route
                  path="/dashboard/user/academies"
                  element={<UserBrowseAcademy />}
                />
                <Route
                  path="/dashboard/user/academy/courses"
                  element={<UserAcademyCourses />}
                />
                <Route
                  path="/dashboard/admin/courses/users"
                  element={<CourseUsers />}
                />
      </Routes>
       </UserProvider>
      </Router>
    </>
  );
}

export default App;
