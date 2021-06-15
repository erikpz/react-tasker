import { GenericService } from "./GenericService";

export class AuthService {
  private static instance: AuthService;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  async login(body: InputsLogin): Promise<APIResponse> {
    return GenericService.post({
      endpoint: "/auth/sign-in",
      body,
      hasAuthToken: true,
    });
  }

  async createUser(body: InputsRegister): Promise<APIResponse> {
    return GenericService.post({
      endpoint: "/auth/create-user",
      body,
      hasAuthToken: true,
    });
  }
}
