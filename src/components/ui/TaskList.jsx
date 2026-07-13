import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  deleteTask,
  openEdit,
  toggleComplete,
}) {

  if (tasks.length === 0) {
    return (
      <div className="mt-10 rounded-2xl border-2 border-dashed bg-white p-12 text-center shadow-sm">

        <h2 className="text-2xl font-bold text-slate-700">
          No Tasks Yet
        </h2>

        <p className="mt-3 text-slate-500">
          Click <b>Add Task</b> to create your first task.
        </p>

      </div>
    );
  }

  return (
    <div className="mt-8 space-y-5">

      {tasks.map(function (task) {

        return (
          <TaskCard
            key={task.originalIndex}
            task={task}
            index={task.originalIndex}
            deleteTask={deleteTask}
            openEdit={openEdit}
            toggleComplete={toggleComplete}
          />
        );

      })}

    </div>
  );
}

export default TaskList;