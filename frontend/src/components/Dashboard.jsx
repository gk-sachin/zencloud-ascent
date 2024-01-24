// Dashboard.js
import { useState } from "react";
import "../assets/css/Dashboard.css";

function Dashboard() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li onClick={() => handleOptionClick(1)}>Card - 1</li>
          <li onClick={() => handleOptionClick(2)}>Card - 2</li>
          <li onClick={() => handleOptionClick(3)}>Card - 3</li>
        </ul>
      </div>
      <div className="content">
        <h1 className="dh">Welcome to the Dashboard!</h1>
        {selectedOption && (
          <div className="dashboard-content">
            <div className="card">
              <h2>Card {selectedOption}</h2>
              <p>This is the content of Card {selectedOption}.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
