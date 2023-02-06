export interface IDBError {
  message: string;
  parameters: string[]
}
export interface IUsers {
  names : string[]
}
export interface IRoom {
  room_name: string,
  creator_name: string,
}

export interface IRooms {
  rooms: IRoom[];
}

export interface IRoomUsers {
  room_name: string,
  creator_name: string,
  names: string[]
}

export interface IMessage {

}



export interface ICreateUserRequest {
  name: string;
  password: string;
  email: string;
  dob: string;
}
export interface ICreateUserResponse {
  name: string;
}

export interface IGetUserResponse {
  name: string;
  email: string;
  dob: string;
}
export interface IGetUserResponse {
  users: IGetUserResponse[];
}

export interface ILoginRequest {
  name: string;
  password: string;
}
export interface ILoginResponse {
  name: string;
}

export interface IDeleteUserRequest {
  name: string;
}
export interface IDeleteUserResponse {
  name: string;
}

export interface ICreateRoomRequest {
  room_name: string;
  creator_name: string;
}
export interface ICreateRoomResponse {
  room_name: string;
  creator_name: string;
}


export interface IJoinRoomRequest {
  room_name: string;
  creator_name: string;
  user_name: string
}
export interface IJoinRoomResponse {
  room_name: string;
  creator_name: string;
  user_name: string
}

export interface ILeaveRoomRequest {
  room_name: string;
  creator_name: string;
  user_name: string
}
export interface ILeaveRoomResponse {
  room_name: string;
  creator_name: string;
  user_name: string
}

export interface IActiveUsersResponse {
  users: string[];
}
