import { TODOResponse } from 'services/TODOService';

export type TODOStateType = {
  todos: TODOResponse[];
  todosLoding: boolean;
};
