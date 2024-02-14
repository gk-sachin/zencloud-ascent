import { useEffect, useState } from "react";
import "../assets/css/UserDashboard.css";
import EditForm from "../pages/EditFrom";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function UserDashboard() {
  const navigate = useNavigate();
  const [admissionDetails, setAdmissionDetails] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchAdmissionDetails();
  }, []);

  const fetchAdmissionDetails = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/forms");
      setAdmissionDetails(response.data);
    } catch (error) {
      console.error("Error fetching admission details:", error);
    }
  };

  
  
  const handleEdit = (index) => {
    setEditIndex(index);
    setIsEditing(true);
  };

  const handleSave = async (editedData) => {
    try {
      await axios.put(`http://localhost:8080/api/forms/${admissionDetails[editIndex].id}`, editedData);
      fetchAdmissionDetails(); // Fetch updated details after saving
      setIsEditing(false);
    } catch (error) {
      console.error("Error saving admission details:", error);
    }
  };
  

  return (
    <div className="dashboard-contents">
      <div className="sidebarsss">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={UserDashboard}>Dashboard</li>
          <li onClick={() => navigate("/user-courses")}>Courses</li>
          <li onClick={() => navigate("/")}>Logout</li>
        </ul>
      </div>
      <div className="contents">
        <div className="dashboard-containers">
          {isEditing && (
            <EditForm
              data={admissionDetails[editIndex]}
              onSave={handleSave}
              onCancel={() => setIsEditing(false)}
            />
          )}

          {!isEditing && (
            <div className="cardss">
              <h2>Admission Details</h2>
              <table className="ttt">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Phone Number</th>
                    <th>YOGA CENTER</th>
                    <th>COURSE</th>
                    <th>CITY</th>
                    <th>STATE</th>
                    <th>COUNTRY</th>
                    <th>ADDRESS</th>
                    <th>Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {admissionDetails.map((admission, index) => (
                    <tr key={index}>
                      <td>{admission.name}</td>
                      <td>{admission.email}</td>
                      <td>{admission.dob}</td>
                      <td>{admission.phoneNumber}</td>
                      <td>{admission.course}</td>
                      <td>{admission.yogaCenter}</td>
                      <td>{admission.city}</td>
                      <td>{admission.state}</td>
                      <td>{admission.country}</td>
                      <td>{admission.address}</td>
                      <td>
                        <button onClick={() => handleEdit(index)}>Edit</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
