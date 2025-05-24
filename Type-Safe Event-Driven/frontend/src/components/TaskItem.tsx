import { Task } from "../types";
import { FC } from "react";
import { Pencil, Trash2 } from "lucide-react";

interface Props {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const TaskItem: FC<Props> = ({ task, onEdit, onDelete }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">{task.title}</h3>
        <p className="text-sm text-gray-600">{task.description}</p>
        <div className="text-xs text-gray-500">Due: {task.dueDate}</div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(task)}
          className="text-blue-500 hover:text-blue-700"
        >
          <Pencil size={18} />
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
