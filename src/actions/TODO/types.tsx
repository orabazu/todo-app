import { TodoResponse } from 'services/TodoService';

export enum TODO_ACTIONS {
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  SET_DELETE_TODO,
  SET_DONE_TODO,
  SET_EDIT_TODO,
  SET_ADD_TODO_BEGIN,
  SET_ADD_TODO_SUCCESS,
  SET_ADD_TODO_FAILURE,
  SET_ADD_TODO,
}

export type TODOAction = {
  type: TODO_ACTIONS;
  payload?: {
    todoList?: TodoResponse[];
    todo?: TodoResponse;
    error?: Error;
    id?: number;
    title?: string;
  };
};

export type TODODispatch = (args: TODOAction) => TODOAction;
