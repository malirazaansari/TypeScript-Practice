import { useEffect, useState } from "react";
import axios from "axios";
import { Task } from "../types";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/api/tasks");
    setTasks(res.data);
  };

  const createTask = async (task: Task) => {
    const res = await axios.post("http://localhost:5000/api/tasks", task);
    setTasks([...tasks, res.data]);
  };

  const updateTask = async (task: Task) => {
    await axios.put(`http://localhost:5000/api/tasks/${task.id}`, task);
    fetchTasks();
  };

  const deleteTask = async (id: string) => {
    await axios.delete(`http://localhost:5000/api/tasks/${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return { tasks, createTask, updateTask, deleteTask };
};
