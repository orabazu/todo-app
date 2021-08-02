import React from 'react';
import Button, { ButtonColor } from './Button';

type Props = {
  data: string;
};

const TodoItem: React.FC<Props> = ({ data }): JSX.Element => {
  return (
    <div className="flex mb-4 items-center">
      <p className="w-full text-grey-darkest text-xl">{data}</p>
      <Button>Done</Button>

      <Button color={ButtonColor.Warning}>Remove</Button>
    </div>
  );

  //   <div className="flex mb-4 items-center">
  //   <p className="w-full line-through text-green-500 todoItem">
  //     Submit Todo App Component to Tailwind Components
  //   </p>
  //   <button className="w-32 p-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-500 border-gray-500 hover:bg-gray-500">
  //     Not Done
  //   </button>
  //   <button className="w-32  p-2 ml-2 border-2 rounded text-red-500 border-red-500 hover:text-white hover:bg-red-500">
  //     Remove
  //   </button>
  // </div>
};

export default TodoItem;
