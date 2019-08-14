import React, { useState } from "react";
import { Button, FormInput, Form } from "shards-react";

function ToDoForm(props) {
  const [toDo, setToDo] = useState();
  const handleChanges = e => {
    setToDo(e.target.value);
  };
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <FormInput
        className="todo-input"
        type="text"
        id="add-todo-form"
        name="newToDo"
        value={toDo}
        onChange={handleChanges}
      />
      <Button
        theme="primary"
        onClick={() => {
          props.dispatch({ type: "ADD_TODO", payload: toDo });
        }}
      >
        Add ToDo
      </Button>
      <Button
        theme="danger"
        onClick={() => {
          props.dispatch({ type: "CLEAR_TODO" });
        }}
      >
        Clear Completed
      </Button>
    </Form>
  );
}

export default ToDoForm;
