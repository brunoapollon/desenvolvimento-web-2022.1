import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { teachers } from "./data.js";

function EditTeacher() {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");
  const params = useParams();

  //https://pt-br.reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    //console.log(params.id)
    const teacher = teachers[params.id];
    //console.log(teacher)
    setName(teacher.name);
    setUniversity(teacher.university);
    setDegree(teacher.degree);
  }, [params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(university);
    console.log(degree);
  };

  return (
    <>
      <main>
        <h2>Editar Professor</h2>
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
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default EditTeacher;
