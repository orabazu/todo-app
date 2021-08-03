import { TODOAction, TODO_ACTIONS } from 'actions/todo/types';
import { TODOStateType } from './types';

const initialState: TODOStateType = {
  todos: [],
  todosLoding: false,
  todoLoading: false,
};

const todo = (state = initialState, action: TODOAction): TODOStateType => {
  switch (action.type) {
    case TODO_ACTIONS.GET_TODOS_BEGIN:
      return {
        ...state,
        todosLoding: true,
      };
    case TODO_ACTIONS.GET_TODOS_SUCCESS:
      return {
        ...state,
        todosLoding: false,
        todos: action.payload.todoList,
      };
    case TODO_ACTIONS.GET_TODOS_FAILURE:
      return {
        ...state,
        todosLoding: false,
      };
    case TODO_ACTIONS.SET_DELETE_TODO: {
      const todos = state.todos.reduce((acc, curr) => {
        if (curr.id !== action.payload.id) {
          acc.push(curr);
        }
        return acc;
      }, []);
      return {
        ...state,
        todos,
      };
    }
    case TODO_ACTIONS.SET_DONE_TODO: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      });
      return {
        ...state,
        todos,
      };
    }
    case TODO_ACTIONS.SET_EDIT_TODO: {
      const todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.title = action.payload.title;
        }
        return todo;
      });
      return {
        ...state,
        todos,
      };
    }
    case TODO_ACTIONS.SET_ADD_TODO_BEGIN:
      return {
        ...state,
        todoLoading: true,
      };
    case TODO_ACTIONS.SET_ADD_TODO_SUCCESS: {
      const todos = [action.payload.todo, ...state.todos];
      return {
        ...state,
        todos,
        todoLoading: false,
      };
    }
    case TODO_ACTIONS.SET_ADD_TODO_FAILURE:
      return {
        ...state,
        todoLoading: false,
      };
    default:
      return state;
  }
};

export default todo;
