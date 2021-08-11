import React from "react";
import Login from "./Login";

const isLogged = true;

function App() {
  return (
    <div className="container">
      {!isLogged && <h1>Hello</h1>}
      {isLogged && <Login />}
    </div>
  );
}

export default App;
