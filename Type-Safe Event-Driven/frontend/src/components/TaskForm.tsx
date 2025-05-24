import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      navigate("/");
    } else {
      alert("Failed to create task");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Task</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="block w-full p-2 mb-2 border"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="block w-full p-2 mb-2 border"
        required
      ></textarea>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Submit
      </button>
    </form>
  );
};

export default TaskForm;
