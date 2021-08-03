import { TodoResponse } from 'services/TodoService';

export type TODOStateType = {
  todos: TodoResponse[];
  todosLoding: boolean;
  todoLoading: boolean;
};
