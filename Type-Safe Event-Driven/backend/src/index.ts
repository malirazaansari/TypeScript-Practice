import { EventBus } from "./events/event-bus";
import { TaskService } from "./services/task-service";
import { TaskCreatedEvent, TaskDeletedEvent } from "./events/task-events";

const eventBus = new EventBus();
const taskService = new TaskService(eventBus);

// Register listeners
eventBus.on<TaskCreatedEvent>("TASK_CREATED", (event) => {
  console.log(`🎉 Task Created: [${event.id}] ${event.title}`);
});

eventBus.on<TaskDeletedEvent>("TASK_DELETED", (event) => {
  console.log(`🗑️ Task Deleted: [${event.id}]`);
});

// Use the service
taskService.createTask("1", "Learn TypeScript");
taskService.createTask("2", "Build event system");
taskService.deleteTask("1");
