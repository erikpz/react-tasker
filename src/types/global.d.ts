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
  id: string;
  name: string;
  lastName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  profilePhotoUrl: string;
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
