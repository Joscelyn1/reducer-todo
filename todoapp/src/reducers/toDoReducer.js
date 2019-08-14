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
    case "COMPLETE_TODO":
      return {
        ...state,
        completed: !state.completed
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
