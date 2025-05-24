import { Routes, Route } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/create" element={<TaskForm />} />
    </Routes>
  );
}

export default App;
