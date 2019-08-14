import React from "react";
import { ListGroupItem } from "shards-react";

function ToDo(props) {
  return <ListGroupItem>{props.toDo.toDo}</ListGroupItem>;
}

export default ToDo;
