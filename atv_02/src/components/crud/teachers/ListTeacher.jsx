import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import TeacherTableRow from "./TeacherTableRow";
// import { teachers } from "./data.js";

function Listteacher() {
  const [professors, setProfessors] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/crud/professors/list")
      .then((res) => {
        setProfessors(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function deleteProfessorById(_id) {
    let professorsTemp = professors;
    for (let i = 0; i < professorsTemp.length; i++) {
      if (professorsTemp[i]._id === _id) {
        //console.log("1")
        professorsTemp.splice(i, 1);
      }
    }
    setProfessors([...professorsTemp]);
  }

  function generateTable() {
    if (!professors) return;
    return professors.map((professor, i) => {
      return (
        <TeacherTableRow
          teacher={professor}
          key={i}
          deleteProfessorById={deleteProfessorById}
        />
      );
    });
  }

  return (
    <>
      <main>
        <h2>List teacher</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Universidade</th>
              <th>Titulação</th>
              <th colSpan={2} style={{ textAlign: "center" }}>
                Ações
              </th>
            </tr>
          </thead>
          <tbody>{generateTable()}</tbody>
        </table>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default Listteacher;
