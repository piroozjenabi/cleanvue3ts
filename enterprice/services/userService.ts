import axios from 'axios';
import { User } from '../types/userType';

const API_URL = 'https://api.example.com/users';

export async function fetchUsers(): Promise<User[]> {
  const response = await axios.get<{ users: User[] }>(API_URL);
  return response.data.users;
}