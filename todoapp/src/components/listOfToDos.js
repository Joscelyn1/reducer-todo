import React, { useState, useReducer } from "react";
import Icon from "@material-ui/core/Icon";
import { initialState, toDoReducer } from "../reducers/titleReducer";
// actions -
// TOGGLE_EDITING
// UPDATE_TODO

const ListOfToDos = () => {
  const [newToDoText, setNewToDoText] = useState();

  // useReducer - takes in a reducer, and an initialState obj
  // returns - a state obj, and the dispatch fn
  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleChanges = e => {
    setNewToDoText(e.target.value);
  };

  return (
    <div>
      {!state.editing ? (
        <h1>
          {state.toDo}{" "}
          <i
            onClick={() => dispatch({ type: "TOGGLE_EDITING" })}
            class="material-icons"
          >
            edit
          </i>
        </h1>
      ) : (
        <div>
          <input
            className="title-input"
            type="text"
            name="newTitleText"
            value={newTitleText}
            onChange={handleChanges}
          />
          <button
            onClick={() =>
              dispatch({ type: "UPDATE_TODO", payload: newToDoText })
            }
          >
            Update title
          </button>
        </div>
      )}
    </div>
  );
};

export default ListOfToDos;
