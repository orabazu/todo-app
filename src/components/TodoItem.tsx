import React, { useEffect, useState } from 'react';
import { useDebounce } from 'use-lodash-debounce';
import { useDispatch } from 'react-redux';

import { setDeleteTodo, setDoneTodo, setEditTodo } from 'actions/TODO';
import Button, { ButtonColor } from './Button';

type Props = {
  title: string;
  id: number;
  isDone: boolean;
};

const TodoItem: React.FC<Props> = ({ title, id, isDone }): JSX.Element => {
  const doneClass = !isDone ? '' : 'line-through text-green-500';

  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const defaultValue = title;
  const [tempTitle, setTempTitle] = useState(defaultValue);
  const debouncedTitle = useDebounce(tempTitle, 1000);

  useEffect(() => {
    // Ideally dispatch server call here
    dispatch(setEditTodo(id, debouncedTitle));
  }, [debouncedTitle]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempTitle(event.target.value);
  };

  const onRemove = () => {
    dispatch(setDeleteTodo(id));
  };
  const onDone = () => {
    dispatch(setDoneTodo(id));
  };

  const renderLabel = () => (
    <p className={`w-full text-grey-darkest text-xl ${doneClass}`}>{title}</p>
  );

  const renderInput = () => (
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
      placeholder="Add Todo"
      value={tempTitle}
      onChange={handleChange}
    />
  );

  return (
    <div className="flex mb-4 items-center">
      {!isEditing ? renderLabel() : renderInput()}

      <span className="cursor-pointer" onClick={() => setIsEditing(!isEditing)}>
        {!isEditing ? '✏️' : '✅'}
      </span>
      {isDone ? (
        <Button onClick={onDone} color={ButtonColor.Secondary}>
          Not Done
        </Button>
      ) : (
        <Button onClick={onDone} color={ButtonColor.Success}>
          Done
        </Button>
      )}
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
