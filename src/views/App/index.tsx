import React from 'react';

type Props = {};

export const App: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="h-100 w-full flex items-center justify-center bg-green-200 font-sans">
      <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-10/12">
        <div className="mb-4">
          <h1 className="text-grey-800 text-4xl">Todo List</h1>
          <div className="flex mt-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
              placeholder="Add Todo"
            />
            <button className="flex-no-shrink p-2 border-2 rounded text-indigo-600 border-indigo-600 hover:text-white hover:bg-indigo-600">
              Add
            </button>
          </div>
        </div>
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
            <button className="w-32 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey-500 border-grey-500 hover:bg-grey-500">
              Not Done
            </button>
            <button className="w-32  p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
