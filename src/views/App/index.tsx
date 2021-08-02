import React from 'react';

import AddTodo from 'components/AddTodo';

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
            <div className="flex mb-4 items-center">
              <p className="w-full text-grey-darkest text-xl">
                Add another component to Tailwind Components
              </p>
              <button className="w-32 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-500 border-green-500 hover:bg-green-500">
                Done
              </button>
              <button className="w-32  p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
                Remove
              </button>
            </div>
            <div className="flex mb-4 items-center">
              <p className="w-full line-through text-green-500 todoItem">
                Submit Todo App Component to Tailwind Components
              </p>
              <button className="w-32 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500">
                Not Done
              </button>
              <button className="w-32  p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
