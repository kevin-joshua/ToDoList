import React, { useState, useEffect } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todovalue, setValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch initial todo list from a JSON file
  useEffect(() => {
    fetch('/todos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setTodos(data);
      })
      .catch(error => console.error('Error loading todos:', error));
  }, []);

  // Add a new todo
  function handleAddTodos(newTodo) {
    if (newTodo.task !== "") {
      const currentdate = new Date();
      const timestamp = `${currentdate.getDate()}/${currentdate.getMonth() + 1}/${currentdate.getFullYear()}`;
      const updatedTodos = [...todos, { ...newTodo, timestamp }];
      setTodos(updatedTodos);
    }
  }

  // Delete a todo
  function handleDelete(index) {
    const updatedTodos = todos.filter((_, i) => index !== i);
    setTodos(updatedTodos);
  }

  // Edit a todo
  function handleEdit(index) {
    const todoToEdit = todos[index];
    setValue(todoToEdit.task);
    handleDelete(index);
  }

  // Handle search input change
  function handleSearchChange(e) {
    setSearchQuery(e.target.value);
  }

  // Filter todos based on search query
  const filteredTodos = todos.filter(todo =>
    todo.task.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className='min-h-screen flex flex-col items-center bg-background py-10 px-4'>
      <h1 className='text-5xl font-bold mb-6 text-primary-dark font-montserrat'>
        TODO LIST
      </h1>
      <div className="w-full max-w-lg">
        <ToDoInput 
          searchQuery={searchQuery} 
          handleSearchChange={handleSearchChange} 
          todovalue={todovalue} 
          setValue={setValue} 
          handleAddTodos={handleAddTodos} 
        />
        <ToDoList 
          handleEdit={handleEdit} 
          handleDelete={handleDelete} 
          todos={filteredTodos} 
        />
      </div>
    </main>
  );
}

export default App;
