import React from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import About from "./components/About";

import CreateStudent from "./components/crud/students/CreateStudent";
import ListStudent from "./components/crud/students/ListStudent";
import EditStudent from "./components/crud/students/EditStudent";

import CreateTeacher from "./components/crud/teachers/CreateTeacher";
import ListTeacher from "./components/crud/teachers/ListTeacher";
import EditTeacher from "./components/crud/teachers/EditTeacher";
import FirebaseContext from "./utils/FirebaseContext";
import FirebaseUserService from "./services/FirebaseUserService";

const AppPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => <App firebase={firebase} />}
  </FirebaseContext.Consumer>
);

function App(props) {
  const [userLogged, setUserLogged] = React.useState(false);
  const navigate = useNavigate();

  const renderUserAndLogoutButton = () => {
    if (userLogged) {
      return (
        <div style={{ paddingRight: 20 }}>
          Olá, {JSON.parse(localStorage.getItem("user")).email}
          <button
            onClick={() => {
              logout();
            }}
            style={{ marginLeft: 20 }}
          >
            Logout
          </button>
        </div>
      );
    }
    return;
  };

  React.useEffect(() => {
    if (localStorage.getItem("user") !== "null") setUserLogged(true);
  }, []);

  const logout = () => {
    FirebaseUserService.logout(props.firebase.getAuthentication(), (value) => {
      if (value) {
        props.firebase.setAuthenticatedUser(null);
        localStorage.setItem("user", "null");
        setUserLogged(false);
        navigate("/");
      }
    });
  };
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
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Estudante
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="navitem">
                  <Link to="/createStudent" className="nav-link">
                    Criar Estudante
                  </Link>
                </li>
                <li className="navitem">
                  <Link to="/listStudent" className="nav-link">
                    Listar Estudante
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Professor
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="navitem">
                  <Link to="/createProfessor" className="nav-link">
                    Criar Professor
                  </Link>
                </li>
                <li className="navitem">
                  <Link to="/listProfessor" className="nav-link">
                    Listar Professor
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        {renderUserAndLogoutButton()}
      </nav>
      <Routes>
        <Route path="/" element={<Home setUserLogged={setUserLogged} />} />
        <Route path="about" element={<About />} />
        <Route
          path="createStudent"
          element={<CreateStudent userLogged={userLogged} />}
        />
        <Route
          path="listStudent"
          element={<ListStudent userLogged={userLogged} />}
        />
        <Route
          path="editStudent/:id"
          element={<EditStudent userLogged={userLogged} />}
        />
        <Route
          path="createProfessor"
          element={<CreateTeacher userLogged={userLogged} />}
        />
        <Route
          path="listProfessor"
          element={<ListTeacher userLogged={userLogged} />}
        />
        <Route
          path="editProfessor/:id"
          element={<EditTeacher userLogged={userLogged} />}
        />
      </Routes>
    </div>
  );
}

export default AppPage;
