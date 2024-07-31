import React from 'react';
import ToDoCard from './ToDoCard';

function ToDoList(props) {
  const { todos, handleDelete, handleEdit } = props;

  return (
    <div>
      {todos.map((todo, index) => (
        <ToDoCard
          key={index}
          index={index}
          todo={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
}

export default ToDoList;
