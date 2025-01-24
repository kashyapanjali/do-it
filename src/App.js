// App.js
import React, { useState } from "react";
import { useSelector } from 'react-redux';
import Sidebar from "./components/Sidebar";
import TodoSection from "./components/TodoSection";
import AuthPage from "./components/AuthPage";
import "./styles/styles.css";

const App = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  return (
    <div className="app-container">
      <button className="theme-toggle" onClick={toggleTheme}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <Sidebar />
      <TodoSection />
    </div>
  );
};

export default App;
