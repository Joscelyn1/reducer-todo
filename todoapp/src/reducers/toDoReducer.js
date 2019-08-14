export const initialState = {
  toDos: [
    { toDo: "take out the trash", completed: false, id: 1 },
    { toDo: "make the bed", completed: false, id: 2 },
    { toDo: "finish book", completed: false, id: 3 }
  ]
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDos: [
          ...state.toDos,
          { toDo: action.payload, completed: false, id: Date.now() }
        ]
      };
    case "CLEAR_TODO":
      return {
        ...state,
        toDos: state.toDos.filter(todo => !todo.completed)
      };
    case "COMPLETE_TODO":
      const changedToDos = [...state.toDos];
      changedToDos.map(toDo => {
        if (toDo.id === action.payload) {
          toDo.completed = !toDo.completed;
        }
      });
    case "REMOVE_TODO":
      const editedToDos = [...state.toDos];
      editedToDos.map(toDo => {
        if (toDo.id === action.payload) {
          editedToDos.splice(editedToDos.indexOf(toDo), 1);
        }
      });
      return {
        ...state,
        toDos: editedToDos
      };
    default:
      return state;
  }
};

/*

      toDos: this.state.toDos.map(toDo => {
        if (toDo.id === id) {
          return {
            ...toDo,

            completed: !toDo.completed
          };
        } else {
          return toDo;
        }
      }

      */
