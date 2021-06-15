import { GenericService } from "./GenericService";

export class UserService {
  private static instance: UserService;

  private constructor() {}

  public static getInstance(): UserService {
    if (!UserService.instance) {
      UserService.instance = new UserService();
    }
    return UserService.instance;
  }

  async getUser(userName: string): Promise<APIResponse> {
    return GenericService.get({
      endpoint: `/users/${userName}`,
      hasAuthToken: true,
    });
  }
}
