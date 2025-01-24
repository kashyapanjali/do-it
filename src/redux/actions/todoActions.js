export const setTasks = (tasks) => ({
  type: 'SET_TASKS',
  payload: tasks
});

export const addTask = (task) => ({
  type: 'ADD_TASK',
  payload: task
});

export const toggleComplete = (taskId) => ({
  type: 'TOGGLE_COMPLETE',
  payload: taskId
});

export const toggleImportant = (taskId) => ({
  type: 'TOGGLE_IMPORTANT',
  payload: taskId
});

export const deleteTask = (taskId) => ({
  type: 'DELETE_TASK',
  payload: taskId
});
