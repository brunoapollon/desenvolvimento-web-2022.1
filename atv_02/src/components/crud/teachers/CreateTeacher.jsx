import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import FirebaseContext from "../../../utils/FirebaseContext";
import FirebaseTeacherService from "../../../services/FirebaseTeacherService";

const CreateTeacherPage = (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => {
      return (
        <CreateTeacher firebase={firebase} userLogged={props.userLogged} />
      );
    }}
  </FirebaseContext.Consumer>
);

function CreateTeacher(props) {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newProfessor = { name, university, degree };
    // axios
    //   .post("http://localhost:3002/crud/professors/create", newProfessor)
    //   .then((res) => {
    //     console.log(res.data._id);
    //     alert(`Professor ${name} criado com sucesso.`);
    //     navigate("/listTeacher");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    FirebaseTeacherService.create(
      props.firebase.getFirestoreDb(),
      () => {
        navigate("/listProfessor");
      },
      newProfessor
    );
  };

  return (
    <>
      <main>
        <h2>Criar Professor</h2>
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
                name="degree"
                onChange={(event) => {
                  setDegree(event.target.value);
                }}
              />
            </div>
            <div className="form-group" style={{ paddingTop: 20 }}>
              <input
                type="submit"
                value="Criar Professor"
                className="btn btn-primary"
              />
            </div>
          </form>
        ) : (
          <h1>Você deve estar logado para criar um professor.</h1>
        )}
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default CreateTeacherPage;
