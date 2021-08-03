import { setDeleteTodo, setDoneTodo } from 'actions/TODO';
import React from 'react';
import { useDispatch } from 'react-redux';
import Button, { ButtonColor } from './Button';

type Props = {
  title: string;
  id: number;
  isDone: boolean;
};

const TodoItem: React.FC<Props> = ({ title, id, isDone }): JSX.Element => {
  const doneClass = !isDone ? '' : 'line-through text-green-500';
  const dispatch = useDispatch();
  const onRemove = () => {
    dispatch(setDeleteTodo(id));
  };
  const onDone = () => {
    dispatch(setDoneTodo(id));
  };
  return (
    <div className="flex mb-4 items-center">
      <p className={`w-full text-grey-darkest text-xl ${doneClass}`}>{title}</p>
      {isDone ? <Button onClick={onDone}>Not Done</Button> : <Button onClick={onDone}>Done</Button>}

      <Button color={ButtonColor.Warning} onClick={onRemove}>
        Remove
      </Button>
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
