import React, { useState } from 'react';

function ToDoInput(props) {
  const { handleAddTodos, todovalue, setValue, searchQuery, handleSearchChange } = props;
  const [description, setDescription] = useState("");

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex w-full">
        <input
          value={todovalue}
          onChange={(e) => setValue(e.target.value)}
          className='text-lg font-semibold bg-white rounded-lg h-12 px-4 border border-secondary shadow-sm focus:outline-none focus:ring-2 focus:ring-primary flex-1 mr-1'
          placeholder='Enter ToDo...'
        />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search tasks..."
          className='text-lg font-semibold bg-white rounded-lg h-12 px-4 border border-secondary shadow-sm focus:outline-none focus:ring-2 focus:ring-primary flex-1 ml-1'
        />
      </div>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className='text-lg font-semibold bg-white rounded-lg h-24 px-4 border border-secondary shadow-sm focus:outline-none focus:ring-2 focus:ring-primary w-full my-2'
        placeholder='Enter description...'
      />
      <button
        onClick={() => {
          handleAddTodos({ task: todovalue, description });
          setValue(""); // Clear the input after adding
          setDescription(""); // Clear the description after adding
        }}
        className='text-lg bg-primary text-white my-2 rounded-lg w-full h-12 shadow-md hover:bg-accent focus:outline-none focus:ring-2 focus:ring-primary'
      >
        Add
      </button>
    </div>
  );
}

export default ToDoInput;
