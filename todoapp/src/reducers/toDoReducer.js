export const initialState = {
  toDo: "take out the trash",
  editing: false
};

export const toDoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_EDITING":
      return {
        ...state,
        editing: !state.editing
      };
    case "UPDATE_TODO":
      return {
        ...state,
        toDo: action.payload,
        editing: !state.editing
      };
    default:
      return state;
  }
};
