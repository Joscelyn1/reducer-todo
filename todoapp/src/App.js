import React, { useState, useReducer } from "react";
import ListOfToDos from "./components/ListOfToDos.js";
import "./App.css";
import { Container } from "shards-react";
import { initialState, toDoReducer } from "./reducers/toDoReducer.js";
import ToDoForm from "./components/ToDoForm.js";

function App() {
  const [state, dispatch] = useReducer(toDoReducer, initialState);

  /*  toDo: ["take out the trash", "make bed", "finish book"],
  editing: false*/

  return (
    <Container className="App">
      <h1>To Do List</h1>
      <ListOfToDos dispatch={dispatch} state={state} />
      <ToDoForm dispatch={dispatch} />
    </Container>
  );
}

export default App;
