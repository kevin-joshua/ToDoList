import React, { useState, useEffect } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

function App() {
  const [todos, setTodo] = useState([]);
  const [todovalue, setValue] = useState("");

  function persistData() {
    localStorage.setItem('todos', JSON.stringify({ todos }));
  }

  function handleAddTodos(newTodo) {
    if(!newTodo==""){
    const TodoList = [...todos, newTodo];
    setTodo(TodoList);
    persistData();}
  }

  function handleDelete(index) {
    const TodoList = todos.filter((todo, i) => index !== i);
    setTodo(TodoList);
    persistData();
  }

  function handleEdit(index) {
    const valueEdit = todos[index];
    setValue(valueEdit);
    handleDelete(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return;
    }
    localTodos = JSON.parse(localTodos).todos;
    setTodo(localTodos);
  }, []); // Run only once on mount

  return (
    <main className='min-h-screen flex flex-col items-center bg-pastel-blue py-10'>
      <h1 className='text-4xl font-bold font-fancy mb-5'>ToDo List</h1>
      <ToDoInput todovalue={todovalue} setValue={setValue} handleAddTodos={handleAddTodos} />
      <ToDoList handleEdit={handleEdit} handleDelete={handleDelete} todos={todos} />
    </main>
  );
}

export default App;
