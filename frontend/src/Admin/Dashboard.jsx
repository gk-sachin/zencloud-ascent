import { useEffect, useState } from "react";
import "../assets/css/Dashboard.css";

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [admissionDetails, setAdmissionDetails] = useState([]);
  useEffect(() => {
    const formdata = JSON.parse(localStorage.getItem("user"))
    
    setAdmissionDetails(formdata)
  }, [])

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleEdit = (index) => {
    
    console.log("Editing item at index:", index);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li onClick={() => handleOptionClick(1)}>Details</li>
        </ul>
      </div>
      <div className="content">
        <h1 className="dh">Welcome to the Admin Dashboard!</h1>
        <div className="dashboard-content">
          {selectedOption === 1 && (
            <div className="card">
              <h2>Admission Details</h2>
             
              <table className="tt">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>DOB</th>
                    <th>Phone Number</th>
                    <th>COURSE</th>
                    <th>YOGA CENTER</th>
                    <th>CITY</th>
                    <th>STATE</th>
                    <th>COUNTRY</th> 
                    <th>ADDRESS</th>
                    
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

export default Dashboard;
