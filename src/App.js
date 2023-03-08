import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [completedCount, setCompletedCount] = useState(0);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo('');
  };

  const handleRemoveTodo = (index) => {
    const deletedTodo = todos[index];
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setDoneTodos([...doneTodos, deletedTodo]);
    setCompletedCount(completedCount + 1);
  };

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTodos = todos.filter(todo => todo.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredDoneTodos = doneTodos.filter(todo => todo.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <div className="search-container">
        <input type="text" placeholder="Search todos" value={searchTerm} onChange={handleSearchInputChange} />
      </div>
      <div className="todo-container">
        <h2>Todos</h2>
        <ul>
          {filteredTodos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleRemoveTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <div className="add-todo">
          <input type="text" value={newTodo} onChange={handleInputChange} />
          <button onClick={handleAddTodo}>Add</button>
        </div>
      </div>
      <div className="done-container">
        <h2>Done ({completedCount})</h2>
        <ul>
          {filteredDoneTodos.map((todo, index) => (
            <li key={index}>
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


export default TodoList;




