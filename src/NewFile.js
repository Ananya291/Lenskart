import React from "react";

function NewFile() {
  function sayHello(...names) {
    console.log(`${names}`);
  }

  sayHello("a", "b", "c", "d", "e", "f", "g");

  return (
    <div>
      <h1>Html</h1>
      <h1>Html</h1>
    </div>
  );
}

export default NewFile;
