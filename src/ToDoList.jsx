import React from 'react';
import ToDoCard from './ToDoCard';

function ToDoList(props) {
  const { todos, handleDelete } = props;

  return (
    <div>
      {todos.map((todo, index) => (
        <ToDoCard {...props} key={index} handleDelete={handleDelete} index={index}>
          <p>{todo}</p>
        </ToDoCard>
      ))}
    </div>
  );
}

export default ToDoList;
