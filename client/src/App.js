import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Menu, MenuItem, Sidebar } from "react-pro-sidebar";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Reports from "./pages/Reports";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div className="d-flex" style={{ height: "100vh" }}>
        <Sidebar>
          <Menu>
            <MenuItem component={<Link to="/" />}>Login</MenuItem>

            {isLoggedIn && (
              <>
                <MenuItem component={<Link to="/dashboard" />}>
                  Dashboard
                </MenuItem>
                <MenuItem component={<Link to="/inventory" />}>
                  Inventory
                </MenuItem>
                <MenuItem component={<Link to="/reports" />}>
                  Reports
                </MenuItem>
              </>
            )}
          </Menu>
        </Sidebar>

        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;