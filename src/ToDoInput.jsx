import React, { useState } from 'react';

function ToDoInput(props) {
  const { handleAddTodos,todovalue, setValue } = props;
  

  return (
    <div className="flex flex-col items-center w-full max-w-lg">
      <input
        value={todovalue}
        onChange={(e) => {
          setValue(e.target.value);
        }}
         className='text-xl font-serif font-semibold bg-white my-2 mx-3 rounded-md w-full max-w-md h-12 px-5 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500'
        placeholder='Enter ToDo....'
      />
      <button
        onClick={() => {
          handleAddTodos(todovalue);
          setValue(""); // Clear the input after adding
        }}
        className='text-xl bg-blue-500 text-white my-2 mx-2 rounded-md w-full max-w-md h-12 px-5 py-1 shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        Add
      </button>
    </div>
  );
}

export default ToDoInput;
