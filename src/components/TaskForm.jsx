import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <section className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-slate-800 p-10 mb-4 space-y-2"
      >
        <h1 className="text-2xl font-bold text-white">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          className="bg-slate-300 p-1 w-full"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripcion de tu tarea"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 p-1 w-full"
        ></textarea>
        <button className="bg-cyan-500 text-white rounded-md px-2 py-1 hover:bg-cyan-700 cursor-pointer">
          Guardar
        </button>
      </form>
    </section>
  );
}
