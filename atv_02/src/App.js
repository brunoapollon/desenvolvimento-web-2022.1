import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, NavDropdown } from "react-bootstrap";
//import "./App.css";

import Home from "./components/Home";
import About from "./components/About";

import CreateStudent from "./components/crud/students/CreateStudent";
import ListStudent from "./components/crud/students/ListStudent";
import EditStudent from "./components/crud/students/EditStudent";

import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import CreateTeacher from "./components/crud/teachers/CreateTeacher";
import Listteacher from "./components/crud/teachers/ListTeacher";
import EditTeacher from "./components/crud/teachers/EditTeacher";

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <NavDropdown id="nav-dropdown-dark-example" title="Student">
              <NavDropdown.Item href="/createStudent">
                Create Student
              </NavDropdown.Item>
              <NavDropdown.Item href="/listStudent">
                List Student
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown id="nav-dropdown-dark-example" title="Teacher">
              <NavDropdown.Item href="/createTeacher">
                Create Teacher
              </NavDropdown.Item>
              <NavDropdown.Item href="/listTeacher">
                List Teacher
              </NavDropdown.Item>
            </NavDropdown>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="createTeacher" element={<CreateTeacher />} />
        <Route path="listTeacher" element={<Listteacher />} />
        <Route path="editTeacher/:id" element={<EditTeacher />} />
      </Routes>
    </div>
  );
}

export default App;
