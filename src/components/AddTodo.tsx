import React from 'react';

type Props = {};

const AddTodo: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="flex my-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
      />
      <button className="flex-no-shrink p-2 border-2 rounded text-indigo-600 border-indigo-600 hover:text-white hover:bg-indigo-600">
        Add
      </button>
    </div>
  );
};

export default AddTodo;
