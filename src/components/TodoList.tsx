import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoItem from 'components/TodoItem';
import { getTODOS } from 'actions/todo';
import { TODOStateType } from 'reducers/todo/types';

type Props = {};
type Store = {
  todo: TODOStateType;
};

export const TodoList: React.FC<Props> = (): JSX.Element => {
  const todos = useSelector((state: Store) => state.todo.todos);
  const todosLoding = useSelector((state: Store) => state.todo.todosLoding);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTODOS());
  }, []);

  return (
    <>
      {todosLoding
        ? 'Loading ...'
        : todos?.map((todo) => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              id={todo.id}
              isDone={todo.isDone}
              // onChange={handleChange}
            ></TodoItem>
          ))}
    </>
  );
};
