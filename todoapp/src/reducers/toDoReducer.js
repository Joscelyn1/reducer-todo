export const initialState = {
  toDos: [
    { toDo: "take out the trash", completed: false, id: 1, edited: false },
    { toDo: "make the bed", completed: false, id: 2, edited: false },
    { toDo: "finish book", completed: false, id: 3, edited: false }
  ]
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        toDos: [
          ...state.toDos,
          {
            toDo: action.payload,
            completed: false,
            id: Date.now(),
            edited: false
          }
        ]
      };
    case "CLEAR_TODO":
      return {
        ...state,
        toDos: state.toDos.filter(todo => !todo.completed)
      };
    case "TOGGLE_EDIT_TODO":
      const editedToDos = [...state.toDos];
      editedToDos.map(toDo => {
        if (toDo.id === action.payload) {
          toDo.edited = !toDo.edited;
        }
      });
      return {
        ...state,
        toDos: editedToDos
      };
    case "CHANGE_TODO":
      const changedToDos = [...state.toDos];
      changedToDos.map(toDo => {
        if (toDo.id === action.payload.id) {
          changedToDos.splice(changedToDos.indexOf(toDo), 1, {
            toDo: action.payload.changedToDo,
            completed: false,
            id: Date.now(),
            edited: false
          });
        }
      });
      return {
        ...state,
        toDos: changedToDos
      };

    case "REMOVE_TODO":
      const deletedToDos = [...state.toDos];
      deletedToDos.map(toDo => {
        if (toDo.id === action.payload) {
          deletedToDos.splice(deletedToDos.indexOf(toDo), 1);
        }
      });
      return {
        ...state,
        toDos: deletedToDos
      };
    case "COMPLETE_TODO":
      const completedToDos = [...state.toDos];
      completedToDos.map(toDo => {
        if (toDo.id === action.payload) {
          toDo.completed = !toDo.completed;
        }
      });
      return {
        ...state,
        toDos: completedToDos
      };
    default:
      return state;
  }
};
