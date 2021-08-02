import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddTodo from 'components/AddTodo';
import TodoItem from 'components/TodoItem';
import { getTODOS } from 'actions/TODO';
import { TODOStateType } from 'reducers/TODO/types';

type Props = {};
type Store = {
  todo: TODOStateType;
};

export const App: React.FC<Props> = (): JSX.Element => {
  const todos = useSelector((state: Store) => state.todo.todos);
  const todosLoding = useSelector((state: Store) => state.todo.todosLoding);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTODOS());
    console.log(todos, 'todos');
  }, []);

  useEffect(() => {
    console.log(todos, 'todos');
  }, [todos]);

  const renderTodos = () =>
    todos?.map((todo) => <TodoItem key={todo.id} data={todo.title}></TodoItem>);

  return (
    <div className="min-h-screen h-full w-full bg-green-200 font-sans bg-hero bg-no-repeat bg-bottom bg-40%">
      <div className="p-8">
        <h1 className="text-purple-700 text-8xl text-center">Todo List</h1>
        <p className="text-black text-2xl text-center">Organize it all with TODO</p>
      </div>
      <div className="items-center justify-center flex">
        <div className="bg-white bg-opacity-75  rounded shadow p-6 m-4 w-full lg:w-10/12">
          <AddTodo></AddTodo>
          {todosLoding ? 'Loading ...' : renderTodos()}
        </div>
      </div>
    </div>
  );
};
