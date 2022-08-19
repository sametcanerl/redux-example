import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from '../types/todoTypes';

const initialState = {
  todoList: [
    { id: new Date().getTime(), text: 'Work On Redux', completed: true },
  ],
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case TOGGLE_TODO:
      
      
      return {
        ...state,
        todoList: state.todoList.map((todo=> todo.id === payload ? {...todo,completed:!todo.completed}: todo))
      };
    case DELETE_TODO:
      const newList = state.todoList.filter((todo) => payload !== todo.id);
      return {
        ...state,
        todoList: newList,
      };
    case CLEAR_TODO:
      return initialState;
    default:
      return state;
  }
};
export default todoReducer;
