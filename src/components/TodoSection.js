// TodoSection.js
import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTask, toggleComplete, toggleImportant, deleteTask } from '../redux/actions/todoActions';

const TodoSection = () => {
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.todos.tasks);

  const handleAddTask = () => {
    if (newTask.trim()) {
      dispatch(addTask({
        id: Date.now(),
        text: newTask,
        completed: false,
        important: false
      }));
      setNewTask("");
    }
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete(id));
  };

  const handleToggleImportant = (id) => {
    dispatch(toggleImportant(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div className="todo-section">
      <div className="todo-header">
        <input
          type="text"
          placeholder="Add a Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="task-list">
        <h3>Pending</h3>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <div className="task-item" key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
              />
              <p>{task.text}</p>
              <span
                className={`star ${task.important ? "important" : ""}`}
                onClick={() => handleToggleImportant(task.id)}
              >
                ⭐
              </span>
              <button onClick={() => handleDeleteTask(task.id)}>❌</button>
            </div>
          ))}
        <h3>Completed</h3>
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <div className="task-item completed" key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleComplete(task.id)}
              />
              <p>{task.text}</p>
              <button onClick={() => handleDeleteTask(task.id)}>❌</button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TodoSection;