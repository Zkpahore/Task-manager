import React, { useState, useEffect } from 'react';

const TasksPage = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTask, setNewTask] = useState({ title: '', description: '' });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setTasks(data.slice(0, 10)); // limiting to 10 tasks for simplicity
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddTask = (e) => {
    e.preventDefault();
    const newTaskWithId = {
      ...newTask,
      completed: false,
      id: `${new Date().getTime()}-${tasks.length + 1}`, // unique ID generation
    };
    setTasks([...tasks, newTaskWithId]);
    setNewTask({ title: '', description: '' });
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1 className="text-4xl font-bold mb-4">Tasks</h1>
      <form onSubmit={handleAddTask} className="mb-4 flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          className="border p-2"
          required
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          className="border p-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Add Task</button>
      </form>
      <ul className="space-y-4">
        {tasks.map(task => (
          <li key={task.id} className="border p-4 rounded-md">
            <h2 className="text-2xl font-bold">{task.title}</h2>
            <p>{task.description}</p>
            <p>Status: {task.completed ? 'Completed' : 'Not Completed'}</p>
            <div className="flex space-x-2 mt-2">
              <button onClick={() => handleToggleComplete(task.id)} className="bg-green-500 text-white p-2 rounded">
                {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
              </button>
              <button onClick={() => handleDeleteTask(task.id)} className="bg-red-500 text-white p-2 rounded">
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksPage;
