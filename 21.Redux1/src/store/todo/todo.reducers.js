const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { todoList: [...state.todoList, action.payload] };
    case "DELETE_TODO":
      const updatedTodoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      return { todoList: updatedTodoList };
    default:
      return state;
  }
};
