import { GenericService } from "./GenericService";

export class TaskService {
  private static instance: TaskService;

  private constructor() {}

  public static getInstance(): TaskService {
    if (!TaskService.instance) {
      TaskService.instance = new TaskService();
    }
    return TaskService.instance;
  }

  async getTasks(): Promise<APIResponse> {
    return GenericService.get({
      endpoint: "/tasks",
      hasAuthToken: true,
    });
  }

  async createTask(body: CreateTask): Promise<APIResponse> {
    return GenericService.post({
      endpoint: "/tasks/create-task/",
      body,
      hasAuthToken: true,
    });
  }

  async deleteTask(taskId: string): Promise<APIResponse> {
    return GenericService.delete({
      endpoint: `/tasks/delete-task/${taskId}`,
      body: {},
      hasAuthToken: true,
    });
  }

  async updateTask(taskId: string, body: CreateTask): Promise<APIResponse> {
    return GenericService.put({
      endpoint: `/tasks/update-task/${taskId}`,
      body,
      hasAuthToken: true,
    });
  }
}
