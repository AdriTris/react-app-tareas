import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md ">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-300 text-sm">{task.description}</p>
      <button
        className="bg-rose-400 rounded-md px-2 py-1 mt-4 hover:bg-rose-700 cursor-pointer"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar tarea
      </button>
    </div>
  );
}
