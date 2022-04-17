import React, { useState } from "react";
import { Link } from "react-router-dom";

function CreateTeacher() {
  const [name, setName] = useState("");
  const [university, setUniversity] = useState("");
  const [degree, setDegree] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    console.log(university);
    console.log(degree);
  };

  return (
    <>
      <main>
        <h2>Criar Professor</h2>
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
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default CreateTeacher;
