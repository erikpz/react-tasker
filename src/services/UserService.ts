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

  async getUser(): Promise<APIResponse> {
    return GenericService.get({
      endpoint: `/users`,
      hasAuthToken: true,
    });
  }
}
