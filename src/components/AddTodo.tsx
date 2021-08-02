import React from 'react';
import Button from './Button';

type Props = {};

const AddTodo: React.FC<Props> = (): JSX.Element => {
  return (
    <div className="flex my-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
      />
      <Button>Add</Button>
    </div>
  );
};

export default AddTodo;
