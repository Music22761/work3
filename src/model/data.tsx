export interface Data {
  users: User[];
  landmarks: Landmark[];
}

export interface Landmark {
  id: number;
  country: string;
  name: string;
  description: string;
  image: string;
}

export interface User {
  id: number;
  type: number;
  username: string;
  password: string;
  avatar: string;
  country: string;
}
