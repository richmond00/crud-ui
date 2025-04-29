import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface User {
  id: string;
  username: string;
  email: string;
}

export const useUserData = () =>
  useQuery<User[], Error>({
    queryKey: ['users'],
    queryFn: async () => {
      const { data } = await axios.get('http://localhost:8080/api/users');
      return data;
    },
  });
