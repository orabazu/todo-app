import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TodoItem from 'components/TodoItem';
import { getTODOS } from 'actions/TODO';
import { TODOStateType } from 'reducers/TODO/types';

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
    console.log(todos, 'todos');
  }, []);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTempTitle(event.target.value);
  // };

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
