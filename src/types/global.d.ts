interface GenericServiceParams {
  endpoint: string;
  body?: object;
  hasAuthToken?: boolean;
}

interface APIResponse {
  data: any;
  ok: boolean;
  status: number;
}

interface UserDetailsContext {
  _id: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  profilePhotoUrl: string;
  createdAt: string;
}

interface InitialStateUserContext {
  userDetails: UserDetailsContext;
  themeMode: "light" | "dark";
}

interface InputsLogin {
  userName: string;
  password: string;
}

interface InputsRegister {
  userName: string;
  password: string;
  name: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  profilePhotoUrl: string;
}

interface CreateTask {
  title: string;
  description: string;
  status?: string | string[];
}

interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  author: string;
  updatedAt: string;
  createdAt: string;
  __v?: number;
}
