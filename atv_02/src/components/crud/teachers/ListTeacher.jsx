import * as React from "react";
import { Link } from "react-router-dom";

import TeacherTableRow from "./TeacherTableRow";
import { teachers } from "./data.js";

function Listteacher() {
  function generateTable() {
    if (!teachers) return;
    return teachers.map((teacher, i) => {
      return <TeacherTableRow teacher={teacher} key={i} />;
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
