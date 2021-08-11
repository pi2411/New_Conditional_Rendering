import React from "react";
import Sorce from "../Sorce";
function Input() {
  return (
    <div>
      {Sorce.map((nackSorce) => (
        <input
          key={nackSorce.id}
          type={nackSorce.type}
          placeholder={nackSorce.plaseholder}
        />
      ))}
    </div>
  );
}
export default Input;
