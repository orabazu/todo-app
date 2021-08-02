import { TODOResponse } from 'src/services/TODOService';

export enum TODO_ACTIONS {
  GET_TODOS_BEGIN,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
}

export type TODOAction = {
  type: TODO_ACTIONS;
  payload?: {
    data?: TODOResponse[];
    error?: Error;
  };
};

export type TODODispatch = (args: TODOAction) => TODOAction;
