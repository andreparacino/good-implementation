import { useState, useCallback } from "react";
import styles from "./App.module.css";
import Todo from "./components/Todo";
import AddTodo from "./components/AddTodo";
import { DEFAULT_TODO_LIST } from "./helpers/constants";

function App() {
  const [todos, setTodos] = useState(DEFAULT_TODO_LIST);

  const handleAddTodo = (todo) => setTodos((prevTodos) => [todo, ...prevTodos]);

  const handleTodoStatusChange = useCallback((id) => {
    setTodos((prevTodos) => [
      ...prevTodos.map((todo) => {
        if (todo.id !== id) return todo;

        return { ...todo, isCompleted: !todo.isCompleted };
      }),
    ]);
  }, []);

  const handleDelete = useCallback((id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }, []);

  return (
    <div className={styles.App}>
      <h1>Todos</h1>
      <AddTodo onAdd={handleAddTodo} />
      <div className={styles.Todos}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onStatusChange={handleTodoStatusChange}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
