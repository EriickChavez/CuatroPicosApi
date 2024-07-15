export interface IUser {
  id: string;
  email: string;
  password: string;
}

export interface IUserController {
  login(
    email: string,
    password: string
  ): Promise<{ user: IUser; token: string }>;
  register(
    name: string,
    email: string,
    password: string
  ): Promise<{ user: IUser; token: string }>;
}
