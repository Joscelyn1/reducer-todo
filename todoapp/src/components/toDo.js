import React from "react";
import { ListGroupItem } from "shards-react";

function ToDo(props) {
  return (
    <ListGroupItem
      className={props.toDo.completed ? "completed" : ""}
      onClick={() =>
        props.dispatch({ type: "COMPLETE_TODO", payload: props.toDo.id })
      }
    >
      {props.toDo.toDo}
    </ListGroupItem>
  );
}

export default ToDo;
