import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Task {
  id: string;
  title: string;
  description: string;
}

const TaskList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch(console.error);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task List</h1>
      <Link to="/create" className="text-blue-500">
        Create Task
      </Link>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="border p-2 mb-2">
            <h2 className="font-semibold">{task.title}</h2>
            <p>{task.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
