import React from "react";
import { ListGroupItem } from "shards-react";
import { Icon } from "@material-ui/core";

function ToDo(props) {
  return (
    <ListGroupItem
      id="mytodo"
      className={props.toDo.completed ? "completed" : ""}
    >
      <div className="todo">
        <p
          onClick={() =>
            props.dispatch({ type: "COMPLETE_TODO", payload: props.toDo.id })
          }
        >
          {props.toDo.toDo}
        </p>
      </div>
      <Icon>edit</Icon>
      <Icon
        onClick={() =>
          props.dispatch({ type: "REMOVE_TODO", payload: props.toDo.id })
        }
      >
        close
      </Icon>
    </ListGroupItem>
  );
}

export default ToDo;
