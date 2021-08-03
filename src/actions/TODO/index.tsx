import { TODOResponse } from 'services/TODOService';
import { todoService } from 'services/TODOService';
import { TODO_ACTIONS, TODODispatch, TODOAction } from './types';

export const getTODOSBegin = (): TODOAction => ({
  type: TODO_ACTIONS.GET_TODOS_BEGIN,
});

export const getTODOSSuccess = (data: TODOResponse[]): TODOAction => ({
  type: TODO_ACTIONS.GET_TODOS_SUCCESS,
  payload: { data },
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
      console.log(res);
      dispatch(getTODOSSuccess(res));
      // return 'success';
    } catch (error) {
      dispatch(getTODOSFailure(error));
      // return 'err';
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
