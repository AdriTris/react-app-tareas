import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-gray-900 h-screen">
      <section className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </section>
    </main>
  );
}

export default App;
