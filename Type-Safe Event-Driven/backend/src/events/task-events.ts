export type TaskCreatedEvent = {
  type: "TASK_CREATED";
  id: string;
  title: string;
};

export type TaskDeletedEvent = {
  type: "TASK_DELETED";
  id: string;
};

export type TaskEvents = TaskCreatedEvent | TaskDeletedEvent;
