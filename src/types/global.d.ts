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
}
