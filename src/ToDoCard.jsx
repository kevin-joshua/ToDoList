import React, { useState } from 'react';

function ToDoCard(props) {
  const { todo, index, handleDelete, handleEdit } = props;
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full">
      <ul className='w-full'>
        <li key={index} className='flex flex-col bg-white my-2 mx-4 rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow duration-300'>
          <div className='flex items-center justify-between'>
            <span className='text-lg text-text font-medium'>{todo.task}</span>
            <div className='flex space-x-3'>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className='mt-2 pb-3 px-1 text-sm text-primary hover:underline'
              >
                {isExpanded ? 
                  <i className="fa-sharp fa-solid fa-caret-up text-accent hover:text-primary transition-colors duration-300"></i> 
                  : 
                  <i className="fa-solid fa-caret-down text-accent hover:text-primary transition-colors duration-300"></i>
                }
              </button>
              <button
                onClick={() => handleEdit(index)}
                className='text-accent hover:text-primary transition-colors duration-300'
              >
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button
                onClick={() => handleDelete(index)}
                className='text-accent hover:text-primary transition-colors duration-300'
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </div>

          {isExpanded && (
            <div className='mt-2 text-sm text-text'>
              <p><strong>Description:</strong> {todo.description}</p>
              <p><strong>Last Updated:</strong> {todo.timestamp}</p>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}


export default ToDoCard;


