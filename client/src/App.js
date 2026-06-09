import React, {useState} from "react";
import {MenuItem, Menu, Sidebar} from 'react-pro-sidebar';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Inventory from './pages/inventory';
import Reports from './pages/reports';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

return (
    <Router>
      <div className="d-flex" style={{ height: '100vh' }}>
        <Sidebar>
          <Menu>
            <MenuItem component={<Link to="/" />}> Login </MenuItem>
            {isLoggedIn&&(
              <><MenuItem component={<Link to="/dashboard" />}> Dashboard 
              </MenuItem><MenuItem component={<Link to="/inventory" />}> Inventory 
              </MenuItem><MenuItem component={<Link to="/reports" />}> Reports </MenuItem></>
            )
            }
          </Menu>
        </Sidebar>

        <div className="flex-grow-1">
          <Routes>
          <Route path="/" element={<Login />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
