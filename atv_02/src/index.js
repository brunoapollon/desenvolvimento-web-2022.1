import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import Firebase from "./utils/Firebase";
import FirebaseContext from "./utils/FirebaseContext";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>
);

// ReactDOM.render(
//   <FirebaseContext.Provider value={new Firebase()}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </FirebaseContext.Provider>,
//   document.getElementById("root")
// );
