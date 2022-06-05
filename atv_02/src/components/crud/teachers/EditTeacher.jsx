import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseTeacherService from "../../../services/FirebaseTeacherService";

// import { teachers } from "./data.js";

const EditTeacherPage = (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => (
      <EditTeacher firebase={firebase} userLogged={props.userLogged} />
    )}
  </FirebaseContext.Consumer>
);

function EditTeacher(props) {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // axios
    //   .get("http://localhost:3002/crud/professors/retrieve/" + params.id)
    //   .then((res) => {
    //     setName(res.data.name);
    //     setUniversity(res.data.university);
    //     setDegree(res.data.degree);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    FirebaseTeacherService.retrieve_promisse(
      props.firebase.getFirestoreDb(),
      (student) => {
        setName(student.name);
        setUniversity(student.university);
        setDegree(student.degree);
      },
      params.id
    );
  }, [params.id, props]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updateProfessor = {
      name,
      university,
      degree,
    };
    // axios
    //   .put(
    //     "http://localhost:3002/crud/professors/update/" + params.id,
    //     updateProfessor
    //   )
    //   .then((res) => {
    //     navigate("/listTeacher");
    //   })
    //   .catch((error) => console.log(error));
    FirebaseTeacherService.update(
      props.firebase.getFirestoreDb(),
      () => {
        navigate("/listProfessor");
      },
      params.id,
      updateProfessor
    );
  };

  return (
    <>
      <main>
        <h2>Editar Professor</h2>
        {props.userLogged ? (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nome: </label>
              <input
                type="text"
                className="form-control"
                value={name == null || name === undefined ? "" : name}
                name="name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Universidade: </label>
              <input
                type="text"
                className="form-control"
                value={university ?? ""}
                name="university"
                onChange={(event) => {
                  setUniversity(event.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label>Titulação: </label>
              <input
                type="text"
                className="form-control"
                value={degree ?? ""}
                name="ira"
                onChange={(event) => {
                  setDegree(event.target.value);
                }}
              />
            </div>
            <div className="form-group" style={{ paddingTop: 20 }}>
              <input
                type="submit"
                value="Atualizar Professor"
                className="btn btn-primary"
              />
            </div>
          </form>
        ) : (
          <h1>Você deve estar logado para editar um professor.</h1>
        )}
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default EditTeacherPage;
