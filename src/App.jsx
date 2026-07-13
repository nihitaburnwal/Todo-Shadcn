import { useState, useEffect } from "react";

import Header from "./components/ui/Header";
import SummaryCards from "./components/ui/SummaryCards";
import AddTaskButton from "./components/ui/AddTaskButton";
import TaskDialog from "./components/ui/TaskDialog";
import TaskList from "./components/ui/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const [editingTask, setEditingTask] = useState(null);
  const [editingIndex, setEditingIndex] = useState(-1);

  useEffect(function () {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));

    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(index) {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  }

  function toggleComplete(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function openEdit(index) {
    setEditingTask(tasks[index]);
    setEditingIndex(index);
    setOpen(true);
  }

  function updateTask(task) {
    const newTasks = [...tasks];
    newTasks[editingIndex] = task;
    setTasks(newTasks);

    setEditingTask(null);
    setEditingIndex(-1);
  }

  function closeDialog() {
    setOpen(false);
    setEditingTask(null);
    setEditingIndex(-1);
  }

  const filteredTasks = tasks
    .map(function (task, index) {
      return {
        ...task,
        originalIndex: index,
      };
    })
    .filter(function (task) {
      return (
        task.title.toLowerCase().includes(search.toLowerCase()) ||
        task.description.toLowerCase().includes(search.toLowerCase())
      );
    });

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-6xl px-6 py-10">

        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Header />
          <AddTaskButton onClick={() => setOpen(true)} />
        </div>

        <SummaryCards tasks={tasks} />

        <div className="mt-8">
          <input
            className="w-full rounded-xl border bg-white p-3 outline-none"
            placeholder="Search Tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <TaskList
          tasks={filteredTasks}
          deleteTask={deleteTask}
          openEdit={openEdit}
          toggleComplete={toggleComplete}
        />

        <TaskDialog
          open={open}
          setOpen={closeDialog}
          addTask={addTask}
          updateTask={updateTask}
          editTask={editingTask}
        />

      </div>

    </div>
  );
}

export default App;