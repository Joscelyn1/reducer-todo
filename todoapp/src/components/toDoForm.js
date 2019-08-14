import React, { useState } from "react";
import { Button, FormInput, Form } from "shards-react";

function ToDoForm(props) {
  const [toDo, setToDo] = useState();
  const handleChanges = e => {
    // props.dispatch({ type: "ADD_TODO", payload: })
    setToDo(e.target.value);
  };
  return (
    <Form onSubmit={e => e.preventDefault()}>
      <FormInput
        className="todo-input"
        type="text"
        name="newToDo"
        value={toDo}
        onChange={handleChanges}
      />
      <Button
        theme="primary"
        onClick={() => props.dispatch({ type: "ADD_TODO", payload: toDo })}
      >
        Add ToDo
      </Button>
    </Form>
  );
}

export default ToDoForm;
