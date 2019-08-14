import React, { useState } from "react";
import { ListGroupItem, Button, FormInput, Form } from "shards-react";
import { Icon } from "@material-ui/core";

function ToDo(props) {
  const [changedToDo, setChangedToDo] = useState("");
  const handleChanges = e => {
    setChangedToDo(e.target.value);
  };
  return (
    <ListGroupItem
      id="mytodo"
      className={props.toDo.completed ? "completed" : ""}
    >
      <p
        onClick={() =>
          props.dispatch({ type: "COMPLETE_TODO", payload: props.toDo.id })
        }
      >
        {props.toDo.toDo}
      </p>
      <Icon
        onClick={() =>
          props.dispatch({ type: "TOGGLE_EDIT_TODO", payload: props.toDo.id })
        }
      >
        edit
      </Icon>
      <Icon
        onClick={() =>
          props.dispatch({ type: "REMOVE_TODO", payload: props.toDo.id })
        }
      >
        close
      </Icon>
      {props.toDo.edited ? (
        <Form onSubmit={e => e.preventDefault()}>
          <FormInput
            className="todo-input"
            type="text"
            id="edit-todo-form"
            onChange={handleChanges}
            name="editedToDo"
            value={changedToDo}
          />
          <Button
            onClick={() =>
              props.dispatch({
                type: "CHANGE_TODO",
                payload: { id: props.toDo.id, changedToDo: changedToDo }
              })
            }
          >
            submit
          </Button>
        </Form>
      ) : (
        ""
      )}
    </ListGroupItem>
  );
}

export default ToDo;
