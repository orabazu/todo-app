import React from 'react';

import AddTodo from 'components/AddTodo';
import TodoItem from 'components/TodoItem';

type Props = {};

export const App: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="h-screen w-full bg-green-200 font-sans bg-hero bg-no-repeat bg-bottom bg-40%">
      <div className="p-8">
        <h1 className="text-purple-700 text-8xl text-center">Todo List</h1>
        <p className="text-black text-2xl text-center">Organize it all with TODO</p>
      </div>
      <div className="items-center justify-center flex">
        <div className="bg-white bg-opacity-75  rounded shadow p-6 m-4 w-full lg:w-10/12">
          <AddTodo></AddTodo>
          <div>
            <TodoItem data={'dhasui hduidhd ahsauhdiu ahdiu '}></TodoItem>
            <TodoItem data={'dhasui 123123 ahsauhdiu ahdiu '}></TodoItem>
            <TodoItem data={'dhasui vfsvfd ahsauhdiu ahdiu '}></TodoItem>
          </div>
        </div>
      </div>
    </div>
  );
};
