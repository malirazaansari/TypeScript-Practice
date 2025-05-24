import { Task } from "../models/task";
import { EventBus } from "../events/event-bus";
import { TaskCreatedEvent, TaskDeletedEvent } from "../events/task-events";

export class TaskService {
  private tasks: Task[] = [];

  constructor(private eventBus: EventBus) {}

  createTask(id: string, title: string) {
    const task = new Task(id, title);
    this.tasks.push(task);

    const event: TaskCreatedEvent = {
      type: "TASK_CREATED",
      id,
      title,
    };
    this.eventBus.emit(event);
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id);

    const event: TaskDeletedEvent = {
      type: "TASK_DELETED",
      id,
    };
    this.eventBus.emit(event);
  }
}
