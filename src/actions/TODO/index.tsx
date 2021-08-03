import { TodoResponse } from 'services/TodoService';
import { todoService } from 'services/TodoService';
import { TODO_ACTIONS, TODODispatch, TODOAction } from './types';

export const getTODOSBegin = (): TODOAction => ({
  type: TODO_ACTIONS.GET_TODOS_BEGIN,
});

export const getTODOSSuccess = (todoList: TodoResponse[]): TODOAction => ({
  type: TODO_ACTIONS.GET_TODOS_SUCCESS,
  payload: { todoList },
});

export const getTODOSFailure = (error: Error): TODOAction => ({
  type: TODO_ACTIONS.GET_TODOS_FAILURE,
  payload: { error },
});

export const getTODOS =
  () =>
  async (dispatch: TODODispatch): Promise<void> => {
    dispatch(getTODOSBegin());
    try {
      const res = await todoService.getTODOS('userId=1');
      dispatch(getTODOSSuccess(res));
    } catch (error) {
      dispatch(getTODOSFailure(error));
    }
  };

export const setDeleteTodo = (id: number): TODOAction => ({
  type: TODO_ACTIONS.SET_DELETE_TODO,
  payload: { id },
});

export const setDoneTodo = (id: number): TODOAction => ({
  type: TODO_ACTIONS.SET_DONE_TODO,
  payload: { id },
});

export const setEditTodo = (id: number, title: string): TODOAction => ({
  type: TODO_ACTIONS.SET_EDIT_TODO,
  payload: { id, title },
});

export const addTODOBegin = (): TODOAction => ({
  type: TODO_ACTIONS.SET_ADD_TODO_BEGIN,
});

export const addTODOSuccess = (todo: TodoResponse): TODOAction => ({
  type: TODO_ACTIONS.SET_ADD_TODO_SUCCESS,
  payload: { todo },
});

export const addTODOFailure = (error: Error): TODOAction => ({
  type: TODO_ACTIONS.SET_ADD_TODO_FAILURE,
  payload: { error },
});

// mock async behavior here
export const setAddTodo =
  (title: string) =>
  async (dispatch: TODODispatch): Promise<void> => {
    dispatch(addTODOBegin());
    try {
      setTimeout(() => {
        const newTodo: TodoResponse = {
          id: Math.floor(900000 * Math.random()) + 100000,
          title,
          body: '',
          userId: 1,
        };
        dispatch(addTODOSuccess(newTodo));
      }, 1500);
    } catch (error) {
      dispatch(addTODOFailure(error));
    }
  };

// export const setAddTodo = (title: string): TODOAction => ({
//   type: TODO_ACTIONS.SET_ADD_TODO,
//   payload: { title },
// });
