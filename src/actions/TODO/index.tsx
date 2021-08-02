import { TODOResponse } from 'services/TODOService';
import { todoService } from 'services/TODOService';
import { TODO_ACTIONS, TODODispatch } from './types';

export const getTODOSBegin = () => ({
  type: TODO_ACTIONS.GET_TODOS_BEGIN,
});

export const getTODOSSuccess = (data: TODOResponse[]) => ({
  type: TODO_ACTIONS.GET_TODOS_SUCCESS,
  payload: { data },
});

export const getTODOSFailure = (error: Error) => ({
  type: TODO_ACTIONS.GET_TODOS_FAILURE,
  payload: { error },
});

export const getTODOS = () => async (dispatch: TODODispatch) => {
  dispatch(getTODOSBegin());
  try {
    const res = await todoService.getTODOS();
    console.log(res);
    // dispatch(getTODOSSuccess(res.data));
    return 'success';
  } catch (error) {
    dispatch(getTODOSFailure(error));
    return 'err';
  }
};
