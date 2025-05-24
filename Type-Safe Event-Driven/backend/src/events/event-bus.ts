type Listener<T> = (event: T) => void;

export class EventBus {
  private listeners: Record<string, Listener<any>[]> = {};

  on<T extends { type: string }>(
    eventType: T["type"],
    listener: Listener<T>
  ): void {
    if (!this.listeners[eventType]) {
      this.listeners[eventType] = [];
    }
    this.listeners[eventType].push(listener);
  }

  emit<T extends { type: string }>(event: T): void {
    const eventListeners = this.listeners[event.type] || [];
    for (const listener of eventListeners) {
      listener(event);
    }
  }
}
