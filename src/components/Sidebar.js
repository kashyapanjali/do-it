// Sidebar.js
import React from "react";
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="sidebar">
      <div className="profile-section">
        <img src="https://via.placeholder.com/50" alt="Profile" className="profile-pic" />
        <p>Hey, {user?.username || 'User'}</p>
      </div>
      <nav>
        <ul>
          <li>📋 All Tasks</li>
          <li className="active">📆 Today</li>
          <li>⭐ Important</li>
          <li>📅 Planned</li>
          <li>👤 Assigned to me</li>
          <li>➕ Add List</li>
        </ul>
      </nav>
      <div className="task-summary">
        <h4>Today Tasks</h4>
        <div className="progress-circle">
          <div className="circle">
            <span>11</span>
          </div>
        </div>
      </div>
      <button className="logout-button" onClick={handleLogout}>
        🚪 Logout
      </button>
    </div>
  );
};

export default Sidebar;