import { useState } from 'react';
import { ThemeToggle } from "./components/theme-toggle";
import { ColorThemeSwitcher } from "./components/color-theme-switcher";
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import './App.css';

function App() {
  // State to hold the list of tasks
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Learn Tauri', completed: true },
    { id: 2, text: 'Build a tasks app', completed: false },
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Date.now(), // Simple way to generate a unique ID
      text: text,
      completed: false,
    };
    // Update the state with the new task
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto mt-8 p-4">
      {/* Add w-full to the header to make it span the container */}
      <header className="flex w-full justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Tauri Tasks</h1>
        <div className="flex items-center gap-2">
          <ColorThemeSwitcher />
          <ThemeToggle />
        </div>
      </header>

      {/* Add w-full to the main section */}
      <main className="w-full">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>My Tasks</CardTitle>
            <CardDescription>Add a new task to your list.</CardDescription>
            <div className="pt-2">
              <AddTaskForm addTask={addTask} />
            </div>
          </CardHeader>
          <CardContent>
            <TaskList
              tasks={tasks}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
            />
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

export default App;