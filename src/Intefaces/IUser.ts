export interface IUser {
  id: string;
  email: string;
  password: string;
}
export interface IUserResponse{
  user: IUser;
  token: string
}

export interface IUserController {
  login(
    email: string,
    password: string
  ): Promise<IUserResponse>;
  register(
    email: string,
    password: string
  ): Promise<IUserResponse>;
}
