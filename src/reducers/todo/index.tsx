import { TODOAction, TODO_ACTIONS } from 'actions/TODO/types';
import { TODOStateType } from './types';

const initialState: TODOStateType = {
  todos: [],
  todosLoding: false,
};

const todo = (state = initialState, action: TODOAction) => {
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
        todos: action.payload.data,
      };
    case TODO_ACTIONS.GET_TODOS_FAILURE:
      return {
        ...state,
        todosLoding: false,
      };
    default:
      return state;
  }
};

export default todo;
