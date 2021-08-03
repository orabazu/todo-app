import { setAddTodo } from 'actions/todo';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TODOStateType } from 'reducers/todo/types';

import Button from './Button';

type Props = {};
type Store = {
  todo: TODOStateType;
};

const AddTodo: React.FC<Props> = (): JSX.Element => {
  const [newTodo, setNewTodo] = useState('');
  const dispatch = useDispatch();
  const todoLoading = useSelector((state: Store) => state.todo.todoLoading);

  const onClick = () => {
    dispatch(setAddTodo(newTodo));
    setNewTodo('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(event.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      dispatch(setAddTodo(newTodo));
      setNewTodo('');
    }
  };

  return (
    <div className="flex my-4">
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        value={newTodo}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={onClick} isDisabled={todoLoading || !newTodo.length}>
        Add
      </Button>
    </div>
  );
};

export default AddTodo;
